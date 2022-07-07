// This

const reservacion = {
    nombre: 'Paul',
    apellido: 'Moreno',
    total: 5000,
    pagado: false,
    informacion: function(){
        console.log(`El cliente ${this.nombre} ${this.apellido} reservó y su cantidad a pagar es de ${this.total}`);
    }
}

console.log(reservacion.informacion());