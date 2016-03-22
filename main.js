'use strict';

let handleCommand = require('./modules/handleCommand');


let args = process.argv.slice(2);
handleCommand(args, () => {
  process.exit();
});
