
var GmailChecker = require("../index");

//
GmailChecker.check('testaddress', function(err, data){
  if(err){
    console.error(err);
    return;
  }
  console.log("Username exists:", data.exists);
  if(data.exists)
    console.log("Error message", data.message);
});
