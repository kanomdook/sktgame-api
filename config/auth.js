const jwt = require('jsonwebtoken');
const property = require('../config/property');
const handle = require('../utilitys/handle');

exports.verify = function (req, res, next) {
    var token = req.headers.authorization;
    jwt.verify(token, property.secret_key, function (err, decoded) {
        if (err) {
            res.status(401).json(handle.error(err));
        } else {
            next();
        }
    });
};