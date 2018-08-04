const notification = require('../utilitys/notification.utility');
const handle = require('../utilitys/handle');

exports.sendNotification = async function (req, res, next) {
    try {
        await notification.send(req.device ? req.device : [], req.message ? req.message : '');
        next();
    } catch (error) {
        res.status(404).json(handle.error(error));
    }
};