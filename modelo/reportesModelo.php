<?php
class reportesModelo {
    private $conexion;

    function __construct()
    {

        require_once ("conexion.php");
        $this->conexion = new conexion();
        $this->conexion->conectar();

    }

    function datosGrafico(){
        $sql = "escriba aqui consulta";
        $arreglo = array();
        if ($consulta = $this->conexion->query($sql)) {
            # code...
        }

    }
}
