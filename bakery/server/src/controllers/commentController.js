const { getAllComments, createNewComment, editComment, deleleteComment, commentVoteYes, commmentVoteNo } = require("../services/commentService")
const {User} = require('../models/User');

const allComments = async (req, res) => {

    try {
        const result = await getAllComments();
        console.log(result)
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

const getOneComment = async(req, res)=> {
   const commentId = req.params.commentId;
    const comment = await getOneComment(commentId);
    res.send(comment);

}

const newComment = async (req, res) => {
    const createData = req.body;
    const userId = req.user._id;
 
    try {
       await createNewComment (userId, createData);
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
    getOneComment,
    newComment,
    updateComment,
    removeComment,
    voteYes,
    voteNo,
 }
 