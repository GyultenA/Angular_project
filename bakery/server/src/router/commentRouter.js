const router = require('express').Router();

const comentController = require('../controllers/commentController');
const { isAuth, isCommentOwner } = require('../middlewares/authMiddle');

router.get('/', comentController.allComments);
router.get('/:commentId', isAuth, comentController.getOneComment);

router.post('/create', isAuth, comentController.newComment);
router.put('/:commentId', isCommentOwner, comentController.updateComment);
router.put('/voteYes/:commentId', isAuth, comentController.voteYes);
router.put('/voteNo/:commentId', isAuth, comentController.voteNo);
router.delete('/:commentId', isCommentOwner, comentController.removeComment);

module.exports = router
