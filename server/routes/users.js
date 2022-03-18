var express = require('express');
var router = express.Router();
var db = require('../db/db-connection.js');

/* GET users listing. */
//defined middleware
router.get('/', async function (req, res, next) {

  try {
    const users = await db.any('SELECT * FROM users', [true]);
    console.log("logging  users", users);
    res.send(users);
  } catch (e) {
    console.log('catch anything wrong', e);
    return res.status(400).json({ e });

  }
  //res.send('respond with a resource');
  //console.log(req.body, 'the body');
  //The example response returns { users: [array of users] } instead of just res.json(users)
  //naming the user object users is a more clear way of presenting this information
  //res.json({ users: mockUsers });
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
router.post("/", async function(req, res, next) {
  //mockUsers.push(req.body);
  const user = {
    name: req.body.name,
    email: req.body.email,
  };
  console.log(user);
  //res.send(req.body);
  try {
    const createdUser = await db.one(
      'INSERT INTO users(name, email) VALUES($1, $2) RETURNING *',
      [user.name, user.email]
    );
    console.log(createdUser);
  } catch (e) {
    return res.status(400).json({e});
  }
});


router.delete("/:id", async (req, res) => {
  //: acts as a placeholder
  const userId = req.params.id;
  try {
    await db.none("DELETE FROM users WHERE id=$1", [userId]);
    res.send({ status: "success" });
  } catch (e) {
    return res.status(400).json({ e });
  }
});


module.exports = router;

// let mockUsers = [
//   { id: 1, name: 'Marlin', email: 'marlin@gmail.com' },
//   { id: 2, name: 'Nemo', email: 'nemo@gmail.com' },
//   { id: 3, name: 'Dory', email: 'dory@gmail.com' }
// ];

// let otherUsers = [
//   { name: 'Marlin', email: 'marlin@gmail.com', id: '1' },
//   { name: 'Nemo', email: 'nemo@gmail.com', id: '2' },
//   { name: 'Dory', email: 'dory@gmail.com', id: '3' }
// ];