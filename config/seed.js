// Require connection file to connect
const mongoose = require('./db-connection.js');
// Require Models for delete and create operations
const Post = require('../models/Post.js');
const User = require('../models/User.js');


const users = [
  {
    username: "john_doe",
    email: "john@example.com",
    password: "securepass123",
    age: 25
  },
  {
    username: "jane_smith",
    email: "jane@example.com",
    password: "password456",
    age: 30
  },
  {
    username: "sam_jones",
    email: "sam@example.com",
    password: "pass123",
    age: 18
  }
];
const posts = [
  {
    title: "If I ruled the world..",
    content: "Conquering kingdoms, one keystroke at a time.",
    author: "John Doe"
  },
  {
    title: "Schoolin life",
    content: "Who knew school could be cool?",
    author: "Jane Smith"
  },
  {
    title: "Music: the universal language",
    content: "Music makes the world go round.",
    author: "Sam Jones"
  }
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
  