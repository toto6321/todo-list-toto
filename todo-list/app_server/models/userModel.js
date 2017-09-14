var mongoose = require('mongoose');
var todoSchema = require('./todoModel')
var userSchema=new mongooose.Schema({
  email:{tyep:String,required:true},
  nickname:String,
  password:String,
  todos:[todoSchema]
});

var userModel = new mongoose.Model('USER',userSchema);
module.exports = userModels;
