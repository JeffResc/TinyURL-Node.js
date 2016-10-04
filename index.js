var https = require('https');

module.exports = {
  shorten: function(url, cb) {
      https.get('https://tinyurl.com/api-create.php?url=' + encodeURIComponent(url), function (response) {
        var body = '';
        response.on('data', function(chunk) { body += chunk; });
        response.on('end', function() { cb(body); });
      });
  }
};
