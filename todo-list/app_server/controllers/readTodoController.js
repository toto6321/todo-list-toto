var mongoose = require('mongoose');
var todoSchema = require('../models/todoModel');
var TODO = mongoose.model("TODO",todoSchema);

var findTodo= function(req,res,next){
  // TODO implement reading
};

module.exports = findTodo;
