var _       = require('underscore')
  , request = require('request')
  , qs      = require('querystring')
  , express = require('express')
  , app     = express()

var intros = [
  'You should go to',
  'Don\'t you feel like',
  'How about',
  'Feels like a day for',
  'Why not go to',
  'What about',
  'Treat yourself to some',
  'Aren\'t you in the mood for',
  'Maybe',
  'Been a while since you\'ve gone to',
  'I think Brandon really wants'
];

var venues;

var loadVenues = function () {
    var query = qs.stringify({
    client_id: process.env.FOURSQUARE_CLIENT_ID,
    client_secret: process.env.FOURSQUARE_CLIENT_SECRET,
    v: '20131103'
  });

  request('https://api.foursquare.com/v2/lists/5211139711d2019ea4f04f89/?' + query, function (error, response, body) {
    venues = _.map(JSON.parse(body).response.list.listItems.items, function (item) {
      return item.venue.name;
    });
  });
}();
  
app.use(express.static('public'));

app.get('/random', function (request, response) {
  response.send({
    intro: _.sample(intros),
    venue: _.sample(venues)
  });
});

app.get('/', function (request, response) {
  response.render('index.html');
});

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log("Listening on port " + port);
});
