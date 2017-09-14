var mongoose = require('mongoose');
var todoSchema=mongoose.Schema({
  title:String,
  label:[String],
  content:String,
  createdDate:{type:Date,default:Date.now},
  lastModifiedDate:{type:Date,default:Date.now}
});

// var todoModel = mongoose.Model('TODO',todoSchema);
// module.exports = todoModel;
module.exports = todoSchema;
