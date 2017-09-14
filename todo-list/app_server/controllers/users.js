var express = require('express');
var router = express.Router();
var controller_users = require('../controllers/users');

/* GET users listing. */
router.get('/', controller_users.users);

module.exports = router;
