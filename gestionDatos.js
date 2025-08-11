// ===============================
// Trabajo Práctico Arrays - Programación III
// Grupo Nº: Grupo S
// Integrantes: Priscila Magali Aguilar, Yamila Maillen Aguilar, Eugenia Blanc, Lisette Cartier, Marcos Gabriel Gainza, Yanina Unrein
// ===============================

//1. Configuración inicial

const productos = [
    {id: 1, nombre: "Chipa", precio: 1500, stock: 10},
    {id: 2, nombre: "Empanada", precio: 2000, stock: 5},
    {id: 3, nombre: "Tarta", precio: 2500, stock: 8},
    {id: 4, nombre: "Pizza", precio: 3000, stock: 12},
    {id: 5, nombre: "Pastel", precio: 1800, stock: 6}
]

//2. Operaciones Básicas y Acceso

console.log("Operaciones Básicas y Acceso:");

console.log(productos.length);
console.log(productos[1].nombre);
console.log(productos[3].nombre);
console.log(); //salto de línea



// 4. Manipulación de Arrays


// 4.7 Buscar producto con id específico
let idEspecifico = 2;
let productoId = productos.find(p => p.id === idEspecifico);
if (productoId) {
  console.log(`\nProducto con ID ${idEspecifico}:`, productoId);
} else {
  console.log(`\nProducto con ID ${idEspecifico} no encontrado.`);
}

