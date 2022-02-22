const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
// const User = require("../models/userModel");

// @desc Register User
// @route Post /api/users
// @access public

const registerUser = asyncHandler(async (req, res) => {
  res.json({ message: "Register User" });
});

// @desc Login User and Authenticated user
// @route Post /api/users/login
// @access public
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "Login User" });
});

// @desc Login User and Authenticated user
// @route Post /api/users/me
// @access public
const getMe = asyncHandler(async (req, res) => {
  res.json({ message: " User data display" });
});
module.exports = {
  registerUser,
  loginUser,
  getMe,
};
