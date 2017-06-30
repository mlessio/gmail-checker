var request = require('request');

const CHECK_URL = 'https://mail.google.com/mail/gxlu?email=';

var GmailChecker = function() {

};

// Unused at the moment
GmailChecker.prototype.setLocale = function(locale) {
  this.locale = locale;
};

GmailChecker.prototype.check = function check(username, callback) {

  var response = {
    exists: false,
    response: null
  };

  if (typeof callback !== 'undefined' && callback instanceof Function) {
    //callback mode
    //do stuff
    _check(username, function(err, data) {
      if (err) {
        return callback(err);
      }
      var response = {
        exists: data.input01.Valid === "false",
        message: data.input01.ErrorMessage
      };
      callback(null, response);
    });
  } else {
    //promise mode
    var checker = this;
    return new Promise(function(resolve, reject) {

      _check(username, function(err, data) {
        if (err) {
          return reject(err);
        }
        var response = {
          exists: data
        };
        return resolve(response);
      });
    });
  }
};

function _check(username, callback) {
  //https://mail.google.com/mail/gxlu?email=<valid_account>

  request(CHECK_URL + encodeURIComponent(username), function(error, response, body) {
    if (!error) {
      //console.log('Cookies', username,  response.headers);
      return callback(null, response.headers['set-cookie'] != null);
    } else {
      return callback(error);
    }
  });

}

module.exports = new GmailChecker();
