async function obtenerEmpleados(){

    const archivo = 'empleados.json';
    // fetch(archivo)
    //     .then(resultado => resultado.json())
    //     .then(datos => {
    //         const {empleados} = datos;

            
    //     })

    const resultado = await fetch(archivo);
    const datos = await resultado.json();
    console.log(datos);

}

obtenerEmpleados();