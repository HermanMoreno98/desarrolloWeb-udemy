// IF
const puntaje = "1000";

if (puntaje === 1000) {
  console.log("Es igual");
} else {
    console.log("No es igual");
}

const efectivo = 100;
const carrito = 800;

if(efectivo > carrito){
    console.log("Si puede pagar");
} else {
    console.log("Fondos insuficientes");
}


const rol = 'Admin';

if(rol === 'Admin') {
    console.log("Acceso a todo el sistema");
} else if (rol === 'Editor') {
    console.log("Acceso a sólo edición")
} else {
    console.log("No tiene acceso");
}

// Switch

const metodoPago = 'efectivo';

switch(metodoPago) {
    case 'tarjeta':
        console.log('Pagaste con tarjeta');
        break;
    case 'efectivo':
        console.log('Pagaste con efectivo');
        break;
    case 'cheque':
        console.log('Pagaste con cheque');
    default:
        console.log('Aún no pagaste')
        break;
}