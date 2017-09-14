var mongoose = require('mongoose');
var TODO = require('../models/todoModel');

var createTodo= function(req,res,next){
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

module.exports = createTodo;
