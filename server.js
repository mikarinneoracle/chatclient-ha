var request = require('request');
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var port = process.env.PORT || 3333;
var server = process.env.SERVER || '';
var version = process.env.npm_package_version || '2.0';

var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(session(
  { secret: 'chatclientsecret123456789!',
    resave: false, saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }
));

app.get('/config/', function(req, res) {
  var s = req.session;
  if (s.i != null)
  {
    s.i++;
    console.log(s.i);
  } else {
    console.log("A new session ");
    s.i = 0;
  }
  req.session.save();
  //console.log(server);
  res.send({ 'server': server, 'version': version, 'i': s.i});
});

app.get('/version/', function(req, res) {
  res.send({ 'version': version });
});

app.listen(port, function() {
  	console.log('server listening on port ' + port);
    console.log('version ' +  version);
});
