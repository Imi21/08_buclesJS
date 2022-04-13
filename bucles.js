// //FOR (loop)
// const vueltas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < vueltas.length; i++) {
//   console.log("Vuelta nº " + vueltas[i]);
// }

// //WHILE (loops)
// //const vueltas = [1,2,3,4,5,6,7,8,9,10];
// let i = 0;

// while (i < vueltas.length) {
//        console.log("Vuelta nº " + vueltas[i]);
//        i++;

// //recorre solo ARRAYS
// //FOR OF
// const vueltas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let vuelta of vueltas) {
//   console.log("Vuelta nº " + vuelta);
// }

// //recore arrays y objetos
// //FOR IN

// const person = { fname: "John", lname: "Doe", age: 25 };

// for (let x in person) {
//   console.log(x);
// };

// //FUNCIONES
//  function sum (a,b){
//   return a +b;
//  };

//  function greet(greeting = "Hello", name) {
//   if (!name) {
//     return greeting;
//   } else {
//     return `${greeting} ${name}`;
//   }
// }

///1.Booleans

// 	Dados 2 variables booleanas:
const booleano1 = true;
const booleano2 = false;

// Crear variable booleanoAnd cuyo valor sea la comparación booleana booleano1 and booleano2

const booleanoAnd = booleano1 && booleano2;
console.log(booleanoAnd);

//Crear variable booleanoOr cuyo valor sea la comparación booleana booleano1 or booleano2

const booleanoOr = booleano1 || booleano2;
console.log(booleanoOr);

//Crear variable booleanoNot cuyo valor sea la comparación booleana no booleano1

const booleanoNot = booleano1 != booleano2;

//Crear variable booleanoMix0 cuyo valor sea la comparación booleana (booleano1 or booleano2) and (booleano1 or (not booleano1 and not booleano2)

const booleanoMix0 = (booleano1 || booleano2) && booleano1 != booleano2;

//2.Operadores
//Crear variable valorDivisión cuyo valor sea la división de 17 entre 3 y que solo muestre 2 decimales en el resultado

const valorDivisión = 17 / 3;
console.log(valorDivisión.toPrecision(3));

//Crear variable valorResto cuyo valor sea el resto de 17 entre 7

const valorResto = 17 % 7;
console.log(valorResto);

//3.Lógica de programación
//Crea una variable A cuyo valor sea el número 9, después crea una variable B cuyo valor sea un string con el número 9, desarrolla la lógica para que cuando A == B muestre por consola “Son iguales”, ¿qué pasa si en vez de tener A == B, comprobamos que A === B?

const a = 9;
const b = "9";

if (a == b) {
  console.log("a y b Son iguales");
} else {
  console.log("a y b no son el mismo tipo de valor");
}

if (a === b) {
  console.log("a y b Son iguales");
} else {
  console.log("a y b no son el mismo tipo de valor");
}

//Crea una variable mochila que sea un array de elementos, desarrolla la lógica para que sí mochila tiene más de 10 elementos muestre por consola el mensaje “No puedo cargar con tantas cosas”, sí mochila contiene entre 10 y 2 elementos se muestre por consola “Que bien voy con mi mochila” y si no muestre por consola “Creo q no necesito una mochila"

const mochila = [1, 2, 3, 4, 5, 6, 7, 8];

if (mochila.length > 10) {
  console.log("No puedo cargar con tantas cosas");
} else if (mochila.length <= 10 && mochila.length >= 2) {
  console.log("Que bien voy con mi mochila");
} else {
  console.log("Creo q no necesito una mochila");
}

//Crear variable contarHasta10 con valor 0 e incrementar su valor con un bucle hasta que se verifique que contarHasta10 === 10

let contarHasta10 = 0;
for (let i = 0; i <= 10; i++) {
  contarHasta10++;
  console.log(contarHasta10);
}

//Crea una variable diaFestivo que sea de tipo boolean. Crea un ternario que si diaFestivo es true devuelve un console.log de ‘Hoy no trabajo’ y  si es false ‘Hoy trabajo’
const diaFestivo = true;

const siDiaFestivo =
  diaFestivo === true ? "Hoy no trabajo" : "hoy Trabajo SHIEEETEET!!!";
console.log(siDiaFestivo);

//Crea una variable arrayBucle tipo array vacía, rellénala con números del 4 al 18 utilizando un bucle

const arrayBucle = [];
for (let i = 4; i <= 18; i++) {
  arrayBucle.push(i);
}
console.log(arrayBucle);

//Recorre la variable creada anteriormente arrayBucle ,suma todos sus elementos y guárdalos en una variable de nombre resultado
let resultado = 0;
for (let i = 0; i < arrayBucle.length; i++) {
  resultado += i;
}
console.log(resultado);

//Dado el siguiente array, [‘Con’, ‘Sofia’, ‘aprendiendo’, ‘bucles’], recorrelo utilizando el bucle “for of” y muestra por consola todos sus elementos, después recórrelo utilizando el bucle “for in” mostrando también por consola todos sus elementos

const miArray = ["Con", "Sofia", "aprendiendo", "bucles"];

for (let miDato of miArray) {
  console.log(`elemento del array: ${miDato}`);
}

//Crea un bucle utilizando “while” que itere 20 veces y muestre por consola “Patata” cada vez que el número de la iteración sea múltiplo de 3

const numeros = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
let i = 0;
while (i < numeros.length) {
  if (i % 3 == 0) {
    console.log("patata");
  }
  i++;
}
// Crea un programa el cual te pregunte por una nota del 0 al 10 y dependiendo del número, te devuelva la siguiente clasificación.
// Nota: Debes de usar el Switch.
// 0 - 4: Insuficiente.
// 5 - 6: Suficiente.
// 7 - 8: Notable.
// 9 - 10: Sobresaliente.

//const nota = Number(prompt("introduce nota de examen"));

// switch (nota) {
//   case 0:
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//     console.log("insuficiente");
//     break;
//   case 5:
//   case 6:
//     console.log("suficiente");
//     break;
//   case 7:
//   case 8:
//     console.log("notable");
//     break;
//   case 9:
//   case 10:
//     console.log("sobresaliente");
//     break;
//   default:
//     console.log("introduce una nota de 0 a 10 gracias.");
// }

//Crea una función resta que espere dos parámetros a y b y que devuelva la resta de los mismos.

let resta = (a, b) => a - b;
console.log(resta(10, 2));

//Crea la función duplicaNumero debe recibir un tipo number y devolver el doble del valor recibido. Si la función no recibe un dato tipo number debe devolver el string ‘Debo ser ejecutada con un número’

let duplicaNumero2 = function (a) {
  if (typeof a == "number") {
    console.log(a * 2);
  } else {
    console.log("introduzca numero valido");
  }
};
duplicaNumero2(10);