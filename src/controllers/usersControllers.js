//* Accessing local data
let usersData = require('../../data/index.js');

const getUsers = (req, res) => res.json(usersData);

const getUsersByID = (req, res) => {
  const userID = req.params.id;
  const requestedUser = usersData.find((user) => user.id === +userID);
  if (!requestedUser) {
    res
      .status(404)
      .send(
        '<h1> 404: Bad Request. This user does not exist. Why are you so stupid?</h1>'
      );
  } else {
    res.json(requestedUser);
  }
};

const postNewUser = (req, res) => {
  // * Mapping the user data to get all the existing id's into an array.
  idArray = usersData.map((user) => user.id);
  // * Finding the max value in the array of id's
  let maxID = Math.max(...idArray);
  // * Adding 1 to the current max value every time the post new user route is run.
  let newID = maxID + 1;
  // * New user objects will NOT contain an ID. We will add that
  // * progammatically.
  let newUser = req.body;
  // * New Id key and value will be added to req.body at the first position.
  let keyValues = Object.entries(newUser);
  keyValues.splice(0, 0, ['id', newID]);
  newUser = Object.fromEntries(keyValues);
  usersData.push(newUser);
  res.json(newUser);
};

//* Exporting route functions
module.exports = {
  getUsers,
  getUsersByID,
  postNewUser,
};
