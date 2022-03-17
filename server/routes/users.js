var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  console.log(req.body, 'the body');
  //The example response returns { users: [array of users] } instead of just res.json(users)
  //naming the user object users is a more clear way of presenting this information
  res.json({ users: mockUsers });
});

//practice
router.get('/hello', function(req, res, next) {
  //res.send('respond with a resource');
  console.log(req.body, 'Hello World');
  //The example response returns { users: [array of users] } instead of just res.json(users)
  //naming the user object users is a more clear way of presenting this information
  res.json({ users: mockUsers[0] });
});

module.exports = router;

let mockUsers = [
  { id: 1, name: 'Marlin', email: 'marlin@gmail.com' },
  { id: 2, name: 'Nemo', email: 'nemo@gmail.com' },
  { id: 3, name: 'Dory', email: 'dory@gmail.com' }
];