const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

//* Importing Controllers
const {
  getUsers,
  getUsersByID,
  postNewUser,
  updateUser,
} = require('../controllers/usersControllers.js');

router.get('/', (req, res) =>
  res.send('<h1>Kick Up the Jams Mother Fucker!</h1>')
);

router.get('/users', getUsers);

router.get('/users/:id', getUsersByID);

router.post('/users', postNewUser);

router.put('/users/:id', updateUser);

module.exports = router;
