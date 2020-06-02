var TinyURL = require('./index.js');

TinyURL.shorten('https://google.com', function(res, err) {
    if (err)
        console.log(err)
	console.log(res); //Returns a shorter version of http://google.com - http://tinyurl.com/2tx
});

//Promise Example
TinyURL.shorten('https://google.com').then(function(res) {
    console.log(res)
}, function(err) {
    console.log(err)
})

// Resolve Example
TinyURL.resolve("https://tinyurl.com/2tx").then(
  function(res) {
    console.log(res); //Returns http://google.com, the full URL located at http://tinyurl.com/2tx
  },
  function(err) {
    console.log(err);
  }
);
