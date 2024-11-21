const { v4: uuidv4 } = require('uuid');
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

const funcionCreate = async ({titulo, contenido}) => {
    const id = uuidv4().slice(0,8);
    const nuevaTarea = { id: id, titulo: titulo, contenido: contenido};
    //const tareas = await fs.readFile(archivoTareas);
    //const arrayTareas = JSON.parse(tareas);
    arrayTareas = await leerArchivo();

    arrayTareas.push(nuevaTarea);
    await escribirArchivo(arrayTareas);
    //await fs.writeFile(archivoTareas, JSON.stringify(arrayTareas, null, 2));
    console.log('Nueva tarea agregada');
}

module.exports = funcionCreate

