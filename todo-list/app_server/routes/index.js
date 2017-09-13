var express = require('express');
var router = express.Router();
var controller_index = require('../controllers/index');

/* GET home page. */
router.get('/', controller_index.index);

module.exports = router;
