import db from '../database';

export function findUser(username) {
  console.log(db.User.find());
  return;
}

export function createUser(userInfo) {
  var user = new db.User({
    username: userInfo.username,
    password: userInfo.password,
    firstname: userInfo.firstname,
    lastname: userInfo.lastname,
    birthday: userInfo.birthday
  });

  return user.save(function(err, user) {
    if (err) {
      console.log("error: ", err);
    }
  });
}
