const { getAllComments, createNewComment, editComment, deleleteComment, commentVoteYes, commmentVoteNo, getOneCommentDetails } = require("../services/commentService")
const {User} = require('../models/User');
const Comment = require('../models/Comment')

const allComments = async (req, res) => {

    try {
      const productId = req.params.productId;

        const result = await getAllComments(productId);
       // console.log(result)
        res.json(result);

    } catch (err) {
        const errMsg = err.message;
        if (err.name === 'ValidationError') {
            res.status(400).json({ message: errMsg });
        } else {
            res.status(500).json({ message: errMsg });
        }
    }
}


const getCommentDetails = async (req, res) => {
 const commentId = req.params.commentId;
 try {
 //  console.log('comment id:', commentId);
   const comment = await Comment.findById(commentId).populate('owner', 'username').exec();

   if (!comment) {
      console.log('Comment not found');
      return res.status(404).json({ message: 'Comment not found' });
    }

    res.status(200).json(comment)

 } catch(err){
  // console.log('comment details', err);
   res.status(500).json({ message: errMsg });
 }

  
}

const newComment = async (req, res) => {
   
 
    try {
      const { productId, title, description } = req.body;
      const userId = req.user._id;

       await createNewComment (userId, {
         product: productId,
         title,
         description,
       });
       res.json({ message: 'Comment added successfully' });
    } catch (err) {
       const errMsg = err.message;
       if (err.name === 'ValidationError') {
          res.status(400).json({ message: errMsg });
       } else {
          res.status(500).json({ message: errMsg });
       }
    }
 };


 const updateComment = async (req, res) => {
    const editData = req.body;
    const { commentId } = req.params;
    try {
       await editComment(commentId, editData);
       res.json({ message: 'Comment updated successfully' });
    } catch (err) {
       const errMsg = err.message;
       if (err.name === 'ValidationError') {
          res.status(400).json({ message: errMsg });
       } else {
          res.status(500).json({ message: errMsg });
       }
    }
 };

 const removeComment = async (req, res) => {
    const { commentId } = req.params;

    try {
       await deleleteComment(commentId);
       res.json({ message: 'Comment deleted successfully' });
    } catch (err) {
       const errMsg = err.message;
       if (err.name === 'ValidationError') {
          res.status(400).json({ message: errMsg });
       } else {
          res.status(500).json({ message: errMsg });
       }
    }
 };


 const voteYes = async (req, res) => {
    const { commentId } = req.params;
    const user = req.body.userId;
    try {
       await commentVoteYes(commentId, user);
       res.json({ message: 'Comment voted Yes successfully' });
    } catch (err) {
       const errMsg = err.message;
       if (err.name === 'ValidationError') {
          res.status(400).json({ message: errMsg });
       } else {
          res.status(500).json({ message: errMsg });
       }
    }
 };


 const voteNo = async (req, res) => {
    const { commentId } = req.params;
    const user = req.body.userId;
    try {
       await commentVoteNo(commentId, user);
       res.json({ message: 'Comment voted No successfully' });
    } catch (err) {
       const errMsg = err.message;
       if (err.name === 'ValidationError') {
          res.status(400).json({ message: errMsg });
       } else {
          res.status(500).json({ message: errMsg });
       }
    }
 };

 module.exports = {
    allComments,
    newComment,
    updateComment,
    removeComment,
    getCommentDetails,
    voteYes,
    voteNo,
 }
 