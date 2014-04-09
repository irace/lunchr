var express = require('express')
  , request = require('request')
  , qs      = require('querystring')
  , app     = express();

app.get('/random', function(req, res) {
});

app.get('/', function(req, res) {

  var url = 'https://api.foursquare.com/v2/lists/5211139711d2019ea4f04f89?' + query;

  res.send('hello world');
});

app.listen(3000, function() {
  console.log("Listening on port " + 3000);

  var query = qs.stringify({
    client_id: 'IUWMBGIE1YVVYO3UDDJOJKVCIY3CTJ5HNDH4H5LSZAOHMXYT',
    client_secret: 'A40SPXO1BF2CKOQPES5DIGW0VY2Z1FKTGJ4QX0BAXYOEJN4J',
    v: '20131103'
  });

  request('https://api.foursquare.com/v2/lists/5211139711d2019ea4f04f89/?' + query, function (error, response, body) {
    console.log(body);
  });
});
