const User = require('../models/User');

module.exports = {
  createUser,
  getUser,
  getUsers,
  chgUser,
  deletedUser
};

async function createUser(req, res) {
  try {
    const user = await User.create(req.body);

    res.status(200).json(user);
  } catch (err) {
    res.status(400).json('No Bueno:(');
  }
};

//get a single user by ID
async function getUser(req, res) {
  try {
    const users = await User.findById(req.params.id)

    res.status(200).json(users);
  } catch (err) {
    res.status(400).send(err)
  }
};
//get all users
async function getUsers(req, res) {
  try {
    const users = await User.find({})

    res.status(200).json(users);
  } catch (err) {
    res.status(400).send(err)
  }
};
//update a user by ID
async function chgUser(req, res) {
  try {
    const users = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
   
    res.status(200).json(chgUser);
  } catch (err) {
    res.status(400).send(err)
  }
};

//delete a user by ID
async function deletedUser(req, res) {
  try {
    const users = await User.findByIdAndDelete(req.params.id)

    res.status(200).json(deletedUser);
  } catch (err) {
    res.status(400).send(err)
  }
};





