<?php 
declare(strict_types = 1);
include 'includes/header.php';

// Metodos estaticos
class Producto {

    public static $imagen = "Imagen.jpg";

    public function __construct(protected string $nombre, protected int $precio, protected bool $disponible)
    {
    }

    public static function obtenerImagenProducto(){
        return self::$imagen;
    }

    public static function obtenerProducto(){
        echo "Obteniendo datos del producto...";
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

echo Producto::obtenerProducto();

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