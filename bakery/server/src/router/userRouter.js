const router = require('express').Router();
const {User} = require('../models/User')

const {getUser, getMyUser, registerUser, loginUser, logoutUser, editMyUser} = require('../controllers/authController')
//const authController = require('../controllers/authController');
const {isAuth, isProfileOwner, isGuest} = require('../middlewares/authMiddle');

router.get('/profile/:userId', isAuth, getUser);
router.get('/my-profile/:userId', isProfileOwner, getMyUser);

router.post('/register', isGuest, registerUser);
router.post('/login', isGuest, loginUser);
router.post('/logout', isAuth, logoutUser);

router.put('/my-profile/userid', isProfileOwner,editMyUser);

module.exports = router;

