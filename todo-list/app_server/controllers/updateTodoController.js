var mongoose = require('mongoose');
var todoSchema = require('../models/todoModel');
var TODO = mongoose.model("TODO",todoSchema);

var updateTodo= function(req,res,next){
  // TODO implement update
};

module.exports = updateTodo;
