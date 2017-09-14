var mongoose = require('mongoose');
var todoSchema = require('../models/todoModel');
var TODO = mongoose.model("TODO",todoSchema);

var deleteTodo= function(req,res,next){
  // TODO implement deletion
};

module.exports = deleteTodo;
