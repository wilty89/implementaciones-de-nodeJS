const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  uname: {
    type: String,
    required: true,
  },
  uemail: {
    type: String,
    required: true,
  },
  umobil: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
    default: 0,
    trim: true,
  },
});

module.exports = mongoose.model("users", userSchema);
