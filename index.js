var http = require("http")

module.exports = {
	shorten: function(url, cb) {
		if (typeof cb === "function") {
			http.get('http://tinyurl.com/api-create.php?url=' + encodeURIComponent(url), res => {
				res.on('data', chunk => {
					cb(chunk.toString())
				})
			}).on("error", err => {
				cb(null, err)
			})
		} else {
			return new Promise((resolve, reject) => {
				http.get('http://tinyurl.com/api-create.php?url=' + encodeURIComponent(url), res => {
					res.on('data', chunk => {
						resolve(chunk.toString())
					})
				}).on("error", err => {
					reject(err)
				})
			})
		}
	},
	resolve: function(url, cb) {
		if (typeof cb === "function")
		  http
			.get(url, res => {
			  if (res.headers.location) cb(res.headers.location);
			  else cb(null, new Error("Tiny URL not found!"));
			})
			.on("error", err => {
			  cb(null, err);
			});
		else
		  return new Promise((resolve, reject) => {
			http
			  .get(url, res => {
				if (res.headers.location) resolve(res.headers.location);
				else reject(new Error("Tiny URL not found!"));
			  })
			  .on("error", err => {
				reject(err);
			  });
		  });
	  }
};
