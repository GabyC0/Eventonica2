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
// router.get('/', function(req, res, next) {
//   //res.send('respond with a resource');
//   console.log(req.body, 'Hello World');
//   //The example response returns { users: [array of users] } instead of just res.json(users)
//   //naming the user object users is a more clear way of presenting this information
//   res.json({ users: mockUsers });
//   res.json({ otherUsers: otherUsers});
// });

//to add users
router.post("/", function(req, res, next) {
  const user = {
    name: req.body.name,
    email: req.body.id,
  };
  console.log(user);
  res.send(req.body);
});

module.exports = router;

let mockUsers = [
  { id: 1, name: 'Marlin', email: 'marlin@gmail.com' },
  { id: 2, name: 'Nemo', email: 'nemo@gmail.com' },
  { id: 3, name: 'Dory', email: 'dory@gmail.com' }
];

// let otherUsers = [
//   { name: 'Marlin', email: 'marlin@gmail.com', id: '1' },
//   { name: 'Nemo', email: 'nemo@gmail.com', id: '2' },
//   { name: 'Dory', email: 'dory@gmail.com', id: '3' }
// ];