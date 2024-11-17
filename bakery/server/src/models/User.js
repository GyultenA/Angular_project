const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const saltRounds = Number(process.env.SALT) || 10;

const Product = require('./Product');
const Comment = require('./Comment');

const userSchema = new mongoose.Schema({
   firstName: {
      type: String,
      match: [/^[a-zA-Z\u00C0-\u017F\'\u0400-\u04FF]+(\-[a-zA-Z\u00C0-\u017F\'\u0400-\u04FF]+)*$/, 'Invalid first name'],
      minlength: [2, 'First Name should be at least 2 characters'],
      maxlength: [30, 'First Name should be no more than 30 characters'],
      required: [true, 'First Name is required'],
   },
   lastName: {
      type: String,
      match: [/^[a-zA-Z\u00C0-\u017F\'\u0400-\u04FF]+(\-[a-zA-Z\u00C0-\u017F\'\u0400-\u04FF]+)*$/, 'Invalid last name'],
      minlength: [2, 'Last Name should be at least 2 characters'],
      maxlength: [30, 'Last Name should be no more than 30 characters'],
      required: [true, 'Last Name is required'],
   },
   username: {
      type: String,
      match: [/^[a-zA-Z0-9_-]+$/, 'Invalid username'],
      minlength: [2, 'Username should be at least 2 characters'],
      maxlength: [30, 'Username should be no more than 30 characters'],
      required: [true, 'Username is required'],
      unique: true,
   },
   email: {
      type: String,
      minlength: [10, 'Email should be at least 10 characters'],
      maxlength: [50, 'Email should be no more than 50 characters'],
      lowercase: true,
      required: [true, 'Email is required'],
      validate: {
         validator: validator.isEmail,
         message: 'Invalid email',
      },
      unique: true,
   },
   password: {
      type: String,
      minlength: [4, 'Password should be at least 4 characters long'],
      required: [true, 'Password is required'],
   },
   avatar: {
      type: String,
      validate: {
         validator: function (value) {
            return validator.isURL(value) && /^https?:\/\/.+\.(jpg|jpeg|png|gif)$/i.test(value);
         },
         message: 'Invalid avatar link',
      },
      required: [true, 'Avatar is required'],
   },
   aboutMe: {
      type: String,
      maxlength: [1000, 'About me maximal length is 1000 symbols'],
      default: ' ',
   },
   productOwner: [{
      type: mongoose.Types.ObjectId,
      ref: 'Product',
   }],
   commentOwner: [{
      type: mongoose.Types.ObjectId,
      ref: 'Comment',
   }],
   productLikeList: [{
      type: mongoose.Types.ObjectId,
      ref: 'Product',
   }],
});

userSchema.pre('save', async function () {
   this.password = await bcrypt.hash(this.password, saltRounds)
});


const User = mongoose.model('User', userSchema);

module.exports = {User};