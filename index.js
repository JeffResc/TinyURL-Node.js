var http = require("http")

module.exports = {
    shorten: function(url, cb) {
    	http.get('http://tinyurl.com/api-create.php?url=' + encodeURIComponent(url), res => {
    		res.on('data', chunk => {
    			cb(chunk.toString())
    		})
    	}).on("error", () => {
    		cb("")
    	})
    }
};
