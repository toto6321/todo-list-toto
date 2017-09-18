var mongoose = require('mongoose');
var todoSchema = require('../models/todoModel');
var TODO = mongoose.model("TODO",todoSchema);

module.exports.deleteOneTodo = function(req,res,next){
  TODO.findOneAndRemove({"_id":req.id},function(err,todo){
    if(err){
      console.log(todo);
    }
  }).exec();
};

module.exports.deleteTodos = function(req,res,next){
  TODO.remove({"_id":req.id});
};
