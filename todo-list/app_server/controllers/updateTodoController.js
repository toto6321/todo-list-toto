var mongoose = require('mongoose');
var todoSchema = require('../models/todoModel');
var TODO = mongoose.model("TODO",todoSchema);

var updateTodoById= function(req,res,next){
  TODO.findByIdAndUpdate(req.id,{
    title:req.title,
    label:req.labels,
    content:req.content,
    lastModifiedDate:Date.now
  },function(err,todo){
    if(err){
      todo.title = req.title;
      todo.label = req.lables;
      todo.content = req.content;
      todo.save();
    }
  });
  res.redirect('/todo_list');
};

module.exports = updateTodoById;
