const indexCtrl = require('../controllers/index.controller');
module.exports = function (router) {
    router.route('/')
        .get(indexCtrl.hello)
        .post(indexCtrl.hello)
        .put(indexCtrl.hello)
        .delete(indexCtrl.hello);
};