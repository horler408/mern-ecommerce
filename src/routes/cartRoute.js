const { Router } = require('express');
const cartController = require('../controllers/cartController');
const router = Router();

router.get('/carts', cartController.getCarts);
router.get('/cart/:id', cartController.getCartItems);
router.post('/cart/:id', cartController.addCartItem);
router.delete('/cart/:userId/:itemId', cartController.deleteCartItem);

module.exports = router;
