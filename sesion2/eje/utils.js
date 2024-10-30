// utils.js
const config = require('./config');

function concatena(stringUno, stringDos) {
  const concatenado = stringUno + stringDos;
  return config.retornaLargo ? concatenado.length : concatenado;
}

module.exports = {
  concatena
};