const express = require('express');
const bodyParser = require('body-parser');
const dbSave = require('../database/index.js');
const helper = require('../helpers/github.js');

let app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  helper.getReposByUsername(req.body, (objArray) => {
    
  let dataArray = objArray.map((repo) => {

      let repoObj = {
        name: repo['name'],
        ownerId: repo['owner']['id'],
        ownerLogin: repo['owner']['login'],
        ownerUrl: repo['owner']['url'],
        private: repo['private'],
        description: repo['description'],
        stargazers_count: repo['stargazers_count'],
        watchers_count: repo['watchers_count'],
        created_at: repo['created_at'],
        updated_at: repo['updated_at']
      }
      return repoObj;
    });
    console.log('--------->', dataArray);

    dbSave.save(dataArray, (err) => {
      if (err) {
        console.log(`Error: ${err}`);
      } else {
        res.status(201).send();
      }
    });
  });
  
  
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

