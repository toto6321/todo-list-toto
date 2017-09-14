var mongoose = require('mongoose');
var todoSchema=new mongoose.Schema({
  title:String,
  label:[String],
  content:String,
  createdDate:{type:Date,default:Date.now},
  lastModifiedDate:{type:Date,default:Date.now}
});

var todoModel = new mongoose.Model('TODO',todoSchema);
module.exports = todoModel;
