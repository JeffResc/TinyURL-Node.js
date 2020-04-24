import fetch from 'node-fetch'

module.exports = {
	shorten: function (url, cb) {
		if (typeof cb === "function") {
			fetch('http://tinyurl.com/api-create.php?url=' + encodeURIComponent(url))
				.then(chunk => {
					cb(chunk.toString())
				})
				.catch(err => {
					cb(null, err)
				})
		} else {
			return new Promise((resolve, reject) => {
				fetch('http://tinyurl.com/api-create.php?url=' + encodeURIComponent(url))
					.then(chunk => {
						resolve(chunk.toString())
					})
					.catch(err => {
						reject(err)
					})
			})
		}
	},
	resolve: function (url, cb) {
		if (typeof cb === "function")
			fetch(url)
				.then(res => {
					if (res.headers.location) cb(res.headers.location)
					else cb(null, new Error("Tiny URL not found!"))
				})
				.catch(err => {
					cb(null, err)
				})
		else
			return new Promise((resolve, reject) => {
				fetch(url)
					.then(res => {
						if (res.headers.location) resolve(res.headers.location);
						else reject(new Error("Tiny URL not found!"));
					})
					.catch(err => {
						reject(err)
					})
			});
	}
};
