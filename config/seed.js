// Require connection file to connect
const mongoose = require('./db-connection.js');
// Require Models for delete and create operations
const Post = require('../models/Post.js');
const User = require('../models/User.js');


const users = [
    {

    },
];

const posts = [
    {

    },
];

async function seed() {
    try {
      await Post.deleteMany({});
      await User.deleteMany({});
  
      const createdPosts = await Post.create(posts);
  
      console.log('Posts: ', createdPosts);
  
      const createdUsers = await User.create(users);
  
      console.log('Users: ', createdUsers);
  
      await mongoose.connection.close();
    } catch (err) {
      console.log(err);
    }
  }
  
  seed();
  