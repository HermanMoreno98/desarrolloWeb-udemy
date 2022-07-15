<?php include 'includes/header.php';

// *La clase abstracta sirve para no ser instanciada, por ejem: La clase transporte
abstract class Transporte {
    public function __construct(protected int $ruedas, protected int $capacidad)
    {
        
    }

    public function getInfo() : string {
        return "El transporte tiene " . $this->ruedas . " y una capacidad de " . $this->capacidad . " personas.";
    }
}

class Bicicleta extends Transporte {
    public function getInfo() : string {
        return "El transporte tiene " . $this->ruedas . " y una capacidad de " . $this->capacidad . " personas y no gasta gasolina";
    }
}

class Automovil extends Transporte {
    public function __construct(protected int $ruedas, protected int $capacidad, protected string $transmision)
    {
        
    }
}

$bicicleta = new Bicicleta(2, 1);
$auto = new Automovil(4, 4, 'manual');
echo $bicicleta->getInfo();
echo("<hr>");
echo $auto->getInfo();

include 'includes/footer.php';