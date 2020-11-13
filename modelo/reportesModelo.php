<?php
  require_once "conexion.php";

  /**
   * 
   */
  class reportesModelo {  
  static public function mdlMostrarTemp($tabla, $item, $valor){
      if ($item != null) {

        $stmt = Conexion::conectar()->prepare("SELECT * FROM $tabla WHERE $item = :$item");
        $stmt -> bindparam(":".$item, $valor, PDO::PARAM_STR);
        $stmt -> execute();

           return $stmt -> fetch();

              $stmt -> close();
            $stmt = null;

      }else{

        $stmt = Conexion::conectar()->prepare("SELECT * FROM $tabla");

                $stmt -> execute();

                return $stmt -> fetchAll();

                $stmt -> close();

            $stmt = null;

      }
      
        }
        
    static public function mdlHistoricoTemperatura($tabla){
            $stmt = Conexion::conectar()->prepare("SELECT * FROM $tabla");

            $stmt -> execute();

            return $stmt -> fetchAll();

            $stmt -> close();

            $stmt = null;

        }
    }

