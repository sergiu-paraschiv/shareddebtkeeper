'use strict';

let _ = require('lodash');
let Firebase = require('firebase');
let Config = require('../config');


function list(me, callback) {
  let fb = new Firebase(Config.firebaseURI);

  fb.child('debts').orderByChild('from').equalTo(me).on('value', (snapshot) => {
    let debtsList = snapshot.val();
    _.each(debtsList, (debt) => {
      console.log('iou:', debt.amount, 'to', debt.to);
    });
  });

  fb.child('debts').orderByChild('to').equalTo(me).on('value', (snapshot) => {
    let debtsList = snapshot.val();
    _.each(debtsList, (debt) => {
      console.log('uom:', debt.amount, 'from', debt.from);
    });
  });
}

module.exports = list;
