const User = require('../models/User');

module.exports = {
  createUser,
  getUser,
  getUsers,

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

async function getUsers(req, res) {
  try {
    const users = await User.find({})

    res.status(200).json(users);
  } catch (err) {
    res.status(400).send(err)
  }
};





