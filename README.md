# Gmail Checker
[![Build Status](https://travis-ci.org/mlessio/gmail-checker.svg?branch=master)](https://travis-ci.org/mlessio/gmail-checker)
[![npm version](https://badge.fury.io/js/gmail-checker.svg)](https://badge.fury.io/js/gmail-checker)
[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)
[![Open Source Love](https://badges.frapsoft.com/os/v2/open-source.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)
[![Code Climate](https://codeclimate.com/github/mlessio/gmail-checker/badges/gpa.svg)](https://codeclimate.com/github/mlessio/gmail-checker)  

A simple library that checks if a Google Gmail account is already taken.
It may be suitable for email check, or other stuff.

## Installation

Download or clone this repo or install through npm:

```javascript
npm install --save gmail-checker
```

## Usage
```javascript
var GmailChecker = require('gmail-checker');

console.log(GmailChecker);
```

### Promise based
If the check is invoked without a callback object, a Promise is returned immediately.

You can use it like this:
```javascript
GmailChecker.check('myDesiredUsername').then(function(result){
  //check executed
  //do stuff with the result data
  if(result.exists){
    console.log('Gmail username already taken...');
  }else{
    console.log('Gmail username is available!');
  }
}).catch(function(err){
  //do something with the error data
  console.error(err);
});
```

### Callback based

If the check is invoked with a callback function, it'll be invoked after the check has been executed.

You can use it like this:
```javascript
GmailChecker.check('myDesiredUsername', function(err, result){

  //first argument, if not null is the error
  if(err){
    console.error(err);
    return;
  }
  //check executed
  //do stuff with the result data
  if(result.exists){
    console.log('Gmail username already taken...');
  }else{
    console.log('Gmail username is available!');
  }
});
```

## Attribution

This library is free and open source, it is not related, sponsored or endorsed by Google.


### Copyright
Copyright (c) 2017 Martino Lessio


### License

The MIT License (MIT)

Copyright (c) 2017 Martino Lessio

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
