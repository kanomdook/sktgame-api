const request = require('request');
const property = require('../config/property');

exports.send = function (device, message) {
    return new Promise((resolve, reject) => {
        request(
            {
                method: 'POST',
                uri: 'https://onesignal.com/api/v1/notifications',
                headers: {
                    "authorization": "Basic " + property.onesignal.restKey,
                    "content-type": "application/json"
                },
                json: true,
                body: {
                    'app_id': property.onesignal.appID,
                    'contents': { en: message },
                    'include_player_ids': Array.isArray(device) ? device : [device]
                }
            },
            function (error, response, body) {
                if (!body.errors) {
                    resolve({ success: true, data: body });
                } else {
                    reject({ success: false, error: 'cannot send notification because: ' + body.errors });
                }
            }
        );
    });
};