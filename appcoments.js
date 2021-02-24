
const { crearArchivo } = require('./helpers/multiplicar');


// Tarea imprimir tabla del 5 en la consala
console.clear(); // limpia la consola


// console.log(process.argv);  argumentos que vienen por consola
const [, , arg3 = '--base=5'] = process.argv;
const [, base = 5] = arg3.split('='); // crea dos --base y 5
console.log(base);



// const base = 3;

crearArchivo( base )
    .then ( nombreArchivo => console.log(nombreArchivo, 'creado2'))
    .catch( err => console.log(err))

