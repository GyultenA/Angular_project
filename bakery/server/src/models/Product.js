const mongoose = require('mongoose');
const validator = require('validator');

const {User} = require('./User');
const Comment = require('./Comment');


const productSchema = new mongoose.Schema({
   name: {
      type: String,
      minlength: [2, 'Product name should be between 7 and 30 characters long'],
      maxlength: [30, 'Product name should be between 7 and 30 characters long'],
      required: [true, 'Product name is required'],
   },
   description: {
    type: String,
    minlength: [10, 'Description should be at least 10 characters'],
    maxlength: [250, 'Description should not be more than 250 characters'],
    required: [true, 'Comment message is required']
 },
   type: {
      type: String,
      required: [true, 'Type is required'],
   },
   imageUrl: {
      type: String,
      validate: {
         validator: function (value) {
            return validator.isURL(value) && /^https:\/\/.+\.(jpg|jpeg|png|gif)$/i.test(value);
         },
         message: 'Image cover link',
      },
      required: [true, 'Product image is required']
   },
 
   usersWhoRated: [{
      type: mongoose.Types.ObjectId,
      ref: 'User',
   }],
   createdDate: {
      type: Date,
   },
   owner: {
      type: mongoose.Types.ObjectId,
      ref: 'User'
   },
   isLiked: {
      type: Boolean,
      default: false
   },
   likedBy: [{
      user: {
         type: mongoose.Types.ObjectId,
         ref: 'User'
      },
      likeOn: {
         type: Date,
         default: Date.now
      }
   }],
   comments: [{
      type: mongoose.Types.ObjectId,
      ref: 'Comment'
   }]
});

productSchema.pre('save', function () {
   if (!this.createdDate) {
      this.createdDate = Date.now();
   };
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;