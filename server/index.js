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
        repoId: repo.id,
        name: repo.name,
        ownerId: repo.owner.id,
        ownerLogin: repo.owner.login,
        ownerUrl: repo.owner.url,
        private: repo.private,
        description: repo.description,
        stargazers_count: repo.stargazers_count,
        watchers_count: repo.watchers_count,
        created_at: repo.created_at,
        updated_at: repo.updated_at
      };
      return repoObj;
    });

    dbSave.save(dataArray, (err) => {
      if (err) {
        return console.error(`Failed to save repos to database: ${err}`);
        res.send();
      } else {
        res.status(201).send('OK');
      }
    });
  });
  
  
});

app.get('/repos', function (req, res) {
  dbSave.find({}, (err, data) => {
    if (err) {
      res.status(404).send(`Failed to GET repos from database: ${err}`);
    } else {
      let sortedData = data.sort((repo1, repo2) => {
        return repo2.created_at - repo1.created_at;
      });
      res.status(200).send(sortedData.slice(0, sortedData.length - 1));
    }
  });
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

