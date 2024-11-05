var mascotasJson = [
    {
        "nombre": "fluffy",
        "mascota": "true",
        "animal": "gato",
        "edadHumana": "7"
    },
    {
        "nombre": "Balto",
        "mascota": "true",
        "animal": "perro",
        "edadHumana": "11"
    },
    {
        "nombre": "Mandibulas",
        "mascota": "false",
        "animal": "tiburon",
        "edadHumana": "50"
    }
];

var nuevaMascotaUno = {
    "nombre": "Rex",
    "mascota": "true",
    "animal": "canario",
    "edadHumana": "3"
};

var nuevaMascotaDos = {
    "nombre": "Luna",
    "mascota": "true",
    "animal": "hamster",
    "edadHumana": "2"
};

console.log("Cantidad de objetos inicial:", mascotasJson.length);

mascotasJson.push(nuevaMascotaUno);
mascotasJson.push(nuevaMascotaDos);
console.log("Se agregan dos mascotas!");

console.log("Cantidad de objetos final:", mascotasJson.length);

console.log(mascotasJson);