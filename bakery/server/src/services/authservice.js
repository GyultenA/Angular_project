const bcrypt = require('bcrypt');

const generateToken = require('../utils/token');

const {User} = require('../models/User');
const Product = require('../models/Product');
const Comment = require('../models/Comment');

exports.register = async (userData) => {
   if (userData.password !== userData.rePassword) {
      throw new Error('Password do not match');
   };

   const existing = await User.findOne({ email: userData.email });
   if (existing) {
      throw new Error('User already exists!');
   };

   const createdUser = await User.create(userData);
   const token = await generateToken(createdUser);
  // return { token, username: createdUser.username, id: createdUser._id, email: createdUser.email };
   return { token, email: createdUser.email, id: createdUser._id };
};

exports.login = async ({email, password}) => {
   const user = await User.findOne({ email });
   if (!user) {
      throw new Error('Email or password is invalid');
   };

   const isValid = await bcrypt.compare(password, user.password);
   if (!isValid) {
      throw new Error('Email or password is invalid');
   };

   const payload = {
      _id: user._id,
      email: user.email,
      username: user.username,
   }

   const token = await generateToken(user);
  // return { token, username: user.username, id: user._id, email: user.email };
   return { token, email: user.email, id: user._id,  };
};

exports.getOne = async (userId) => await User.findById(userId);

exports.getUserInfo = async (userId) => await User.findById(userId).populate('commentOwner').populate('productOwner');

exports.editMyInfo = async (userId, payload) => {
   const result = await User.findByIdAndUpdate(userId, payload, {runValidators:true});
   console.log(result);
   return result;
} 

