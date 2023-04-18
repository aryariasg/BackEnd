//---------------- Repaso de info => .map

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let dobles = numeros.map((x) => {
	return x * 2;
});

console.log(numeros);
console.log(dobles);

let expoDobles = dobles.map((a, b) => b ** a);
let expoDobles2 = dobles.map((a, b) => a ** b);

console.log(expoDobles);

console.log(expoDobles2);
