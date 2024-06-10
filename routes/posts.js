const { Router } = require('express');
const postsCtrl = require('../controllers/posts.js');

const router = Router();

//Create a post
router.post('/', postsCtrl.createPost);

//delete a user by ID
router.delete('/:id', postsCtrl.deletedPost);

//update a bweet by ID
router.patch('/:id', postsCtrl.editPost);

