// actividad en clase

let nombre = "Diego";
let edad = 33;
let precio = 1000;
let nombreSeries = ["breakingBad", "TheOffice", "Jackass"];
let nombrePeliculas = ["Gladiador", "SpiderMan", "Matrix"];

// Cuando hay info relacionada entre si lo ideal es trabajar a traves de objetos = clave:valor

let usuarios = [
	{
		nombre: "Ramon",
		edad: 33,
		precio: 1000,
		nombreSeries: ["breakingBad", "TheOffice", "Jackass"],
		nombrePeliculas: ["Gladiador", "SpiderMan", "Matrix"],
	},
	{
		nombre: "Lis",
		edad: 31,
		precio: 1500,
		nombreSeries: ["Emily", "TheOffice", "JarriPoter"],
		nombrePeliculas: ["Sascuach", "SpiderMan", "Everlong"],
	},
];

console.log(usuarios);

usuarios.forEach((usuario) => {
	usuario.edad++;
	usuario.nombreSeries.push("PeakyBlinders");
});

console.log(usuarios);

// Existen multiples maneras de llegar al mismo resultado
