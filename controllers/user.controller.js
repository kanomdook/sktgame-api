const userModel = require('mongoose').model('user');
const generate = require('../utilitys/generate.utility');
const handle = require('../utilitys/handle');

exports.getUserID = function (req, res, next, userid) {
    req.userID = userid;
    next();
};

exports.signin = function (req, res, next) {
    var encrypted = generate.encrypt(req.body.password);
    userModel.findOne({ email: req.body.email, password: encrypted }, '_id').exec(function (err, result) {
        if (err) {
            res.status(404).json(handle.error(err));
        } else {
            if (result) {
                req.userid = result._id;
                next();
            } else {
                res.status(404).json(handle.error('user not found'));
            }
        }
    });
};

exports.signup = function (req, res, next) {
    req.body.password = generate.encrypt(req.body.password);
    var user = new userModel(req.body);
    user.save(function (err, result) {
        if (err) {
            res.status(404).json(handle.error(err));
        } else {
            req.userid = result._id;
            next();
        }
    });
};

exports.userData = function (req, res) {
    userModel.findById(req.userID).exec(function (err, result) {
        if (err) {
            res.status(404).json(handle.error(err));
        } else {
            res.json(handle.success(result));
        }
    });
};

exports.setNewToken = function (req, res) {
    var token = generate.token(req.userid);
    userModel.findByIdAndUpdate(req.userid, { $set: { token: token } }, { new: true, fields: { name: 1, email: 1, token: 1, role: 1, province: 1, district: 1 } }).exec(function (err, result) {
        if (err) {
            res.status(404).json(handle.error(err));
        } else {
            res.json(handle.success(result));
        }
    });
};