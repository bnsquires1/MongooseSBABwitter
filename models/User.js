const { Schema, model } = require('../config/db-connection');

const userSchema = Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
    min: 5,
  },
  age: {
    type: Number,
    required: true,
    min: 16,
    message:"Must be at least 16 to enter." 
  },
});
//creating an index for the name
userSchema.index({ name: 1, type: 1});


module.exports = model('User', userSchema);
