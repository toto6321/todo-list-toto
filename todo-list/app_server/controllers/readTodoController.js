var mongoose = require('mongoose');
var todoSchema = require('../models/todoModel');
var TODO = mongoose.model("TODO",todoSchema);

module.exports.findAllTodo = function(req,res,next){
  TODO.find().exec(function(err,todos){
    // res.json(todos);
    res.render('todo_list',{todos:todos});
  });
};



module.exports.findTodoById = function(req,res,next){
  var todoId = req.params.todoId;
  if(todoId){
    TODO.findTodoById(todoId).exec(todo,function(error,todo){
      res.send(todo);
    });
  }else{
    return;
  }
};
