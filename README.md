[![NPM](https://nodei.co/npm/tinyurl?downloads=true&downloadRank=true&stars=true)](https://npmjs.com/package/tinyurl/)

# TinyURL
[http://TinyURL.com](http://tinyurl.com) URL Shortener Node.js Module

[![Coverage Status](https://coveralls.io/repos/AlphaT3ch/TinyURL/badge.svg)](https://coveralls.io/r/AlphaT3ch/TinyURL)
[![Travis CI Status](https://travis-ci.org/AlphaT3ch/TinyURL.svg)](https://travis-ci.org/AlphaT3ch/TinyURL)

Example Shorten:

First run ```npm install TinyURL``` to install the TinyURL package to your system.

```javascript
var TinyURL = require('tinyurl');

TinyURL.shorten('http://google.com', function(res) {
	console.log(res); //Returns a shorter version of http://google.com - http://tinyurl.com/2tx
});
```