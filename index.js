const get       = require('http').get
const stringify = require('querystring').stringify

const BASE_URL = 'http://tinyurl.com/api-create.php?'


function shorten(url, alias, cb)
{
  if(alias instanceof Function)
  {
    cb = alias
    alias = null
  }

  const query = {url: url}

  if(alias != null) query.alias = alias

  get(BASE_URL+stringify(query), function(res)
  {
    if(res.statusCode < 300 || res.statusCode >= 400)
      return cb(new Error('Not a redirection'))

    console.log(res.headers)
    cb(null, res.headers['location'])
  })
  .on('error', cb)
}


exports.shorten = shorten
