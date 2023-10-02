var express = require('express');
var router = express.Router();
const users = require('../controllers/users');

router.post('/signup', users.signup);
router.post('/signin', users.signin);
router.post('/reset', users.resetPassword);
router.put('/new-password/:id', users.newPassword);

module.exports = router;
