var primeraVariable = 0;
let segundaVariable = 11;

console.log(primeraVariable);
console.log(segundaVariable);

{
	var terceraVariable = 3;
	let cuartaVariable = 22;
}

console.log(terceraVariable);
//console.log(cuartaVariable);

// --- La importancia de los bloques

// let se utiliza para variable que van a cambiar de valor

let contador = 1;

// funciones, arreglos y objetos se definen con const

const port = 8080;

//---

const array2 = [];
const obj = {};

const string = "coderhouse";
// string = 5

console.log(string);
array2.push(5);
console.log(array2); // const no se fija en el contenido, sino que no cambie el tipo de constante


