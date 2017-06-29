
var GmailChecker = require("../index");

//checks for an existing address
GmailChecker.check('testaddress', function(err, data){
  if(err){
    console.error(err);
    return;
  }
  console.log("Username exists:", data.exists);
  if(data.exists)
    console.log("Error message", data.message);
});

//checks for an, hopefully, unexisting address
GmailChecker.check('testaddress12as12e4dfdf8ugsd', function(err, data){
  if(err){
    console.error(err);
    return;
  }
  console.log("Username exists:", data.exists);
  if(data.exists)
    console.log("Error message", data.message);
});
