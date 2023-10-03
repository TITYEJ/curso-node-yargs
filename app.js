const  argv  = require('./config/yargs');
const {crearArchivo} = require('./helpers/multiplicar');
const colors=require('colors');
//asi importo otro archivo


console.clear();

// const base=4;

crearArchivo(argv.b,argv.l,argv.h).then(msg=>console.log(msg.green)).catch(err=>console.log(err.red)); 