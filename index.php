<?php 

	/*=============================================
	=            CONTROLADORES           =
	=============================================*/	
	require_once "./controlador/plantillaControlador.php";
	require_once "./controlador/inicioControlador.php";
	require_once "./controlador/usuarioControlador.php";
	require_once "./controlador/ModuloReportesControlador.php";



	/*=============================================
	=            MODULOS          =
	=============================================*/
	require_once "./modelo/inicioModelo.php";
	require_once "./modelo/usuarioModelo.php";
	require_once "./modelo/ModuloReportesModelo.php";

	$plantilla = new PlantillaControlador();

	$plantilla -> ctrPlantilla();