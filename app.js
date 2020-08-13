//argv.argv --> ...require('./config/yargs').argv Extraigo solo lo que me interesa de este required
const argv = require("./config/yargs").argv;
var colors = require('colors');
const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar");

let comando = argv._[0];

switch (comando) {
    case "listar":
        listarTabla(argv.base, argv.limite);
        break;
    case "crear":
        crearArchivo(argv.base, argv.limite)
            .then((archivo) => console.log(`Archivo creado: ${archivo}`.cyan))
            .catch((err) => console.log(err));
        break;
    default:
        console.log("Comando no reconocido");
}

//sin la desectructuracion
// console.log(multiplicar.crearArchivo);
// let argv2 = process.argv;

// console.log(argv.base);
// console.log(argv.limite);
// let parametro = argv[2];
// let base = parametro.split('=')[1];
