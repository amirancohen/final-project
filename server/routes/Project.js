var express = require('express');
var router = express.Router();
const projectx = require('../controllers/project');
const auth = require('../middleware/auth');

router.get('/', projectx.getAll);
router.get('/:id', auth, projectx.getItem);
router.post('/', auth, projectx.add);
router.patch('/:id', auth, projectx.edit);
router.delete('/:id', auth, projectx.delete);

module.exports = router;