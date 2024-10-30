const mascotas = [
    {
      nombre: 'fluffy',
      mascota: 'true',
      animal: 'gato',
      edadHumana: '7'
    },
    {
      nombre: 'Balto',
      mascota: 'true',
      animal: 'perro',
      edadHumana: '11'
    },
    {
      nombre: 'Mandibulas',
      mascota: 'false',
      animal: 'tiburon',
      edadHumana: '50'
    },
    {
      nombre: 'Rex',
      mascota: 'true',
      animal: 'canario',
      edadHumana: '3'
    },
    {
      nombre: 'Luna',
      mascota: 'true',
      animal: 'hamster',
      edadHumana: '2'
    }
];

console.log("Array Original: ", mascotas)

while (mascotas.length > 0) {
    mascotas.pop();
    console.log("Elimino el ultimo item.", mascotas);
  }
  
if (mascotas.length === 0) { console.log('¡Ya no quedan mascotas en el Array!'); }
  