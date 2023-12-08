const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/', mainController.index);
router.get('/login', mainController.login);
router.get('/register', mainController.register);
router.get('/productDetail', mainController.productDetail);
router.get('/miCarrito', mainController.miCarrito);
router.get('/products', mainController.products);
module.exports = router;