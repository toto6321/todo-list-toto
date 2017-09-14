var mongoose = require('mongoose');
var mongoDBURI = 'mongodb://localhost/TODOLIST';
var TODO = require('../models/todoModel');
var USER = require('../models/userModel');

mongoose.model('TODO',TODO);
mongoose.model('USER',USER);
mongoose.connect(mongoDBURI);

mongoose.connection.on('connected',on_connected);
mongoose.connection.on('error',on_error);
mongoose.connection.on('disconnected',on_disconnected);


function on_connected(){
  console.log("Mongoose connection is connected.")
}

function on_error(){
  console.log("Mongoose connection error happens.")
}

function on_disconnected(){
  console.log("Mongoose connection is disconnected.")
}
