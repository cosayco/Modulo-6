const yargs = require('yargs');
const fs = require('fs/promises');
const { v4: uuidv4 } = require('uuid');
const archivoTareas = 'tareas.txt'


const createConfig = {
    titulo: {
        describe: 'El nombre de la tarea a realizar',
        alias: 't',
        demandOption: true
    },
    contenido: {
        describe: 'Descripcion de la tarea a realizar',
        alias: 'c',
        demandOption: true
    }
}

const updateConfig = {
    titulo: {
        describe: 'Nuevo nombre de la tarea a realizar',
        alias: 't'
    },
    contenido: {
        describe: 'Nueva descripcion de la tarea a realizar',
        alias: 'c'
    },
    id: {
        describe: 'El id o identificador de la tarea a actualizar o modificar',
        alias: 'i',
        demandOption: true
    }
}

const deleteConfig = {
    id: {
        describe: 'El id o identificador de la tarea a eliminar',
        alias: 'i',
        demandOption: true
    }
}

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

const funcionDelete = async ({id}) => {
    //const tareas = await fs.readFile(archivoTareas);
    //const arrayTareas = JSON.parse(tareas);
    try{
        const arrayTareas = await leerArchivo();
        console.log(arrayTareas.findIndex(tarea => tarea.id === id));
        const nuevasTareas = arrayTareas.filter(tareas => tareas.id !== id);
        await escribirArchivo(nuevasTareas);
        console.log('La tarea ha sido eliminada exitosamente');
    } catch (error) {
        console.log('Id de tarea no encontrada para eliminar')
    }

}

const args = yargs
.command('create','Crear una nueva tarea',createConfig, (argv) => funcionCreate(argv))
.command('read','Mostrar todas las tareas',{}, (argv) => funcionRead())
.command('update','Actualizar o modificar una tarea', updateConfig, (argv) => funcionUpdate(argv))
.command('delete','Eliminar una tarea',deleteConfig, (argv) => funcionDelete(argv))
.help()
.argv
