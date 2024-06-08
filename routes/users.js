const { Router } = require('express');
const usersCtrl = require('../controllers/users.js');

const router = Router();

//Create a user
router.post('/', usersCtrl.createUser);

//Read all users
router.get('/', usersCtrl.getUsers);

// router.get('/email/:email', usersCtrl.findByEmail);

//Get a user by ID
router.get('/:id', usersCtrl.getUser);

//update a user by ID
router.patch('/:id', usersCtrl.chgUser);

//delete a user by ID
router.delete('/:id', usersCtrl.deletedUser);



module.exports = router;
