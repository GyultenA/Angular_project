const produstService = require('../services/productService');
const {User} = require('../models/User')

const allProducts = async(req, res) => {
    try {
        const prod = await produstService.getAllProduct();
        res.json(prod)
    } catch (err){
        const errMsg = err.message;
      if (err.name === 'ValidationError') {
         res.status(400).json({ message: errMsg });
      } else {
         res.status(500).json({ message: errMsg });
      }
    }
}

const latestProduct = async(req, res)=>{
  try {
 const prod = await produstService.getLatestProduct().lean();
 res.send(prod)
 } catch (err) {
    const errMsg = err.message;
    if (err.name === 'ValidationError') {
       res.status(400).json({ message: errMsg });
    } else {
       res.status(500).json({ message: errMsg });
    }
 }
}

const getProduct = async(req, res) => {
    const productId = req.params.productId;
    const product = await produstService.getProductById(productId);
    res.send(product)
}


const searchProduct = async(req, res) => {
    try {
        const {name, type} = req.query;
        const items = await produstService.searchProduct(name, type);
        res.send(items)
    } catch(err){
        const errMsg = err.message;
      if (errMsg === 'User not found') {
         res.status(404).json({ message: errMsg });
      } else if (err.name === 'ValidationError') {
         res.status(400).json({ message: errMsg });
      } else {
         res.status(500).json({ message: errMsg });
      }
    }
}

const newProduct = async(req, res)=> {
    const createData = req.body;
    const ownerId = req.user._id;

    try {
        await produstService.addProduct(createData, ownerId);
        res.json({message: 'Product created successfully'})
    } catch (err) {
        const errMsg = err.message;
        if (err.name === 'ValidationError') {
           res.status(400).json({ message: errMsg });
        } else {
           res.status(500).json({ message: errMsg });
        }
        
    }
}

const updateProduct = async (req, res) => {
    const editData = req.body;
    const { productId } = req.params;

    try {
        await produstService.editProduct(productId, editData);
        res.json({message: 'Product updated successfully'})
    } catch (error) {
        const errMsg = err.message;
      if (err.name === 'ValidationError') {
         res.status(400).json({ message: errMsg });
      } else {
         res.status(500).json({ message: errMsg });
      }
    }
}

const removeProduct = async (req, res) => {
    const { productId} = req.params;

    try {
        await produstService.deleteProduct(productId);
        res.json({ message: 'Product deleted'})
    } catch (err) {
        const errMsg = err.message;
      if (err.name === 'ValidationError') {
         res.status(400).json({ message: errMsg });
      } else {
         res.status(500).json({ message: errMsg });
      }
    }
}

const likeSubs = async (req, res) => {
    const {productId} = req.params;
    const { userId, isLiked} = req.body;

    try {
        await produstService.likeProduct(productId, userId, isLiked);
        res.json({ message: 'You like this product'})
    } catch (err) {
        const errMsg = err.message;
      if (err.name === 'ValidationError') {
         res.status(400).json({ message: errMsg });
      } else {
         res.status(500).json({ message: errMsg });
      }
    }
}

const cancelSubs = async(req,res) => {
    const { productId} = req.params;
    const {userId} = req.body;

    try {
        await produstService.notLikeProduct;
        res.json({ message: 'you do not like this product' });
     } catch (err) {
        const errMsg = err.message;
        if (err.name === 'ValidationError') {
           res.status(400).json({ message: errMsg });
        } else {
           res.status(500).json({ message: errMsg });
        }
    }
}


module.exports = {
    allProducts,
    latestProduct,
    getProduct,
    searchProduct,
    newProduct,
    updateProduct,
    removeProduct,
    likeSubs,
    cancelSubs,
}