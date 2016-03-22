'use strict';

let addDebt = require('./addDebt');
let list = require('./list');

function handleCommand(args, callback) {
  switch(args[0]) {
    case 'add':
      addDebt(args[1], args[2], parseFloat(args[3]), callback);
      break;
    case 'list':
      list(args[1], callback);
      break;
    default:
  }
}

module.exports = handleCommand;
