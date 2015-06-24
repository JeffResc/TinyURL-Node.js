var request = require('request');

module.exports = {
    shorten: function(url, cb) {
        request('http://tinyurl.com/api-create.php?url=' + url, function (error, response, body) {
			cb(body.split("\n")[0]);
        });
    }
}
