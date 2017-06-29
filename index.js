var GmailChecker = function() {

};

GmailChecker.prototype.check = function check(username, callback) {

  var response = {
    exists: false,
    response: null
  };

  if (typeof callback !== 'undefined' && callback instanceof Function) {
    //callback mode
    //do stuff
    callback(null, response);
  } else {
    //promise mode
    return new Promise(function(resolve, reject) {

      requestData(req, function(err, data) {
        if (err) {
          return reject(err);
        }
        return resolve(data);
      });
    });
  }
};

module.exports = new GmailChecker();
