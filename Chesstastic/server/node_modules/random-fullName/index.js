'use strict';

var randomFirstName = require('random-firstname');
var randomLastName  = require('random-lastname');

module.exports = function (options) {

  var middle = '';

  options = options || {};

  if (options.middleName === true) {
    middle = randomFirstName();
  } else if (typeof options.middleName === 'string') {
    middle = options.middleName;
  }

  if (middle) {
    return randomFirstName(options.gender) + ' ' + middle + ' ' + randomLastName();
  } else {
    return randomFirstName(options.gender) + ' ' + randomLastName();
  }
};
