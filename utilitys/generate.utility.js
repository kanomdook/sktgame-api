const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const property = require('../config/property');

exports.token = function (_id) {
    var token = jwt.sign({ '_id': _id }, property.secret_key, {
        expiresIn: '100y'
    });
    return token;
};

exports.encrypt = function (password) {
    try {
        var cipher = crypto.createCipher('aes192', password);
        var encrypted = cipher.update(property.encrypt_key, 'utf8', 'hex');
        encrypted += cipher.final('hex');
        return encrypted;
    } catch (error) {
        return null;
    }
};