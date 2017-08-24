// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
// Requiring our custom middleware for checking if a user is logged in
// var isAuthenticated = require("../config/middleware/isAuthenticated");


module.exports = function(app) {
    // HTML GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases the user is shown an HTML page of content
    // ---------------------------------------------------------------------------

    // app.get("/", function(req, res) {
    //     res.sendFile(path.join(__dirname, "../public/pages/index.html"));
    // });

    // app.get(function(req, res) {
    //     res.sendFile(path.join(__dirname, "/../public/pages/index.html"));
    // });

    // app.get("/forums.html", function(req, res) {
    //     res.sendFile(path.join(__dirname, "../public/pages/forums.html"));
    // });
    // app.get("/aboutus.html", function(req, res) {
    //     res.sendFile(path.join(__dirname, "../public/pages/aboutus.html"));
    // });
    // app.get("/angelslanding.html", function(req, res) {
    //     res.sendFile(path.join(__dirname, "../public/pages/angelslanding.html"));
    // });
    // app.get("/elephantcanyon.html", function(req, res) {
    //     res.sendFile(path.join(__dirname, "../public/pages/elephantcanyon.html"));
    // });
    // app.get("/franconia.html", function(req, res) {
    //     res.sendFile(path.join(__dirname, "../public/pages/franconia.html"));
    // });
    // app.get("/halfdome.html", function(req, res) {
    //     res.sendFile(path.join(__dirname, "../public/pages/halfdome.html"));
    // });
    // app.get("/highline.html", function(req, res) {
    //     res.sendFile(path.join(__dirname, "../public/pages/highline.html"));
    // });
    // app.get("/kalalau.html", function(req, res) {
    //     res.sendFile(path.join(__dirname, "../public/pages/kalalau.html"));
    // });
    // app.get("/maroonbells.html", function(req, res) {
    //     res.sendFile(path.join(__dirname, "../public/pages/maroonbells.html"));
    // });
    // app.get("/rootglaciertrail.html", function(req, res) {
    //     res.sendFile(path.join(__dirname, "../public/pages/rootglaciertrail.html"));
    // });
    // app.get("/thenarrows.html", function(req, res) {
    //     res.sendFile(path.join(__dirname, "../public/pages/thenarrows.html"));
    // });
    // app.get("/wyomingcascade.html", function(req, res) {
    //     res.sendFile(path.join(__dirname, "../public/pages/wyomingcascade.html"));
    // });

    // // Passport Below********
    // app.get("/pages/login.html", function(req, res) {
    //     // If the user already has an account send them to the members page
    //     if (req.user) {
    //         res.redirect("../pages/index.html");
    //     }
    //     res.sendFile(path.join(__dirname + "../public/pages/login.html"));
    //     res.sendFile(path.join(__dirname, "/pages/aboutus.html"));

    // });

};