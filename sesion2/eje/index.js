// index.js
const utils = require('./utils');
const { nanoid } = require('nanoid');

const stringUno = nanoid(10);
const stringDos = nanoid(10);

const resultado = utils.concatena(stringUno, stringDos);
console.log(resultado);