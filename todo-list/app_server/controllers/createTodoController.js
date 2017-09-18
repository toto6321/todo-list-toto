var mongoose = require('mongoose');
var todoSchema = require('../models/todoModel');
var TODO = mongoose.model("TODO",todoSchema);

var insertTodo= function(req,res,next){
  TODO.create(new TODO({
    title:req.body.title,
    label:req.body.labels,
    content:req.body.content,
    lastModifiedDate:Date.now,
    createdDate:Date.now
  }),function(error, todo){
    if(error){
      res.status(404).send(error);
    }else{
      // res.status(200).send(todo);;
      res.redirect('/todo_list');
    }
  });
};

module.exports = insertTodo;
