const fs = require('fs/promises')
const archivoTareas = './tareas.txt';

const leerArchivo = async () => {
    try {
        const data = await fs.readFile(archivoTareas);
        return JSON.parse(data);
    } catch (e) {
        return [];
    }    
}

const funcionRead = async () => {
    //const tareas = await fs.readFile(archivoTareas);
    //const arrayTareas = JSON.parse(tareas);
    const arrayTareas = await leerArchivo();
    try {
        arrayTareas.forEach((tarea, index) => {
            console.log(`Tarea ${index + 1}:`);
            console.log(`- Título: ${tarea.titulo}.`);
            console.log(`- Contenido: ${tarea.contenido}.`);
            console.log(`- Id: ${tarea.id}`);
            console.log();
        });
    } catch (error) {
        if (error instanceof TypeError) {
            console.log("El archivo de tareas está vacío o no tiene un formato JSON válido.");
        } else {
            console.error("Ocurrió un error inesperado:", error);
        }
    }
}

module.exports = funcionRead