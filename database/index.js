const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  id: Number,
  fullname: String,
  owner: { id: Number, login: String, url: String, repos_url: String },
  private: Boolean,
  description: String,
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