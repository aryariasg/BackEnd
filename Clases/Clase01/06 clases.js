// Clases - mejor forma de escribir funciones constructoras
// La clase es una representacion de una entidad - sirven como moldes

// const producto1 = {
// 	nombre: "iphone",
// 	precio: 500,
// 	stock: 30,
// };
// const producto2 = {
// 	nombre: "ituper",
// 	precio: 300,
// 	stock: 20,
// };
// const producto3 = {
// 	nombre: "isex",
// 	precio: 200,
// 	stock: 10,
// };

class Producto {
	constructor(nombre, precio, stock) {
		this.nombre = nombre;
		this.precio = precio;
		this.stock = stock;
	}
	// this se utiliza para hacer mencion de este OBJETO en particular
	devolverNombre() {
		return this.nombre;
	}
}

const producto1 = new Producto("iphone", 500, 30);
const producto2 = new Producto("ituper", 300, 20);
const producto3 = new Producto("isex", 200, 10);

console.log(producto1, producto2, producto3);
//console.log(producto2);
//console.log(producto3);

// me quede en 1:34hs de la Clase 1
// existen metodos de clase que son funciones que se crean dentro de la clase

console.log(producto1.devolverNombre());
console.log(producto2.devolverNombre());
console.log(producto3.devolverNombre());

// lo metodos pueden ser utilizados por cualquier -instancia- de esa clase

// This es de los terminos mas complicados de entender => agarrar la propiedad exclusiva del objeto que esta instanciando la clase

// crear un arreglo de objetos y pushear los objetos dentro de el

const productos = [];

productos.push(producto1, producto2);

console.log(productos);
