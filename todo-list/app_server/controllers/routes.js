var express = require('express');
var router = express.Router();
// var controller_index = require('../controllers/index');

/* GET home page. */
router.get('/', indexController);
function indexController (req, res, next){
  res.render('index');
};

var usersController = require('./usersController');
router.get('/users',usersController);

router.get('/login',loginController);
function loginController(req,res,next){
  res.render('login');
}

var loginHandlerController = require('./loginHandlerController');
router.post('/loginHandler',loginHandlerController);

router.get('/signup',signupController);
function signupController(req,res,next){
  res.render('signup');
}

var signupHandlerController = require('./signupHandlerController');
router.post('/signupHandler',signupHandlerController);

router.get('/addTodo',addTodo);
function addTodo(req,res,next){
  res.render('addTodo');
}

// C.R.U.D
var createTodo = require('./createTodoController');
router.post('/createTodo',createTodo);

var readTodo = require('./readTodoController');
router.get('/todo_list',readTodo);

var updateTodo = require('./updateTodoController');
router.post('/updateTodo',updateTodo);

var deleteTodo = require('./deleteTodoController');
router.post('/deleteTodo',deleteTodo);

module.exports = router;
