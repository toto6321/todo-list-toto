var signupHandler = function signupHandlerController(req,res,next){
  // res.render('signup');
  var User = require('../models/userModel');
  // User.register();
  res.send("handle sign-up.")
};
module.exports = signupHandler;
