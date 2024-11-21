const fs = require('fs/promises');
const _ = require('lodash');
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

const funcionDelete = async ({id}) => {
    //const tareas = await fs.readFile(archivoTareas);
    //const arrayTareas = JSON.parse(tareas);
    try{
        const arrayTareas = await leerArchivo();
        _.remove(arrayTareas, (tarea) => tarea.id == id);
        //console.log(arrayTareas.findIndex(tarea => tarea.id === id));
        //const nuevasTareas = arrayTareas.filter(tareas => tareas.id !== id);
        //await escribirArchivo(nuevasTareas);
        await escribirArchivo(arrayTareas);
        console.log('La tarea ha sido eliminada exitosamente');
    } catch (error) {
        console.log('Id de tarea no encontrada para eliminar')
    }
}

module.exports = funcionDelete