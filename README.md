[![NPM](https://nodei.co/npm/tinyurl.png?downloads=true&stars=true)](https://npmjs.com/package/tinyurl/)

# TinyURL [![Build Status](https://travis-ci.org/AlphaT3ch/TinyURL.svg?branch=master)](https://travis-ci.org/AlphaT3ch/TinyURL)
[http://TinyURL.com](http://tinyurl.com) URL Shortener Node.js Module

Example Shorten:

First run ```npm install TinyURL``` to install the TinyURL package to your system.

```javascript
var TinyURL = require('tinyurl');

TinyURL.shorten('http://google.com', function(res) {
	console.log(res); //Returns a shorter version of http://google.com - http://tinyurl.com/2tx
});
```

Returns an empty string if an error occurs.

[This Package Is Under The MIT License](https://raw.githubusercontent.com/AlphaT3ch/TinyURL/master/LICENSE.txt)
