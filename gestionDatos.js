const productos = [
    {id: 1, nombre: "Chipa", precio: 1500, stock: 10},
    {id: 2, nombre: "Empanada", precio: 2000, stock: 5},
    {id: 3, nombre: "Tarta", precio: 2500, stock: 8},
    {id: 4, nombre: "Pizza", precio: 3000, stock: 12},
    {id: 5, nombre: "Pastel", precio: 1800, stock: 6}
]

// Operaciones Básicas y Acceso

console.log("Operaciones Básicas y Acceso:");

console.log(productos.length);
console.log(productos[1].nombre);
console.log(productos[3].nombre);
console.log(); //salto de línea

// 3. Recorrido del array

console.log("Recorrido con for...of:");
for (const producto of productos) {
    console.log(`Nombre: ${producto.nombre}, Precio: ${producto.precio}`);
}

console.log(); 

console.log("Recorrido con forEach:");
productos.forEach(producto => {
    console.log(`Producto: ${producto.nombre}, Precio: ${producto.precio}`);
});