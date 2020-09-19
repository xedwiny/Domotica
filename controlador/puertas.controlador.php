
<?php

	class PuertasControlador{

		/* ================================================================
        						Agregar Puerta
        ================================================================= */
		static public function ctrCrearPuerta(){
				
				if (isset($_POST["nuevoNombre"])) {


					if (preg_match('/^[a-zA-Z0-9ñÑáéióúÁÉÍÓÚ ]+$/', $_POST["nuevoNombre"])
                    	) {



							/*=============================================
							=      VALIDAR TOGGLE AGREGAR BLOQUEO        agregarCaracteristicas=
							=============================================*/
							
							if($_POST["agregarBloqueo"] == "on"){

								$_POST["agregarBloqueo"]=1;

							}else{
								$_POST["agregarBloqueo"]=3;
							}

							/*=============================================
							=      VALIDAR TOGGLE AGREGAR ALARMA        =
							=============================================*/
							
							if($_POST["agregarAlarma"] == "on"){

								$_POST["agregarAlarma"]=1;

							}else{
								$_POST["agregarAlarma"]=3;
							}

							//echo '<script> console.log("'.$_POST["agregarAlarma"].'") </script>';

						
							

							/*=============================================
							=           GUARDAR INFORMACION       =
							=============================================*/
							$tabla = "puertas";

							$datos = array("nombre" => $_POST["nuevoNombre"],
										"sensorBloqueo" => $_POST["agregarBloqueo"],
										"alarma" => $_POST["agregarAlarma"],
										"caracteristicas" => $_POST["agregarCaracteristicas"]);


							$respuesta = puertaModelo::mdlAgregarPuerta($tabla, $datos);

							echo $respuesta;

							if($respuesta == "ok"){

	                        	$color="tituloWhite";

		                        echo "<script>
		                                    Swal.fire({
												
		                                        type: 'success',
		                                        html: '<h3 class=".$color.">¡La puerta se ingreso correctamente!</h3>',
		                                        background: '#343a40',
		                                        showConfirmButton: true,
		                                        confirmButtonColor: '#28a745',
		                                        confirmButtonText: 'Ok',
		                                        closeOnConfirm: false
		                                        

		                                        }).then((result)=>{

		                                        if(result.value){

		                                           window.location = 'puerta';
		                                        }      
		                                    });

		                              </script>";

		                    }

	                    }else{
	                    	$color="tituloWhite";

	                        echo "<script>

		                            Swal.fire({

		                                type: 'error',
		                                html: '<h3 class=".$color.">¡El nombre es invalido!</h3>',
		                                background: '#343a40',
		                                showConfirmButton: true,
		                                confirmButtonColor: '#dc3545',
		                                confirmButtonText: 'Ok',
		                                closeOnConfirm: false 

		                                }).then((result)=>{

		                                if(result.value){

		                                    window.location = 'puerta';

		                                }  

		                            });

		                        </script>";
	                    }

				}

		}

		/* ================================================================
        		MOSTRAR PUERTAS
        ================================================================= */
		static public function ctrMostrarPuerta($item,$valor){

			$tabla = "puertas";

			$respuesta = puertaModelo::mdlMostrarPuerta($tabla, $item, $valor);

			return $respuesta;
		
		}


	}

