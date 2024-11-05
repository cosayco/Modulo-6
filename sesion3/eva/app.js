//Importa el objeto en tu archivo index.js, utilizando la desestructuración de objetos.
const { marca, modelo, color, so, almacenamiento, fechaCompra } = require('./celular.js');

//Crea una función que muestre por pantalla la descripción de tu celular, utilizando template literals, y las variables recogidas del objeto importado desde el archivo celular.js
function detalleCelular() {
    let mensaje = `Mi celular es un ${marca} ${modelo} de color ${color}.
      Tiene un sistema operativo ${so} y ${almacenamiento} de almacenamiento.
      Lo compré el ${fechaCompra}.`
    console.log(mensaje);
}
  
detalleCelular();

//Crea una copia del objeto en celular.js, y actualiza dos de sus propiedades utilizando el spread operator.
const celular = require('./celular.js');
const nuevoCelular = {...celular, color: 'Azul', almacenamiento: '512 GB'};
console.log(nuevoCelular);

//Escribe un ejemplo de función de callback (puedes utilizar las revisadas en el primer y segundo CUE), pero esta vez utilizando la sintaxis de función de flecha.
function obtenerDatos(callback) {
    setTimeout(() => {
      const datos = {
        nombre: 'Carlos',
        edad: 45,
        ciudad: 'Coquimbo'
      };
      callback(datos); 
    }, 2000); 
}

const procesarDatos = (datos) => {
    console.log(`Los datos recibidos son:`);
    console.log(datos);
};
  
obtenerDatos(procesarDatos);