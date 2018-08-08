const sportMatchCtrl = require('../controllers/sport-match.controller');

module.exports = function (router) {
    router.route('/sportmatch')
        .post(sportMatchCtrl.saveSportMatch);
};