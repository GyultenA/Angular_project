const jwt = require('./jwt');
const secret = process.env.SECRET || 'somesecreteKey1';

function generateToken(user) {
   const payload = {
      _id: user._id,
      username: user.username,
      email: user.email,
   };
   return jwt.sign(payload, secret, { expiresIn: '3h' });
};

module.exports = generateToken;