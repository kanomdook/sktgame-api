const sportCtrl = require('../controllers/sport.controller');

module.exports = function (router) {
    router.route('/sports')
        .get(sportCtrl.getSports);

    router.route('/sport')
        .post(sportCtrl.saveSport);
};