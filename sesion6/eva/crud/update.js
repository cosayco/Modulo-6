const fs = require('fs/promises');
const archivoTareas = './tareas.txt';

const leerArchivo = async () => {
    try {
        const data = await fs.readFile(archivoTareas);
        return JSON.parse(data);
    } catch (e) {
        return [];
    }    
}

const escribirArchivo = async (tareas) => {
    await fs.writeFile(archivoTareas, JSON.stringify(tareas, null, 2));
}

const funcionUpdate = async ({id, titulo, contenido}) => {
    //const tareas = await fs.readFile(archivoTareas);
    //const arrayTareas = JSON.parse(tareas);
    try {
        const arrayTareas = await leerArchivo();
        const tareaActual = arrayTareas.findIndex(tarea => tarea.id === id);
        const tituloNuevo = titulo ? titulo : tareaActual.titulo;
        const contenidoNuevo = contenido ? contenido : tareaActual.contenido;
        arrayTareas[tareaActual].titulo = tituloNuevo;
        arrayTareas[tareaActual].contenido = contenidoNuevo;
        await escribirArchivo(arrayTareas);
        console.log('La tarea ha sido actualizada');
    } catch (error) {
        console.log('Id de tarea no encontrada para actualizar');
    }
}

module.exports = funcionUpdate