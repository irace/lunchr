var _       = require('underscore')
  , request = require('request')
  , qs      = require('querystring')
  , express = require('express')
  , app     = express()

var intros = [
  'You should go to',
  'Dude.',
  'Definitely time for some',
  'Don’t you feel like',
  'How about',
  'GET ME SOME FUCKING',
  'Know what would hit the spot?',
  'Feels like a day for',
  'Why not go to',
  'Need somethin healthy. How ’bout',
  'Indulge in some',
  'What about',
  'Hmm...',
  'Jonesing for some',
  'Let’s treat ourselves to',
  'Aren’t you in the mood for',
  'Maybe',
  'Been a while since you’ve gone to',
  'I think Brandon really wants'
];

var venues;

(function () {
  var query = qs.stringify({
    client_id: process.env.FOURSQUARE_CLIENT_ID,
    client_secret: process.env.FOURSQUARE_CLIENT_SECRET,
    v: '20131103'
  });

  var listID = '5211139711d2019ea4f04f89';

  request('https://api.foursquare.com/v2/lists/' + listID + '/?' + query, function (error, response, body) {
    venues = _.map(JSON.parse(body).response.list.listItems.items, function (item) {
      return item.venue.name;
    });
  });
}());
  
app.use(express.static('public'));

app.get('/random', function (request, response) {
  response.json({
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
