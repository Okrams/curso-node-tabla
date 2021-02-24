const fs = require ('fs');
const colors = require('colors');

const crearArchivo = async( base = 5, listar = false, hasta = 10) => {

    try {

        let salidaConsole = '';
        let salidaTxt = '';

        for( let i = 1; i <= hasta; i++){
            salidaConsole += `${base} ${'x'.green} ${i} ${'='.green} ${i*base} \n`;
            salidaTxt += `${base} x ${i} = ${i*base} \n`;
        }

        if(listar){
            console.log('============================'.green);
            console.log('       Tabla del'.green, colors.blue(base));
            console.log('============================'.green);
            console.log(salidaConsole)
        }

        fs.writeFileSync( `./salida/tabla-${base}.txt`, salidaTxt);


        return `Tabla-${base}.txt`;
        
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo,
}