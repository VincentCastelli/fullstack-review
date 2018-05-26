const express = require('express');
const bodyParser = require('body-parser');
const $ = require('jquery');
const helper = require('../helpers/github.js');

let app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  helper.getReposByUsername(req.body);
  // This route should take the github username provided
  // and get the repo information from the github
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

