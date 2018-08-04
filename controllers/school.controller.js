const schoolModel = require('mongoose').model('school');
const handle = require('../utilitys/handle');

exports.getSchools = function (req, res) {
    schoolModel.find().exec(function (err, result) {
        if (err) {
            res.status(404).json(handle.error(err));
        } else {
            res.json(handle.success(result));
        }
    });
};

exports.saveSchool = function (req, res, next) {
    var school = new schoolModel(req.body);
    school.save(function (err, result) {
        if (err) {
            res.status(404).json(handle.error(err));
        } else {
            res.json(handle.success(result));
        }
    });
};