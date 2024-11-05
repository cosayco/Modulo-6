// Crear tres variables, una con cada palabra clave: var, let, const; y construir una porción de código donde la ejecución tenga un error por el alcance de cada una de éstas, ya sea porque la definición es al interior de una función, de un bloque o fuera de ellos. 
// Alcance de var
function alcanceVar() {
    var x = 10;
    if (true) {
      var x = 20;
      console.log(x);
    }
    console.log(x);
}
alcanceVar();
  
// Alcance de let
function alcanceLet() {
    let y = 10;
    if (true) {
      let y = 20;
      console.log(y);
    }
    console.log(y);
}
alcanceLet();
  
// Alcance de const
const z = 30; 
// z = 40; // Para generar el error ya que no se puede reasignar una constante

//Crear una función utilizando el formato tradicional con la palabra clave function, y luego volver a escribirla utilizando la sintaxis de función de flecha, y guardando la declaración dentro de una variable. La función debe recibir, al menos, dos argumentos.
function suma_tradicional(a, b) {
    return a + b;
}
  
const suma_flecha = (a, b) => a + b;
  
console.log(suma_tradicional(5, 3));
console.log(suma_flecha(5, 3));

//Crear una función similar a la del ejercicio, utilizando esta vez un objeto con características de algún animal, que contenga, al menos, cinco pares de llave - valor.
const animal = {
    nombre: 'Perro',
    raza: 'Salchicha',
    edad: 3,
    color: 'Negro',
    peso: 25
};
  
function describirAnimal({ nombre, raza, edad }) {
    console.log(`El animal es un ${raza} llamado ${nombre} y tiene ${edad} años.`);
}
  
describirAnimal(animal); 

//Utilizar template literals para escribir un texto empleando los valores del objeto, y Destructuring para definir los valores del objeto dentro de la función.
const persona = {
    nombre: 'Carlos',
    apellido: 'Duran',
    edad: 45,
    ciudad: 'Coquimbo'
};
  
function presentarPersona({ nombre, apellido, ciudad }) {
    console.log(`Hola, mi nombre es ${nombre} ${apellido} y vivo en ${ciudad}.`);
}
  
presentarPersona(persona); 

//Tomar el objeto creado con anterioridad, y crear una copia actualizada usando el spread operator; actualizar dos campos, y añadir dos nuevos. 
const personaActualizada = {
    ...persona,
    edad: 35,
    profesion: 'Desarrollador',
    hobbies: ['Leer', 'Programar']
};
  
console.log(persona);
console.log(personaActualizada);

//Obtener las propiedades del objeto en un Array, utilizando el método Object.values(), y luego usar un ciclo for of para mostrar por pantalla todos los ítems del Array.
const valores = Object.values(personaActualizada);
  
for (const valor of valores) {
    console.log(valor);
}