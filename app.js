var express = require('express'),
    request = require('request'),
    querystring = require('querystring');

//var app = express();
//
//var places;
//
//app.get('/random', function(req, res) {
//
//});
//
//app.get('/', function(req, res) {
    var query = querystring.stringify({
        client_id : 'IUWMBGIE1YVVYO3UDDJOJKVCIY3CTJ5HNDH4H5LSZAOHMXYT',
        client_secret : 'GZYEDWLTAGEF3KGX3YJACULGF1GS0EZP1Q5MILZD1LWMW3FD',
        v : '20131103'
    });

//    request('https://api.foursquare.com/v2/users/2099890/lists?' + query, function (error, response, body) {
//
////        res.send('hello world');
//    });

    var url = 'https://api.foursquare.com/v2/lists/5211139711d2019ea4f04f89?' + query;

	request(url, function(error, response, body) {
        console.log('');
	});
//});
//
//app.listen(3000, function() {
//    console.log("Listening on port " + 3000);
//});
