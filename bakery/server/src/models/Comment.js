const mongoose = require('mongoose');
const {User} = require('./User')
const Product = require('./Product')

const commentSchema = new mongoose.Schema({
   title: {
      type: String,
      minlength: [5, 'Title should be at least 10 characters'],
      maxlength: [35, 'Title should be between 10 and 35 characters'],
      required: [true, 'Comment title is required']
   },
   description: {
      type: String,
      minlength: [10, 'Description should be at least 10 characters'],
      maxlength: [250, 'Description should not be more than 250 characters'],
      required: [true, 'Comment message is required']
   },

   helpfulYes: {
      type: Number,
      default: 0,
   },
   helpfulNo: {
      type: Number,
      default: 0,
   },
   usersVotedHelpful: [{
      type: mongoose.Types.ObjectId,
      ref: 'User',
   }],
   owner: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
   },
   createdAt: {
      type: Date,
      default: Date.now
   },
   likeProduct: {
      type: mongoose.Types.ObjectId,
      ref: 'Product',
   }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;