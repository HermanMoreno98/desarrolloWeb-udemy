<?php 
declare(strict_types = 1);
include 'includes/header.php';

// Encapsulacion
class Producto {

    // Public: se puede acceder y modificar en cualquier lugar (clase y objeto)
    // Protected: se puede acceder / modificar unicamente en la clase
    // Private: solo miembros de la misma clase pueden acceder a el

    public function __construct(protected string $nombre, protected int $precio, protected bool $disponible)
    {
    }

    public function mostrarProducto() : void{
        echo "El producto es: " . $this->nombre . " y su precio es de: " . $this->precio;
    }

    public function getNombre() : string{
        return $this->nombre;
    }

    public function setNombre(string $nombre){
        $this->nombre = $nombre;
    }
}

$producto = new Producto("Tablet", 200, true);
$producto->mostrarProducto();
echo $producto->getNombre();
$producto->setNombre('Nuevo nombre');

echo "<pre>";
var_dump($producto);
echo "</pre>";

$producto2 = new Producto("Monitor curvo", 400, true);
$producto2->mostrarProducto();

echo "<pre>";
var_dump($producto2);
echo "</pre>";

include 'includes/footer.php';