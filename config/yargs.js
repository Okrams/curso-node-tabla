const { number } = require('yargs');

const argv = require('yargs')
    .options({
        'b':{
            alias: 'base',
            type: 'number',
            demandOption: true, //para que sea requerido
            describe: 'Es la base de la tabla de multiplicar',
        },
        'l':{
            alias: 'listar',
            type: 'boolean',
            default: false,
            describe: 'Mustra la tabla en consola',
        },
        'h':{
            alias:'hasta',
            type: 'number',
            default: 10,
            describe: 'Limite de la tabla de multiplicar'
        }
    })
    .check( (argv, options) => {
        if( isNaN(argv.b) ){
            throw 'La base tiene que ser un número';
        }
        if(isNaN(argv.h) ){
            throw 'El limite debe ser un numero';
        }
        return true;
    })
    .argv;

module.exports = argv;