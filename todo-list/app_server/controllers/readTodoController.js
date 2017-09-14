var mongoose = require('mongoose');
var todoSchema = require('../models/todoModel');
var TODO = mongoose.model("TODO",todoSchema);

var findTodo= function(req,res,next){
  TODO.find().sort('lastmodifiedDate').exec(function(err,todos,count){
    res.render('todo_list',{title:"example",todos:todos});
  });
};

module.exports = findTodo;
