const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/products', productController.list);
// router.get('/products/create', productController.create);
// router.get('/products/:id ', productController.detail);
// router.post('/products', productController.save);
// router.get('/products/:id/edit ', productController.editForm);
// router.put('/products/:id ', productController.edit);
// router.delete('/products/:id ', productController.delete);
module.exports = router;