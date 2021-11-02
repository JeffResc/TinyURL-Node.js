var http = require("http")
var https = require("https")

module.exports = {
  shorten: function (url, cb) {
    if (!is_url(url)) throw new Error("the URL must starts with http:// or https://");
    if (typeof cb === "function") {
      https.get('https://tinyurl.com/api-create.php?url=' + encodeURIComponent(url), res => {
        res.on('data', chunk => {
          cb(chunk.toString())
        })
      }).on("error", err => {
        cb(null, err)
      })
    } else {
      return new Promise((resolve, reject) => {
        https.get('https://tinyurl.com/api-create.php?url=' + encodeURIComponent(url), res => {
          res.on('data', chunk => {
            resolve(chunk.toString())
          })
        }).on("error", err => {
          reject(err)
        })
      })
    }
  },
  shortenWithAlias: function (data, cb) {
    const url = 'https://tinyurl.com/api-create.php?url=' + encodeURIComponent(data.url) + '&alias=' + encodeURIComponent(data.alias);

    if (typeof cb === "function") {
      https.get(url, res => {
        res.on('data', chunk => {
          cb(chunk.toString())
        })
      }).on("error", err => {
        cb(null, err)
      })
    } else {
      return new Promise((resolve, reject) => {
        https.get(url, res => {
          res.on('data', chunk => {
            resolve(chunk.toString())
          })
        }).on("error", err => {
          reject(err)
        })
      })
    }
  },
  resolve: function (url, cb) {
    if (typeof cb === "function") {
      if (url.split(':')[0] == 'http') {
        proto = http
      } else {
        proto = https
      }
      proto.get(url, res => {
        if (res.headers.location) cb(res.headers.location);
        else cb(null, new Error("Tiny URL not found!"));
      })
        .on("error", err => {
          cb(null, err);
        });
    } else {
      return new Promise((resolve, reject) => {
        if (url.split(':')[0] == 'http') {
          proto = http
        } else {
          proto = https
        }
        proto.get(url, res => {
          if (res.headers.location) resolve(res.headers.location);
          else reject(new Error("Tiny URL not found!"));
        })
          .on("error", err => {
            reject(err);
          });
      });
    }
  }
};



const is_url = (str) => {
  let regexp = /http[s]?:\/\/(?:[a-zA-Z]|[0-9]|[$-_@.&+]|[!*(),]|(?:%[0-9a-fA-F][0-9a-fA-F]))+\.[a-zA-Z]{2,}[/]?.*/g
  if (regexp.test(str)) {
    return true;
  }
  else {
    return false;
  }
} 