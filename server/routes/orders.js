var express = require('express');
var router = express.Router();
const orders = require('../controllers/orders1');

router.get('/', orders.getAll);
router.post('/', orders.add);


module.exports = router;