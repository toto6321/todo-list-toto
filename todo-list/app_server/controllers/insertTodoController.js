var mongoose = require('mongoose');
var todoSchema = require('../models/todoModel');
var TODO = mongoose.model("TODO",todoSchema);

var insertTodo= function(req,res,next){
  var todo = new TODO({
    title:req.body.title,
    label:req.body.labels,
    content:req.body.content,
    lastmodifiedDate:Date.now,
    createdDate:Date.now
  }).save(function(erro,todo,count){
    res.redirect('/todo_list');
  });
};

module.exports = insertTodo;
