const numeros = [10, 20, 30, 40, 50];

// console.log(numeros);
// console.table(numeros);

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];
// console.table(meses);

const arreglo = [
  "Hola",
  10,
  true,
  "si",
  null,
  { nombre: "Juan", trabajo: "Programador" },
  2,
];
// console.log(arreglo);

// console.log(numeros[4]);

// Conociendo la extension de un arreglo
// console.log(numeros.length);

// Iterador
numeros.forEach(function (n) {
  console.log(n);
});

// Agregando elementos al final
numeros.push(60, 70);

// Agregando elementos al inicio
numeros.unshift(-10, -20, -30);

// Eliminando el ultimo elemento del arreglo
//meses.pop()

// Eliminando el primer elemento del arreglo
//meses.shift();

//meses.splice(2, 1);

console.log(numeros);
console.log(meses);

// Rest operator o Spread operator

const nuevoArreglo = [...meses, "Junio"];
console.log(nuevoArreglo);

const carrito = [
  {
    nombre: "Monitor 20 pulgadas",
    precio: 500,
  },
  {
    nombre: "Television 50 pulgadas",
    precio: 300,
  },
  {
    nombre: "Television 80 pulgadas",
    precio: 400,
  },
  {
    nombre: "Television 20 pulgadas",
    precio: 30,
  },
  {
    nombre: "Monitor",
    precio: 300,
  },
  {
    nombre: "Mouse",
    precio: 300,
  },
  {
    nombre: "Celular",
    precio: 300,
  },
];

// *Array Methods

// forEach
meses.forEach(function (mes) {
  if (mes == "Marzo") {
    console.log("Marzo si existe");
  }
});

// Includes (Para arreglo plano)
let resultado = meses.includes("Diciembre");
console.log(resultado);

// Some, ideal para arreglo de objetos

resultado = carrito.some(function(producto) {
    return producto.nombre === "Mouse"
})

console.log(resultado);

// Reduce
resultado = carrito.reduce(function(total, producto) {
    return total + producto.precio
}, 0)

console.log(resultado);

// Filter
resultado = carrito.filter(function(producto) {
    return producto.precio > 400
});
resultado = carrito.filter(function(producto) {
    return producto.nombre !== "Celular"
});

console.log(resultado);

