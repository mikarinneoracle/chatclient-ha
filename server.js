var request = require('request');
var express = require('express');
var bodyParser = require('body-parser');

var port = process.env.PORT || 3333;
var server = process.env.SERVER || '';
var version = process.env.npm_package_version || '2.0';

var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/config/', function(req, res) {
  console.log(server);
  res.send({ 'server': server, 'version': version });
});

app.get('/version/', function(req, res) {
  res.send({ 'version': version });
});

app.listen(port, function() {
  	console.log('server listening on port ' + port);
    console.log('version ' +  version);
});
