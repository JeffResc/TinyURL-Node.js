[![NPM](https://nodei.co/npm/tinyurl.png?downloads=true&stars=true)](https://npmjs.com/package/tinyurl/)

# TinyURL
[http://TinyURL.com](http://tinyurl.com) URL Shortener Node.js Module

Example Shorten:

First run ```npm install TinyURL``` to install the TinyURL package to your system.

```javascript
var TinyURL = require('tinyurl');

TinyURL.shorten('http://google.com', function(res) {
	console.log(res); //Returns a shorter version of http://google.com - http://tinyurl.com/2tx
});
```

[This Package Is Under The GPL-3.0 License](https://raw.githubusercontent.com/AlphaT3ch/TinyURL/master/LICENSE.txt)
