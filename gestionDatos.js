// ===============================
// Trabajo Práctico Arrays - Programación III
// Grupo Nº: Grupo S
// Integrantes:  Aguilar Priscila Magali, Aguilar Yamila Maillen, Blanc Eugenia, Cartier Lisette, Gainza Marcos Gabriel, Unrein Yanina Soledad
// ===============================

//1. Configuración inicial
const productos = [
    {id: 1, nombre: "Chipa", precio: 1500, stock: 10},
    {id: 2, nombre: "Empanada", precio: 2000, stock: 5},
    {id: 3, nombre: "Tarta", precio: 2500, stock: 8},
    {id: 4, nombre: "Pizza", precio: 3000, stock: 12},
    {id: 5, nombre: "Pastel", precio: 1800, stock: 6}
]

//2. Operaciones basicas y acceso

console.log("Operaciones Básicas y Acceso:");

console.log(productos.length);
console.log(productos[1].nombre);
console.log(productos[3].nombre);
console.log(); //salto de linea

//3. Recorrido del Array
console.log("Recorrido del array con for y forEach.");
console.log()

for (let p of productos){
 console.log(`nombre: ${p.nombre} - precio: ${p.precio}`)
};

console.log();

productos.forEach(p=> {console.log (`nombre: ${p.nombre}, precio: ${p.precio}`)});

console.log();


// 4. Manipulación de Arrays
console.log("Manipulacion de arrays.");
console.log()

//4.1 Agregar dos elementos al final del array productos utilizando push().

productos.push ({id:6, nombre:"Hamburguesa", precio: 4500, stock: 12});

productos.push ({id:7, nombre:"Sopa paraguaya", precio: 5000, stock: 7});
console.log("Productos agregados: ", productos);

console.log()

//4.2 Eliminar el ultimo elemento del array productos utilizando pop().

productos.pop();
console.log("Eliminacion del ultimo producto: ", productos);

// 4.3 Agregar un nuevo elemento al inicio del array productos utilizando unshift().
productos.unshift({ id: 8, nombre: "Pollo Frito", precio: 7250, stock: 6 });
console.log("\nAgregando elemento con unshift:", productos);

// 4.4 Elimina el primer elemento del array productos utilizando shift().
productos.shift();
console.log("\nEliminando elemento con shift:", productos);

// 4.5 crear productosConStock usando filter()
const productosConStock = productos.filter(producto => producto.stock > 0);
console.log("Productos con stock mayor a 0:", productosConStock);
console.log();

// 4.6 crear nombresProductos usando map()
const nombresProductos = productos.map(producto => producto.nombre);
console.log("Nombres de todos los productos:", nombresProductos);
console.log();

// 4.7 Buscar producto con id específico
let idEspecifico = 2;
let productoId = productos.find(p => p.id === idEspecifico);
if (productoId) {
  console.log(`\nProducto con ID ${idEspecifico}:`, productoId);
} else {
  console.log(`\nProducto con ID ${idEspecifico} no encontrado.`);
}

// 4.8 Ordenar productos por precio (descendente)
const productosOrdenados = [...productos].sort((a, b) => b.precio - a.precio);
console.log("\nProductos ordenados por precio (decreciente):", productosOrdenados);
