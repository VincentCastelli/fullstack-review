const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  name: String,
  ownerId: Number,
  ownerLogin: String,
  ownerUrl: String,
  private: Boolean,
  description: String,
  stargazers_count: Number,
  watchers_count: Number,
  created_at: Date,
  updated_at: Date
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (dataObj, callback) => {
  Repo.create(dataObj, (err) => {
    if (err) {
      callback(err);
    } else {
      callback(null);
    }
    
  });
};

module.exports.save = save;