const dinero = 1;

export function soliciarDinero() {
  return new Promise((resolve, reject) => {
    if (dinero > 0) {
      resolve("Extrayendo efectivo");
    } else {
      reject("Cantidad invalida");
    }
  });
}

//////////////////////////////

const edad = 17;

export function comprobarEdad() {
  return new Promise((resolve, reject) => {
    if (edad > 18) {
      resolve("Exito");
    } else {
      reject("Error");
    }
  });
}

///////////////////////////////

const ingredientes = Math.random(0, 1);

export function hacerPizza() {
  return new Promise((resolve, reject) => {
    if (ingredientes > 0.5) {
      resolve("¡Pizza en camino!");
    } else {
      reject("No hay stock");
    }
  });
}

/////////////////////////////////

const saludo = "hola";

export function traducirSaludo() {
  return new Promise((resolve, reject) => {
    if (saludo === "hola") {
      resolve("hello");
    } else {
      reject("no se puede traducir");
    }
  });
}

///////////////////////////////////

const nombre = "Alejandro";
const email = "asdf@gmail.com";
const contraseña = "pinga";

export function validarLogin() {
  return new Promise((resolve, reject) => {
    if (!email.includes("@")) {
      reject("email invalido");
    } else if (contraseña.length < 8) {
      reject("contraseña debil");
    } else {
      resolve(Logeado);
    }
  });
}
