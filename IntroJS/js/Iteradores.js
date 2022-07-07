// For loop
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 == 0) {
//     console.log(`El número ${i} es par`);
//   } else {
//     console.log(`El número ${i} es impar`);
//   }
// }

const carrito = [
  { nombre: "Monitor 20 pulgadas", precio: 500 },
  { nombre: "Television 50 pulgadas", precio: 300 },
  { nombre: "Television 80 pulgadas", precio: 400 },
  { nombre: "Television 20 pulgadas", precio: 30 },
  { nombre: "Monitor", precio: 300 },
];

for(let i = 0; i < carrito.length; i++){
    console.log(carrito[i].nombre);
}

// While loop
// let j = 0;

// while(j < 20) {
//     console.log(j);
//     j++;
// }


// Do While loop
// let k = 100;

// do {
//     console.log(k)
//     k++;
// } while (j < 10);


// Foreach: para iterar y mostrar resultados en consola
carrito.forEach(producto => console.log(producto.nombre));

// Map: para crear un nuevo arreglo y luego imprimirlos en consola
const arreglo2 = carrito.map(producto => `${producto.nombre} - ${producto.precio}`);

console.log(arreglo2);