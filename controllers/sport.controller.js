const sportModel = require('mongoose').model('sport');
const handle = require('../utilitys/handle');

exports.getSports = function (req, res) {
    sportModel.find().exec(function (err, result) {
        if (err) {
            res.status(404).json(handle.error(err));
        } else {
            res.json(handle.success(result));
        }
    });
};

exports.saveSport = function (req, res, next) {
    var sport = new sportModel(req.body);
    sport.save(function (err, result) {
        if (err) {
            res.status(404).json(handle.error(err));
        } else {
            res.json(handle.success(result));
        }
    });
};