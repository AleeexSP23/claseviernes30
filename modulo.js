import { soliciarDinero, comprobarEdad, hacerPizza, traducirSaludo, validarLogin} from "./async.js";

await soliciarDinero()
  .then((respuesta) => console.log("Extrayendo dinero"))
  .catch((err) => {
    console.log("Cantidad no valida");
  })
  .finally(() => console.log("Cerrando sesion"));

await comprobarEdad()
  .then((mayor) => console.log("Exito"))
  .catch((menor) => console.log("Error"));

await hacerPizza()
.then((hay) => console.log("¡Pizza en camino!"))
.catch((no_hay) => console.log("No hay stock"))
.finally(() => console.log("Horno apagado"))

await traducirSaludo()
.then((saludo) => console.log("hello"))
.catch((otracosa) => console.log("no se puede traducir"))

await validarLogin()