// Requiring our models and passport as we've configured it
// const passport = require("../config/passport");
const passport = require("passport");
const Authentication = require('../controllers/authentication');
const passportService = require('../app/services/passport');
const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function(app) {
    app.get('/', requireAuth, function(req, res) {
        res.send({ hi: 'there' });
    });
    app.post('/signin', requireSignin, Authentication.signin);
    app.post('/signup', Authentication.signup);
};