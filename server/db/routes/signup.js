import express from 'express';
import bcrypt from 'bcrypt';

import User from '../models/user';
// import { createUser } from '../helpers/user';

const router = express.Router();

router.post('/', function(req, res) {
  const info = req.body;

  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(info.password, salt, function(err, hash) {
      const user = new User({
        password: hash,
        firstname: info.firstname,
        lastname: info.lastname,
        birthday: info.birthday,
        email: info.email
      });

      user.save(function(err, user) {
        if (err) {
          console.log('Error on saving user to database: ', err);
          res.status(400).json({
            success: false,
            message: 'You have failed to sign up',
            error: err.errmsg
          });
        } else {
          console.log('User was successfully saved to database: ', user);
          res.json({
            success: true,
            message: 'You have successfully signed up',
            email: user.email,
            firstname: user.firstname,
            lastname: user.lastname,
            birthday: user.birthday,
          });
        }
      });
    });
  });
});

module.exports = router;
