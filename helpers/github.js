const request = require('request');
const config = require('../config.js');

let getReposByUsername = (dataObj, callback) => {

  let options = {
    url: `https://api.github.com/users/${dataObj.username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  request(options, (err, res, body) => {
    if (!err) {
      callback(JSON.parse(body));
    } else {
      return console.log(`Failed to get repos: ${err}`)
    }
  });
};

module.exports.getReposByUsername = getReposByUsername;