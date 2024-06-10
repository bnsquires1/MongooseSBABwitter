const Post = require('../models/posts');

module.exports = {
  createPost,
  editPost,
  deletedPost,
};

async function createPost(req, res) {
  try {
    const post = await Post.create(req.body);

    res.status(200).json(post);
  } catch (err) {
    res.status(400).json('No Bueno:(');
  }
};
  //update a post by ID
  async function editPost(req, res) {
    try {
      const posts = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true});
     
      res.status(200).json(editPost);
    } catch (err) {
      res.status(400).send(err)
    }
  };
  
  //delete a post by ID
  async function deletedPost(req, res) {
    try {
      const posts = await Post.findByIdAndDelete(req.params.id)
  
      res.status(200).json(deletedPost);
    } catch (err) {
      res.status(400).send(err)
    }
  };