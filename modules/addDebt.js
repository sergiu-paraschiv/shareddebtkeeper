'use strict';

let Firebase = require('../node_modules/firebase');
let Config = require('../config');

function addDebt(me, to, amount, callback) {
  let fb = new Firebase(Config.firebaseURI);
  let myDebts = fb.child('debts');

  myDebts.push({
    from: me,
    to: to,
    amount: amount
  });

  console.log('added', amount, 'to', to);
}

module.exports = addDebt;
