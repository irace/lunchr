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
  'LET’S GET SOME FUCKING',
  'Know what would hit the spot?',
  'Feels like a day for',
  'Why not go to',
  'Need somethin healthy. How ’bout',
  'Indulge in some',
  'What about',
  'Hmm…',
  'Jonesing for some',
  'Let’s treat ourselves to',
  'Aren’t you in the mood for',
  'Maybe',
  'Been a while since you’ve gone to'
];

var venues;

(function () {
  var query = qs.stringify({
    client_id: 'FQGWCGTOG0TQABLSBTJGTM1E13IWLI3VIQYFY0DCDCXL3KJW',
    client_secret: '1KHTEKXZUC03DX3CDUDFDVLP4WXP1ELVHA2K0AMNFYM2D5QS',
    v: '20131103'
  });

  var listID = '58f0d69a9411f232d35ed948';

  request('https://api.foursquare.com/v2/lists/' + listID + '/?' + query, function (error, response, body) {
    venues = _.map(JSON.parse(body).response.list.listItems.items, function (item) {
      return item.venue;
    });
  });
}());

app.use(express.static('public'));

app.get('/random', function (request, response) {
  var venue = _.sample(venues);

  response.json({
    intro: _.sample(intros),
    venue: venue.name,
    venue_id: venue.id
  });
});

app.get('/', function (request, response) {
  response.render('index.html');
});

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log("Listening on port " + port);
});
