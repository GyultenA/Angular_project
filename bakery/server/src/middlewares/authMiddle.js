const secret = process.env.SECRET || 'somesecreteKey1';
const jwt = require('../utils/jwt');
const { User } = require('../models/User')
const { getOneComment } = require('../services/commentService');
const { getOne } = require('../services/authservice');
const { getOneProduct } = require('../services/productService');


const authMiddleware = async (req, res, next) => {
  const token = req.cookies['auth'];

  if (!token) {
    return next();
  };

  try {
    const decodedToken = await jwt.verify(token, secret);
    req.user = decodedToken;
    res.locals.isAuthenticated = true;
    next();
  } catch (err) {
    res.clearCookie('auth');
    res.status(401).json({ message: 'Unauthorized' });
  };
};

const isAuth = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ message: 'Unauthorized' });
    // return  res.redirect('/login');
  };
  next();
};

const isGuest = (req, res, next) => {
  if (req.user) {
    return res.status(403).json({ message: 'Forbidden' });
    //  return res.redirect('/')
  };
  next();
};



const isCommentOwner = async (req, res, next) => {
  const commentId = req.params.commentId
  const comment = await getOneComment({ _id: commentId });
  if (!comment) {
    return res.status(404).send();
  }
  if (comment.owner.toString() !== req.user?._id) {
    return res.status(403).send({ error: 'Not authorized to access this comment' });
  };
  req.comment = comment;
  next();
};


const isProfileOwner = async (req, res, next) => {
  const userId = req.params.userId
  const user = await getOne({ _id: userId });
  if (!user) {
    return res.status(404).send();
  }
  if (user._id.toString() !== req.user?._id) {
    return res.status(403).send({ error: 'Not authorized to access this profile' });
  };
  req.user = user;
  next();
};

const isProductOwner = async (req, res, next) => {
  const productId = req.params.productId;
  const current = await getOneProduct({ _id: productId });

  if (!current) {
    return res.status(404).send()
  }

  if (current.owner.toString() !== req.user?._id) {
    return res.status(403).send({ error: 'you do not have permission for this product' })
  };

  req.product = current;
  next()
}

module.exports = {
  authMiddleware,
  isAuth,
  isGuest,
  isCommentOwner,
  isProfileOwner,
  isProductOwner,
}