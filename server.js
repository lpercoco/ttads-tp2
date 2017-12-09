var express        = require('express');
var mongoose    = require('mongoose');
var bodyParser     = require('body-parser');
var cors           = require('cors');
var methodOverride = require('method-override');

var app            = express();
app.use(cors());

const port = '3000' ; //?

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());


mongoose.connect('mongodb://localhost/football');
require('./models/team.js');
require('./models/match.js');
require('./models/matchEvent.js');
require('./models/event.js');

app.use(require('./routes'));

var router=express.Router();

app.use(router);

app.listen(port, () => {
  console.log('We are live on ' + port);
});
