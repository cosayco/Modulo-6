const nombre = "Carlos";
const edad = 45;

console.log("Antes de la petición:", nombre, edad);

function obtenerDatosUsuario(callback) {
  setTimeout(() => {
    const datosUsuario = {
      ciudad: "Coquimbo",
      ocupacion: "FullStack Developer"
    };
    callback(datosUsuario);
  }, 2000);
}

function mostrarDatosUsuario(datos) {
  console.log("Datos del usuario:", datos);
}

obtenerDatosUsuario(mostrarDatosUsuario);

console.log("Después de la petición");