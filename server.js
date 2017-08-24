const express = require('express');
const bodyParser = require('body-parser');
var path = require('path');
var session = require('express-session');
const http = require('http');
var socketIO = require('socket.io');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();

// DB Setup
mongoose.connect('mongodb://localhost:auth/auth');


const PORT = process.env.PORT || 3000;


// BodyParser makes it possible for our server to interpret data sent to it.
// The code below is pretty standard.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static('/public'));
app.use(express.static(process.cwd() + "/public"));

// App Setup
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));
// router(app);

// ================================================================================
// ROUTER 
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
// app.use(require("./routes/htmlRoutes"));
// ================================================================================


var { generateMessage, generateLocationMessage } = require('./app/utils/socketMessenger-background/message');

//import validation
var { isRealString } = require('./app/utils/socketMessenger-background/validation');

//Users Array
var { Users } = require('./app/utils/socketMessenger-background/users');

//avoids going into and out of server
var publicPath = path.join(__dirname, './public');

//
// var port = process.env.PORT || 3000;

//create server using http library (app.listen does the same call behind the scenes)
//takes function app  
const server = http.createServer(app);

//configure server to also use socket io call to socket IO and pass in server 
//(websocket server to communicate with client and server)
var io = socketIO(server);

var users = new Users();

//calling app to configue express static middleware
app.use(express.static(publicPath));

//io.on lets you register an event listener
//connection is one event that lets you in on a connection and do something
//socket argument is for individual socket 
io.on('connection', (socket) => {
    console.log('New user connected')



    //------------JOIN--------------------------
    socket.on('join', (params, callback) => {
        var room = params.room.toLowerCase();
        //validate name and room
        if (!isRealString(params.name) || !isRealString(params.room)) {
            //using return to ensure none of code below fires if data is not valid
            return callback('Name and room name are requried.');
        }
        //join rooms or emit chat messages to other people just in room
        socket.join(room);
        users.removeUser(socket.id);
        users.addUser(socket.id, params.name, room);
        //socket.leave
        //io.emit -> io.to(params.room).emit.....
        //targer specific users socket.broadcast.emit --> socket.broadcast.to(params.room)
        //socket.emit 
        //socket.emit from admin text should say welcome to chat app
        //type of newMessage
        io.to(room).emit('updateUserList', users.getUserList(room));
        socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));
        //socket.broadcast.emit from Admin text: new user joined
        socket.broadcast.to(room).emit('newMessage', generateMessage('Admin', `${params.name} has joined.`));
        callback();
    });

    // //creating the event, function, specify data
    //     socket.emit('newMessage', {
    //         from: 'John', 
    //         text: 'See you then',
    //         createdAt: 123123
    //     });

    //t-----------EVENT LISTENERS FOR CREATE AND CREATE LOCATION-----------------

    //custom event create message get message data and print to screen
    socket.on('createMessage', (message, callback) => {
        //var to getuser method created which takes ID
        var user = users.getUser(socket.id);
        //if user exists
        if (user && isRealString(message.text)) {
            //socket.emit sends to a specific user, io sends to everyone
            io.to(user.room).emit('newMessage', generateMessage(user.name, message.text));
        }
        //broadcast using socket individual, will broadcast to everyone but myself
        // socket.broadcast.emit('newMessage', {
        //     from: message.from,
        //     text: message.text,
        //     createdAt: new Date().getTime()
        // });
        callback();
    });

    socket.on('createLocationMessage', (coords) => {
        var user = users.getUser(socket.id);
        if (user) {
            io.to(user.room).emit('newLocationMessage', generateLocationMessage(user.name, coords.latitude, coords.longitude));
        }
    });


    //------------USER LEAVES --------------------
    //message to print everytime browser closes
    socket.on('disconnect', () => {
        //variable storing potentially removed users
        var user = users.removeUser(socket.id);
        //if user removed emit two events
        if (user) {
            //emit update user list
            io.to(user.room).emit('updateUserList', users.getUserList(user.room));
            //emit a message from admin to everyone
            io.to(user.room).emit('newMessage', generateMessage('Admin', `${user.name} has left`));
        }
    })
});


//start up server on port 3000 with callback function (console.log)
server.listen(PORT, () => {
    console.log(`Server is up on ${PORT}`);
});