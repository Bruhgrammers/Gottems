import mongoose from 'mongoose';
import bluebird from 'bluebird';

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/gottems');

// const db = pmongo('gottems', ['users']);

// should we use mongoose over pmongo??

// create user schemas

const db = {}

db.userSchema = new mongoose.Schema({
  username: {type: String, index: { unique: true }},
  password: String,
  firstname: String,
  lastname: String,
  birthday: Date,
  email: {type: String, index: { unique: true }},
  preferences: {
    shirtsize: String,
    pantssize: String,
    shoesize: String
  },
  friends: {},
  avatarlink: String
});

db.User = mongoose.model('User', db.userSchema);

module.exports = db;
