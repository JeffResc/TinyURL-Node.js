var needle = require('needle')

module.exports = {
    shorten: function(url, cb) {
        needle.get('http://tinyurl.com/api-create.php?url=' + encodeURIComponent(url), function (error, response) {
			cb(response.body.split("\n")[0]);
        });
    }
};
