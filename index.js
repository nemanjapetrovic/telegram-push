const https = require('https');

const headers = {
  'Content-Type': 'application/json'
};

exports.sendAsync = async (chatId, message) => {
  const url = `${process.env.TELEGRAM_URL}/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;
  const [h, path, action] = url.split('://')[1].split('/');
  const [host, port] = h.split(':');

  const params = {
    headers: headers,
    method: 'POST',
    host,
    port: port || url.startsWith('https://') ? 443 : 80,
    path: (path) ? `/${path}/${action}` : '/'
  };

  const postData = {
    chat_id: chatId,
    text: message
  };

  return new Promise((resolve, reject) => {
    const req = https.request(params, (res) => {
      if (res.statusCode < 200 || res.statusCode >= 300) {
        return reject(new Error(`Status Code: ${res.statusCode}`));
      }
      resolve(res);
    });

    req.on('error', (err) => {
      reject(err);
    });

    req.write(JSON.stringify(postData));
    req.end();
  });
};
