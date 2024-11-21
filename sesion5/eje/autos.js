const fs = require("fs");
const argumentosEntrada = process.argv.slice(2);
const pathAutos = "./autos.json"

const leerAutos = () => {
    const datos = fs.readFileSync(pathAutos, "utf-8")
    return JSON.parse(datos)
}

const buscarAutos = (dato) => {
    const autos = leerAutos()
    let auto = autos[dato]
    return auto
}

const escribirAutos = (datos) => {
    fs.writeFileSync(pathAutos, JSON.stringify(datos, null, 2))
}

const verificaArgumentos = () => {
    if(argumentosEntrada[0] == "leer" && argumentosEntrada.length == 1){
        const autos = leerAutos()
        console.log(autos)
    } else if (argumentosEntrada[0] == "leer" && argumentosEntrada.length == 2) {
        const auto = buscarAutos(argumentosEntrada[1])
        console.log(auto)
    } else if (argumentosEntrada[0] != "leer" && argumentosEntrada.length > 1) {
        const autos = leerAutos()
        if (autos[argumentosEntrada[0]]) {
            autos[argumentosEntrada[0]][argumentosEntrada[1]] = parseInt(argumentosEntrada[2])
            escribirAutos(autos)
            console.log("Los datos han sido agregados exitosamente")
        } else {
            console.log("No existe el Auto")
        }
    }
}

verificaArgumentos()

//En resumen, tu programa podrá ser ejecutado de las siguientes tres formas: 
//• Para añadir o modificar propiedades: node autos.js ferrari puertas 3. 
//• Para leer el archivo completo: node autos.js leer.
//• Para leer solo las características de un auto en particular: node autos.js leer porsche. 