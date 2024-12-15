const router = require('express').Router();

const comentController = require('../controllers/commentController');
const { isAuth, isCommentOwner } = require('../middlewares/authMiddle');

router.get('/:productId', comentController.allComments);
router.get('/:commentId/details', isAuth, comentController.getCommentDetails);

router.post('/create', isAuth, comentController.newComment);
router.put('/:commentId/edit', isCommentOwner, comentController.updateComment);
router.put('/voteYes/:commentId', isAuth, comentController.voteYes);
router.put('/voteNo/:commentId', isAuth, comentController.voteNo);
router.delete('/:commentId', isCommentOwner, comentController.removeComment);

module.exports = router
