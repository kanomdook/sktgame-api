const schoolCtrl = require('../controllers/school.controller');

module.exports = function (router) {
    router.route('/schools')
        .get(schoolCtrl.getSchools);

    router.route('/school')
        .post(schoolCtrl.saveSchool);
};