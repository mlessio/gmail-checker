var request = require('request');

const CHECK_URL = 'https://accounts.google.com/InputValidator?resource=SignUp&service=mail';

var GmailChecker = function() {
  this.locale = 'en';
};

GmailChecker.prototype.setLocale = function(locale){
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
    _check(username, this.locale, function(err, data) {
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

      _check(username, checker.locale, function(err, data) {
        if (err) {
          return reject(err);
        }
        var response = {
          exists: data.input01.Valid === "false",
          message: data.input01.ErrorMessage
        };
        return resolve(response);
      });
    });
  }
};

function _check(username, locale, callback) {
  //https://accounts.google.com/InputValidator?resource=SignUp&service=mail
  var body = {
    input01: {
      Input: "GmailAddress",
      GmailAddress: username
    },
    Locale: locale
  };

  request.post(CHECK_URL,
    {
      body: JSON.stringify(body),
      headers: {
        'content-type': 'application/json'
      }
    }, function (error, response, body) {
    callback(error, JSON.parse(body));
  });

}

module.exports = new GmailChecker();
