class ProductManager {
	#idGenerator() {
		const id = this.products.length === 0 ? 1 : this.products[this.products.length - 1].id + 1;
		return id;
	}

	constructor() {
		this.products = [];
	}

	getProducts() {
		return this.products;
	}

	getProductById(id) {
		const productById = this.products.find((pid) => pid.id === id);
		const pError = `Error: Producto ${id} no encontrado`;

		if (productById) {
			return productById
			//`Producto encontrado: ${productById}`;
		} else {
			return pError;
		}
	}

	addProduct(title, description, price, thumbnail, code, stock) {
		const product = {
			title,
			description,
			price,
			thumbnail,
			code, 
			stock,
			id: this.#idGenerator(),
		};

		if (this.products.some((pCode) => pCode.code === product.code)) {
			return console.log("Error: El código del producto ya existe");
		}

		if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
			console.log("Error: Todos los campos son obligatorios");
			return;
		}

		this.products.push(product);
	}
}

const manager = new ProductManager();

manager.addProduct("NoteBook", "Asus 15.6", 139000, "thumbnail", 1, 10);
console.log(manager.getProducts());

manager.addProduct("NoteBook", "Lenovo IdeaPad", 259000, "thumbnail", 1, 5); // Code repetido => no se suma al array + retorna mensaje de Error

manager.addProduct("Monitor", "Gamer Samsung", 49000, "thumbnail", 2, 15);
console.log(manager.getProducts());

manager.addProduct("Parlante", "AJBL Flip 6", 58600, "thumbnail", 3, 20);
manager.addProduct("Auriculares", "OEar Bluetooth TWS ", 3400, "thumbnail", 4, 25);
console.log(manager.getProducts());

console.log(manager.getProductById(4));
console.log(manager.getProductById(8));

manager.addProduct("Televisor", "", 160000, "thumbnail", 5, 50); // Falta descripcion => no se suma al array + retorna mensaje de Error
console.log(manager.getProducts());