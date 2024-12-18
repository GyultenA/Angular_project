const Comment = require('../models/Comment');
const { User } = require('../models/User');
const Product = require('../models/Product');



exports.getAllComments = async (productId) => {
  try {
    const comments = await Comment.find({ product: productId })
      .sort({ createdAt: -1 })
      .populate('owner', 'username');

    return comments;
  } catch (error) {
    throw new Error('Error fetching comments');
  }
};



exports.createNewComment = async (userId, createData) => {
  try {
    const createdComment = await Comment.create({
      ...createData,
      owner: userId,
    });

    const product = await Product.findById(createData.product);

    if (!product) {
      throw new Error('Product not found')
    }

    await User.findByIdAndUpdate(userId, { $push: { commentOwner: createdComment._id } });
    return createdComment;
  } catch (err) {
    throw new Error('Error creating comment')
  }

}


exports.getOneComment = async (commentId) => await Comment.findById(commentId);

exports.getOneCommentDetails = async (commentId) => {
  const result = await Comment.findById(commentId).populate('owner', 'username');
  return result
}


exports.editComment = async (commentId, editData) => await Comment.findByIdAndUpdate(commentId, editData);

exports.deleleteComment = async (commentId) => await Comment.findByIdAndDelete(commentId);


exports.commentVoteYes = async (commentId, owner) => {
  const comment = await Comment.findById(commentId);
  const newVote = comment.helpfulYes + 1;
  comment.helpfulYes = newVote;
  comment.usersVotedHelpful.push(owner);

  await comment.save();
}


exports.commentVoteNo = async (commentId, owner) => {
  const comment = await Comment.findById(commentId);
  const negatVote = comment.helpfulNo + 1;
  comment.helpfulNo = negatVote;
  comment.usersVotedHelpful.push(owner);
  await comment.save();

}