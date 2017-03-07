import express from 'express';
import { findUser, createUser } from '../helpers/user';

const router = express.Router();

router.post('/', function(req, res) {
  createUser(req.body)
    .then(function(success) {
      findUser(req.body.username);
      console.log(query);
      if(!query) {
        // User.addUser(req.body)
        //   .then(function(success) {
        //     res.send(success);
        //   });
      }
    });


});

module.exports = router;
