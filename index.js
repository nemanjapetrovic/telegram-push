const request = require('request');

const headers = {
    'Content-Type': 'application/json'
};

let options = {
    method: 'POST',
    url: `${process.env.TELEGRAM_URL}/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
    headers: headers
};

module.exports.sendAsync = function (chatId, message) {
    options.formData = {
        chat_id: chatId,
        text: message
    };

    return new Promise(function (resolve, reject) {
        request(options, function (err, response) {
            if (err) {
                reject(err);
            }
            resolve(response);
        });
    });
}