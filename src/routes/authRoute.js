const { Router } = require('express');
const {
  signup,
  login,
  getUsers,
  getUser,
} = require('../controllers/authController');
const router = Router();
const auth = require('../middleware/auth');

router.post('/register', signup);
router.post('/login', login);
router.get('/', getUsers);
router.get('/:id', auth, getUser);
// router.get('/user:id', auth, authController.getUser);

module.exports = router;
