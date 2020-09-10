<?php 

	/**
	 * 
	 */
	class temperaturaControlador
	{
		
		static public function ctrMostrarTemp($item,$valor){

			$tabla = "temp_habitaciones";

			$respuesta = temperaturaModelo::mdlMostrarTemp($tabla, $item, $valor);

			return $respuesta;
		
		}


		static public function ctrCrearCuarto(){
				
			if (isset($_POST["nuevoCuarto"])) {

				if (preg_match('/^[a-zA-Z0-9ñÑáéióúÁÉÍÓÚ ]+$/', $_POST["nuevoCuarto"])) {

                	$tabla = "temp_habitaciones";

                	$datos = array("nombre" => $_POST["nuevoCuarto"],
                					"temp" => $_POST["nuevaTemp"],
                					"hum" => $_POST["nuevaHum"],
                					"tvo" => $_POST["nuevoTvo"]);

                	$respuesta = temperaturaModelo::mdlIngresarCuarto($tabla, $datos);


                    if($respuesta == "ok"){

                    	$color="tituloWhite";

                        echo "<script>
                                    Swal.fire({
										
                                        type: 'success',
                                        html: '<h3 class=".$color.">¡El cuarto se ingreso correctamente!</h3>',
                                        background: '#343a40',
                                        showConfirmButton: true,
                                        confirmButtonColor: '#28a745',
                                        confirmButtonText: 'Ok',
                                        closeOnConfirm: false
                                        

                                        }).then((result)=>{

                                        if(result.value){

                                           window.location = 'temperatura';
                                        }      
                                    });

                              </script>";

	                    }

		            }else{

		            	$color="tituloWhite";

	                        echo "<script>

		                            Swal.fire({

		                                type: 'error',
		                                html: '<h3 class=".$color.">¡El usuario no puede ir vacio o con carecteres especiales!</h3>',
		                                background: '#343a40',
		                                showConfirmButton: true,
		                                confirmButtonColor: '#dc3545',
		                                confirmButtonText: 'Ok',
		                                closeOnConfirm: false 

		                                }).then((result)=>{

		                                if(result.value){

		                                    window.location = 'temperatura';

		                                }  

		                            });

		                        </script>";
	                }

				
			}

		}

		static public function ctrBorrarCuarto(){

			if (isset($_GET["idCuarto"])) {
				
				$tabla = "temp_habitaciones";

				$datos = $_GET["idCuarto"];

				if ($_GET["idCuarto"] != null) {

					$respuesta = temperaturaModelo::mdlBorrarCuarto($tabla, $datos);

					if ($respuesta == "ok") {

					$color="tituloWhite";

						echo "<script>
					            Swal.fire({

					                type: 'success',
					                html: '<h3 class=".$color.">¡El cuarto se a borrado correctamente!</h3>',
					                background: '#343a40',
					                showConfirmButton: true,
					                confirmButtonColor: '#28a745',
					                confirmButtonText: 'Ok',
					                closeOnConfirm: false,
					                customClass: {

										title: 'title-alert'
									},

					                }).then((result)=>{

					                    if(result.value){

					                        window.location = 'temperatura';
					                    }      
					                });

					            </script>";

						
					}

					
				}


			}

		}


	}