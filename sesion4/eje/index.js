//En base al ejercicio anterior, crea un nuevo archivo de texto que contenga el siguiente Array con nombres de Pokémon: 
//• Utiliza el mismo concepto para acceder a un Pokémon aleatorio, y realizar una búsqueda con Axios.  
//• Ingresa a https://random-data-api.com/documentation, para revisar la documentación de la API de random data. Busca, al menos, tres URL y anota estos valores en un archivo de texto en formato json. Utiliza el módulo fs para leerlo desde tu archivo index.js, luego usa Axios para hacer una llamada a cada una de las URL, y muestra el resultado por consola de manera secuencial.  
const axios = require('axios');
const fs = require('fs/promises');
const path = './pokemon.txt';

const numeroAzar = (numeroMaximo) => Math.floor(Math.random() * numeroMaximo - 1);

const leerArchivo = async () => {
    const datos = await fs.readFile(path);
    const arrayDatos = JSON.parse(datos);
    const numeroArray = Math.abs(numeroAzar(arrayDatos.length));

    console.log(arrayDatos[numeroArray]);
}

leerArchivo();