const router = require('express').Router();

const catalogController = require('../controllers/productController');
const {isAuth, isProductOwner} = require ('../middlewares/authMiddle');

router.get('/', catalogController.allProducts);
router.get('/latest', catalogController.latestProduct)
router.get('/:productId', catalogController.getProduct);

router.get('/search', catalogController.searchProduct);

router.post('/create', isAuth, catalogController.newProduct);
router.put('/:productId/edit', isProductOwner, catalogController.updateProduct);
router.delete('/:productId', isProductOwner, catalogController.removeProduct);

router.put('/likesub/:productId', isAuth, catalogController.likeSubs);
router.put('/nolikesub/:productId', isAuth, catalogController.cancelSubs);

module.exports = router;