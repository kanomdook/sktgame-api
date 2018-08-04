const userCtrl = require('../controllers/user.controller');
const auth = require('../config/auth');

module.exports = function (router) {
    router.route('/user/signin')
        .post(userCtrl.signin, userCtrl.setNewToken);

    router.route('/user/signup')
        .post(userCtrl.signup, userCtrl.setNewToken);

    router.route('/user/:userid')
        .get(auth.verify, userCtrl.userData);

    router.param('userid', userCtrl.getUserID);
};