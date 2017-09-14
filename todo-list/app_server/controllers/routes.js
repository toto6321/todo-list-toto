var express = require('express');
var router = express.Router();
// var controller_index = require('../controllers/index');

/* GET home page. */
router.get('/', indexController);
router.get('/users',usersController);
router.get('/todo_list',todo_listController);

router.get('/login',loginController);
router.post('/loginHandler',loginHandlerController);

router.get('/signup',signupController);
router.post('/signupHandler',signupHandlerController);

router.get('/addTodo',addTodo);
var insertTodo = require('./insertTodoController');
router.post('/insertTodo',insertTodo);

module.exports = router;

// to get home page
function indexController (req, res, next){
  res.render('index',{title:"Express"});
};

// to get todo list
function todo_listController(req,res,next){
  res.render('todo_list');
}

// to get users list
function usersController(req, res, next) {
  res.send('respond with a resource');
};

function loginController(req,res,next){
  res.render('login');
}

function signupController(req,res,next){
  res.render('signup');
}

function loginHandlerController(req,res,next){
  // res.render('login');
  res.send("handle log-in.")
}

function signupHandlerController(req,res,next){
  // res.render('signup');
  var User = require('../models/userModel');
  // User.register();
  res.send("handle sign-up.")
}

function addTodo(req,res,next){
  res.render('addTodo');
}
