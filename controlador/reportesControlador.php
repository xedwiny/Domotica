<?php
 // MOSTRAR GRAFICO DE TEMPERATURA 
    static public function ctrHistoricoTemperatura($tabla){         

        $respuesta = reporteModelo::mdlHistoricoTemperatura($tabla);

        return $respuesta;
    }
