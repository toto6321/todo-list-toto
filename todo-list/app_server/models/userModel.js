var mongoose = require('mongoose');
var todoSchema = require('./todoModel')
var userSchema=mongoose.Schema({
  email:{type:String,required:true},
  nickname:String,
  password:String,
  todos:[todoSchema]
});

// var userModel = mongoose.Model('USER',userSchema);
// module.exports = userModel;
module.exports = userSchema;
