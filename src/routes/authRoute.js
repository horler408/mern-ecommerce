const { Router } = require('express');
const authController = require('../controllers/authController');
const router = Router();
const auth = require('../middleware/auth');

router.post('/register', authController.signup);
router.post('/login', authController.login);
router.get('/users', authController.getUsers);
router.get('/user', auth, authController.getUser);

module.exports = router;
