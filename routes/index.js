var express = require('express');
var router = express.Router();
const indexCtrl = require('../controller/index')

/* GET home page. */
router.get('/', indexCtrl.index);

router.post('/', indexCtrl.post)

router.delete('/:id', indexCtrl.deleteTodo)

module.exports = router;
