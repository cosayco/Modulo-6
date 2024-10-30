const _ = require('lodash');
const { autos, animales } = require('./datos');

const autosUnicos = _.uniq(autos);

const animalSalvaje = _.find(animales, { tipo: 'salvaje' }); // Entrega el primer valor que encuentra segun el tipo salvaje
const animalesSalvajes = _.filter(animales, { tipo: 'salvaje' }); // Entrega todos los valores que encuentra segun el tipo salvaje

//console.log('Autos Original:', autos);
console.log('Autos únicos:', autosUnicos);

//console.log('Animales Original:', animales);
console.log('Primer Animal Salvaje:', animalSalvaje);
console.log('Animales salvajes:', animalesSalvajes);

