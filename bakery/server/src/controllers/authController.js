const authService = require('../services/authservice');
const User = require('../models/User')

const registerUser = async(req, res) => {
    const userData = req.body;

    try {
        const result = await authService.register(userData);
        const { token, email, id } = result;
        res.cookie('auth', token);
        res.status(200).json({ message: "registration is successful", email, id});
        
    } catch (err){
        const errMsg = err.message;
        if (err.name === 'ValidationError') {
            res.status(400).json({ message: errMsg });
         } else {
            res.status(500).json({ message: errMsg });
         }
    }
}


const loginUser = async (req, res) => {
    const loginData = req.body;

    try{
        const result = await authService.login(loginData);
        const {token, email, id} = result;
        res.cookie('auth', token, { httpOnly: true });
        res.status(200).json({ message: 'Login successful', email, id})
    } catch (err) {
        const errMsg = err.message;
        if (err.name === 'ValidationError') {
           res.status(400).json({ message: errMsg });
        } else {
           res.status(500).json({ message: errMsg });
        }
    }
}


const logoutUser = async (req, res) => {
    try {
       res.clearCookie('auth');
       res.status(200).json({ message: 'Logout successful' });
    } catch (err) {
       const errMsg = err.message;
       if (err.name === 'ValidationError') {
          res.status(400).json({ message: errMsg });
       } else {
          res.status(500).json({ message: errMsg });
       }
    };
 };

 const getUser = async (req, res) => {
    try {
       const item = await authService.getUserInfo(req.params.userId);
       res.send(item);
    } catch (err) {
       const errMsg = err.message;
       if (err.name === 'ValidationError') {
          res.status(400).json({ message: errMsg });
       } else {
          res.status(500).json({ message: errMsg });
       }
    }
 }

 const getMyUser = async (req, res) => {
    try {
       const item = await authService.getUserInfo(req.params.userId);
       res.send(item);
    } catch (err) {
       const errMsg = err.message;
       if (err.name === 'ValidationError') {
          res.status(400).json({ message: errMsg });
       } else {
          res.status(500).json({ message: errMsg });
       }
    }
 };

 const editMyUser = async (req, res) => {
   const payload = req.body;
   const { userId } = req.params;
 
  // console.log('Payload received:', payload);
  /// console.log('User ID:', userId);
 
   try {
     const result = await authService.editMyInfo(userId, payload);
     if (!result) {
       return res.status(404).json({ message: 'User not found' });
     }
     console.log('Update result:', result);
     res.json({ message: 'User info updated successfully' });
   } catch (err) {
     console.error('Error in editMyUser:', err);
     if (err.name === 'ValidationError') {
       res.status(400).json({ message: err.message });
     } else {
       res.status(500).json({ message: 'Internal server error' });
     }
   }
 };

 const getUserProduct = async (req, res) => {
   try {
      const item = await authService.getUserInfo(req.params.userId);
      res.send(item);  
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
    registerUser,
    loginUser,
    logoutUser,
    getUser,
    getMyUser,
    editMyUser,
    getUserProduct,
 }
