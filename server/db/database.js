// import mongoose from 'mongoose';

// // mongoose.Promise = global.Promise;
// // mongoose.connect('mongodb://localhost/gottems');

// // const db = pmongo('gottems', ['users']);

// // should we use mongoose over pmongo??

// // create user schemas

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   const userSchema = new mongoose.Schema({
//     username: {type: String, index: { unique: true }},
//     password: String,
//     firstname: String,
//     lastname: String,
//     birthday: Date,
//     email: {type: String, index: { unique: true }},
//     preferences: {
//       shirtsize: String,
//       pantssize: String,
//       shoesize: String
//     },
//     friends: {},
//     avatarlink: String
//   });

//   const User = mongoose.model('User', userSchema);
// });

// module.exports = db;
