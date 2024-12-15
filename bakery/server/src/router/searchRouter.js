const router = require('express').Router();

const catalogController = require('../controllers/productController');


router.get('/', catalogController.searchProduct);



module.exports = router;