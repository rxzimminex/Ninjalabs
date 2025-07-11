
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  password: String,
  bio: String,
  avatar: String,
  links: [
    {
      title: String,
      url: String,
      enabled: Boolean
    }
  ]
});

module.exports = mongoose.model('User', UserSchema);
