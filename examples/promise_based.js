var GmailChecker = require("../index");

//checks for an existing address
GmailChecker.check('testaddress').then(function(data){
  console.log("Username exists:", data.exists);
}).catch(function(err){
  console.error(err);
});

//checks for an, hopefully, unexisting address
GmailChecker.check('testaddress12as12e4dfdf8ugsd').then(function(data){
  console.log("Username exists:", data.exists);
}).catch(function(err){
  console.error(err);
});
