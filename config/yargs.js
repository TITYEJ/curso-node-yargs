const argv=require('yargs')
.option('b', {
    alias: 'base',
    demandOption: true,
    // default: '/etc/passwd',
    describe: 'Es la base de la tabla multiplicar',
    type: 'number'
}).option('l', {
    alias: 'listar',
    demandOption: true,
    default: false,
    describe: 'Para ver si muestra o no la tabla',
    type: 'boolean'
}).option('h', {
    alias: 'hasta',
    demandOption: true,
    default: false,
    describe: 'Hasta que punto',
    type: 'number'
}).check((argv,options)=>{
    if (isNaN(argv.b)) {
        throw 'La base tiene que ser un Número'
    } else if(isNaN(argv.h)){
        throw 'El Limite debe ser numero, no sea maje'
    }
    return true;
})
.argv;

module.exports=argv;