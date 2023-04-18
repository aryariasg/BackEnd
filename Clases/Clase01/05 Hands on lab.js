// HANDS ON LAB

function mostrarLista(array) {
	if (Array.isArray(array)) {
		if (array.length === 0) {
			console.log("Lista Vacia");
		} else {
			array.forEach((e) => console.log(e));
			console.log(`La longitud del arreglo es de ${array.length} elementos`);
		}
	} else {
		console.log("no es un arreglo");
	}
}

// mostrarLista([]);

mostrarLista([1, 3, 5, 7, 8, 9]);
