const fs = require("fs");
const path = "./products.json";

class ProductManager {
	constructor(path) {
		this.path = path; //ruta que que contiene el archivo products.json
	}


	//Metodo para obtener los productos
	getProducts = async () => {
		if (fs.existsSync(path)) {
			const fileInfo = await fs.promises.readFile(this.path, "utf-8");
			const products = JSON.parse(fileInfo);
			return products;
		} else {
			console.log("file doesn't exist");
			return [];
		}
	};

	//Método para obtener producto por su ID
	getProductById = async (id) => {
		const products = await this.getProducts();
		const product = products.find((p) => p.id === id);
		if (product) {
			return product;
		} else {
			return "product doesn't exist";
		}
	};

	//Método para agregar nuevo producto
	addProduct = async (product) => {
		const products = await this.getProducts();
		const id = this.#idGenerator(products);
		const newProduct = { id, ...product };
		products.push(newProduct);
		await fs.promises.writeFile(this.path, JSON.stringify(products));
		return newProduct;
	};

	//Método para actualizar producto existente
	updateProduct = async (id, obj) => {
		const productsFile = await this.getProducts();
		const product = productsFile.find((p) => p.id === idProd);
		if (!product) {
			return "Product not found";
		} else {
			const updatedProduct = { ...product, ...obj };
			const productIndex = productsFile.findIndex((p) => p.id === idProd);
			productsFile.splice(productIndex, 1, updatedProduct);
			await fs.promises.writeFile(this.path, JSON.stringify(productsFile));
			return "Product updated";
		}
	};

	//Métodos para eliminar producto existente
	deleteProducts = async () => {
		if (fs.existsSync(this.path)) {
			await fs.promises.unlink(this.path);
			return "products deleted";
		} else {
			return "products doesn't found";
		}
	};

	deleteProduct = async (id) => {
		const products = await this.getProducts();
		const newProductsArray = products.filter((p) => p.id !== id);
		await fs.promises.writeFile(this.path, JSON.stringify(newProductsArray));
		console.log("product deleted");
	};

	// Métodos privados al final
	#idGenerator = (products) => {
		let id = products.length === 0 ? 1 : products[products.length - 1].id + 1;
		return id;
	};
}

const product1 = {
	title: "NoteBook",
	description: "Asus",
	price: 139000,
	thumbnail: "thumbnail",
	code: 1,
	stock: 10,
};
const product2 = {
	title: "NoteBook",
	description: "Lenovo IdeaPad",
	price: 259000,
	thumbnail: "thumbnail",
	code: 2,
	stock: 15,
};
const product3 = {
	title: "Monitor",
	description: "Gamer Samsung",
	price: 51000,
	thumbnail: "thumbnail",
	code: 3,
	stock: 20,
};
const product4 = {
	title: "Parlante",
	description: "JBL Flip 6",
	price: 58600,
	thumbnail: "thumbnail",
	code: 4,
	stock: 25,
};
const product5 = {
	title: "Auriculares",
	description: "Ear Bluetooth TWS",
	price: 3400,
	thumbnail: "thumbnail",
	code: 5,
	stock: 50,
};

async function add() {
	const manager = new ProductManager(path);
	await manager.addProduct(product1);
	await manager.addProduct(product2);
	await manager.addProduct(product3);
	await manager.addProduct(product4);
	await manager.addProduct(product5);
	const products = await manager.getProducts();
	console.log(products);
}

async function getById() {
	const manager = new ProductManager(path);
	console.log(await manager.getProductById(3)); // Producto existe
	console.log(await manager.getProductById(11)); // Producto no existe
}

async function deleteById() {
	const manager = new ProductManager(path);
	await manager.deleteProduct(3);
}

async function deleteAll() {
	const manager = new ProductManager(path);
	await manager.deleteProducts();
}

async function update() {
	const manager = new ProductManager(path);
	await manager.updateProduct(3, { price: 58000 });
	await manager.updateProduct(2, { stock: 10 });
}

add()
getById()
deleteById()
deleteAll()
update()