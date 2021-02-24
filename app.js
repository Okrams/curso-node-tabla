const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

require('colors');


// Tarea imprimir tabla del 5 en la consala
console.clear(); // limpia la consola


crearArchivo( argv.b, argv.l, argv.h )
    .then ( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado2'))
    .catch( err => console.log(err))

