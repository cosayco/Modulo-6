const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3000;
app.use(express.json());
const pathAnime = "./anime.json";
//• Crear un programa que permita hacer el CRUD completo de los datos. El id será el primer argumento para acceder a las propiedades de cada anime.
//• Se deberá poder listar todos los datos del archivo y, además, leer los datos de un anime especifico, accediendo por su id y/o por su nombre.
//• Realizar un test para poder probar la respuesta del servidor que fue creado.
//• Evaluación a través de Postman:
//    • No es necesario presentar una interfaz gráfica.
//    • La funcionalidad será evaluada utilizando la herramienta Postman para comprobar que todos los puntos han sido implementados correctamente.

//https://github.com/cosayco/Modulo-6
//----------------------------------------------------------------------
// Leer archivo JSON
const leerAnime = () => {
  if (!fs.existsSync(pathAnime)) {
    fs.writeFileSync(pathAnime, JSON.stringify([]));
  }
  const data = fs.readFileSync(pathAnime, "utf-8");
  return JSON.parse(data);
};

// Escribir archivo JSON
const escribirAnime = (datos) => {
  fs.writeFileSync(pathAnime, JSON.stringify(datos, null, 2));
};

// Funcion para validar el Anime
function validarAnime(req, res, next) {
  const { nombre, genero, año, autor } = req.body;
  const keys = Object.keys(req.body);
  if (
    keys.length !== 4 ||
    !keys.includes("nombre") ||
    !keys.includes("genero") ||
    !keys.includes("año") ||
    !keys.includes("autor")
  ) {
    return res
      .status(400)
      .json({
        mensaje:
          "Solo se permite nombre, genero, año y autor como propiedades.",
      });
  }
  if (
    typeof nombre !== "string" ||
    typeof genero !== "string" ||
    typeof año !== "string" ||
    typeof autor !== "string"
  ) {
    return res
      .status(400)
      .json({
        mensaje: "El nombre, genero, año y autor deben ser un tipo texto",
      });
  }
  next();
}
//-----------------------------------------------------------------------------------------
// Mostrar todos los Animes
app.get("/animes", (req, res) => {
  const animes = leerAnime();
  res.status(200).json(animes);
});

//Buscar un Anime por ID o Nombre
app.get("/animes/buscar", (req, res) => {
  const animes = leerAnime();
  const id = req.query.id;
  const nombre = req.query.nombre;
  let animeBuscado = [];
  if (id) {
    animeBuscado = animes[id];
  }
  if (nombre) {
    animeBuscado = Object.values(animes).find(
      (a) => a.nombre.toLowerCase() === nombre.toLowerCase()
    );
  }
  if (animeBuscado) {
    res.status(200).json(animeBuscado);
  } else {
    res.status(404).json({ Mensaje: "Anime no ha sido encontrado" });
  }
});
//localhost:3000/animes/buscar?nombre=Dragon Ball
//localhost:3000/animes/buscar?id=4

// Agregar un Anime
app.post("/animes", validarAnime, (req, res) => {
  var { nombre } = req.body;
  const animes = leerAnime();
  const existeAnime = Object.values(animes).find(
    (a) => a.nombre.toLowerCase() === nombre.toLowerCase()
  );
  if (existeAnime) {
    return res.status(400).json({ Mensaje: "El nombre de Anime ya existe" });
  }
  const nuevoId = Object.keys(animes).length + 1;
  animes[nuevoId] = req.body;
  escribirAnime(animes);
  res.status(200).json(animes[nuevoId]);
});

// Actualizar un Anime por su Id
app.put("/animes/:id", validarAnime, (req, res) => {
  const animes = leerAnime(); //agregar esto
  const id = req.params.id;
  const nuevaInformacion = req.body;

  if (animes[id]) {
    animes[id] = { ...animes[id], ...nuevaInformacion };
    escribirAnime(animes);
    res.json({ Mensaje: "Película actualizada correctamente" });
  } else {
    res.status(404).json({ Mensaje: "Anime no ha sido encontrado" });
  }
});

// Eliminar Dato
app.delete("/animes/:id", (req, res) => {
  let animes = leerAnime();
  const id = req.params.id;

  if (animes[id]) {
    delete animes[id];
    escribirAnime(animes); // Guardamos la lista actualizada en el archivo
    res.json({ Mensaje: `El Anime con ID ${id} ha sido eliminada` });
  } else {
    res.status(404).json({ Mensaje: "Anime no ha sido encontrado" });
  }
});

//Servidor
app.listen(PORT, () => {
  console.log(`Servidor Activo en url http://localhost:${PORT}/animes `);
});
