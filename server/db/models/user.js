import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema({
  email: {type: String, unique: true},
  password: String,
  firstname: String,
  lastname: String,
  birthday: Date,
  username: {type: String, unique: true, sparse: true},
  preferences: {
    shirtsize: String,
    pantssize: String,
    shoesize: String
  },
  friends: {},
  avatar: String
});

module.exports = mongoose.model('User', userSchema);
