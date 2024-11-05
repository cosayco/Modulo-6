//Crea  un  nuevo  archivo  llamado  celular.js,  que  contenga  y  exporte  un  objeto.  El  objeto debe tener como contenido pares llave - valor de, por lo menos, cinco características de tu celular, más un sexto ítem que contenga una fecha generada por moment.
const moment = require('moment');

const celular = {
  marca: 'Samsung',
  modelo: 'Galaxy S23',
  color: 'Negro',
  so: 'Android 13',
  almacenamiento: '256 GB',
  fechaCompra: moment().format('YYYY-MM-DD')
};

module.exports = celular;