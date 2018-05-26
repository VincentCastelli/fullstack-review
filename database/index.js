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

let save = (dataObj) => {
  let repo = new Repo(dataObj);

  repo.save((err) => {
    if (err) {
      console.log('Could not save data to MongoDB');
    }
  });
}

module.exports.save = save;