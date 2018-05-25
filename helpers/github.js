const request = require('request');
const config = require('../config.js');

let getReposByUsername = (dataObj) => {

  let options = {
    url: `https://api.github.com/users/${dataObj.username}/repos/`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  request(options, (err, res, body) => {
    if (!err && res.statusCode === 200) {
      let data = JSON.parse(body);
      console.log('----------> ', data.body); // callback?
    }
  })
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
};

module.exports.getReposByUsername = getReposByUsername;