const Comment = require('../models/Comment');
const {User} = require('../models/User');
const Product = require('../models/Product');




exports.getAllComments = async() => {
    const comments = await Comment.find().sort({createdAt: -1}).populate('user', 'username');
}

exports.createNewComment = async(userId, createData) => {
    const createdComment = await Comment.create({
        ...createData,
        owner: userId,
    })
    return createdComment;
}

exports.getOneComment = async(commentId) => await Comment.findById(commentId);


exports.editComment = async (commentId, editData) => await Comment.findByIdAndUpdate(commentId, editData);

exports.deleleteComment = async(commentId)=> await Comment.findByIdAndDelete(commentId);


exports.commentVoteYes = async (commentId, owner) => {
    const comment = await Comment.findById(commentId);
    const newVote = comment.helpfulYes +1;
    comment.helpfulYes = newVote;
    comment.usersVotedHelpful.push(owner);

    await comment.save();
}


exports.commmentVoteNo = async (commentId, owner) => {
    const comment = await Comment.findById(commentId);
    const negatVote = comment.helpfulNo + 1;
    comment.helpfulNo = negatVote;
    comment.usersVotedHelpful.push(owner);
    await comment.save();
    
}