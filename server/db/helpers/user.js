import User from '../models/user';

// export function findUser(username) {
//   User.find(function (err, users) {
//     if (err) return console.error(err);
//     console.log(users);
//   });

//   return;
// }

export function createUser(userInfo) {
  var user = new User({
    username: userInfo.username,
    password: userInfo.password,
    firstname: userInfo.firstname,
    lastname: userInfo.lastname,
    birthday: userInfo.birthday,
    email: userInfo.email
  });


  return user.save(function(err, user) {
    if (err) {
      console.log(err);
    }
  });
}
