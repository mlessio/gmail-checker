var GmailChecker = require("../index");

//
GmailChecker.check('testaddress').then(function(data){
  console.log("Username exists:", data.exists);
  if(data.exists)
    console.log("Error message", data.message);
}).catch(function(err){
  console.error(err);
});
