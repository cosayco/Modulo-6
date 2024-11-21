const yargs = require('yargs');
const funcionRead = require('./crud/read.js');
const funcionCreate = require('./crud/create.js');
const funcionUpdate = require('./crud/update.js');
const funcionDelete = require('./crud/delete.js');

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

const args = yargs
.command('create','Crear una nueva tarea',createConfig, (argv) => funcionCreate(argv))
.command('read','Mostrar todas las tareas',{}, (argv) => funcionRead())
.command('update','Actualizar o modificar una tarea', updateConfig, (argv) => funcionUpdate(argv))
.command('delete','Eliminar una tarea',deleteConfig, (argv) => funcionDelete(argv))
.help()
.argv
