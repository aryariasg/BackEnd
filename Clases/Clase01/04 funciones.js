// Funciones

function console(a) {
	return a;
}

console.log("hola");
console.log("como te va");
console.log("Excelente");

function sumar(n1, n2) {
	return n1 + n2; // el return es VITAL. Es la respuesta de la funcion
}

console.log(sumar(2, 4));

/* 
Funcion flecha ()=>
	Cuando hay una sola línea no hace falta utilizar el return (Return Implícito)
	Cuando hay solo un parametro no hace falta colocar parentesis 
*/
const restar = (n1, n2) => n1 - n2;

console.log(restar(10, 4));
