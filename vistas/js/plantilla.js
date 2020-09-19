$(".tablas").DataTable({

	"language": {
        	"sProcessing":     "Procesando...",
        	"sLengthMenu":     "Mostrar _MENU_ registros",
        	"sZeroRecords":    "No se encontraron resultados",
        	"sEmptyTable":     "Ningún dato disponible en esta tabla",
        	"sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
        	"sInfoEmpty":      "Mostrando registros del 0 al 0 a un total de 0 ",
        	"sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
        	"sInfoPostFix":    "",
        	"sSearch":         "Buscar:",
        	"sUrl":            "",
        	"sInfoThousands":  ",",
        	"sLoadingRecords": "Cargando...",
        	"oPaginate": {
        		"sFirst":    "Primero",
        		"sLast":     "Último",
        		"sNext":     "Siguiente",
        		"sPrevious": "Anterior"
        	},
        	"oAria": {
        		"sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
        		"sSortDescending": ": Activar para ordenar la columna de manera descendente"
        	}
        }

});

$(".paginate_page").text("Página");
$(".paginate_of").text($(".paginate_of").text().replace("of","de"));

// // TABLA DE LA ENERGIA
// $(".tablaEnergy").DataTable({

//         "language": {
//                 "sProcessing":     "Procesando...",
//                 "sLengthMenu":     "Mostrar _MENU_ registros",
//                 "sZeroRecords":    "No se encontraron resultados",
//                 "sEmptyTable":     "Ningún dato disponible en esta tabla",
//                 "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
//                 "sInfoEmpty":      "Mostrando registros del 0 al 0 a un total de 0 ",
//                 "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
//                 "sInfoPostFix":    "",
//                 "sSearch":         "Buscar:",
//                 "sUrl":            "",
//                 "sInfoThousands":  ",",
//                 "sLoadingRecords": "Cargando...",
//                 "oPaginate": {
//                         "sFirst":    "Primero",
//                         "sLast":     "Último",
//                         "sNext":     "Siguiente",
//                         "sPrevious": "Anterior"
//                 },
//                 "oAria": {
//                         "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
//                         "sSortDescending": ": Activar para ordenar la columna de manera descendente"
//                 }
//         }

// });

// $(".paginate_page").text("Página");
// $(".paginate_of").text($(".paginate_of").text().replace("of","de"));

/*==============================
   Bootstrap Switch
   =============================*/

   $("input[data-bootstrap-switch]").each(function(){
    $(this).bootstrapSwitch('state', $(this).prop('checked'));
  });



/*==============================
        BLOQUEAR/DESBLOQUEAR (PUERTA)
  =============================*/

  var botonPuerta = document.getElementById("btnOnOff");

  var iconoPuerta= document.getElementById("puertaAbierta");

  $(botonPuerta).click(function(){

    var estadoPuerta = $(iconoPuerta).attr("estadoPuerta");

    if (estadoPuerta == 1) {

      Swal.fire({

        icon: "warning",
        title: "¿Esta seguro que desea desbloquear la puerta?",
        text: "¡Si no lo esta puede cancelar la accion!",
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Si, ¡Dejar de bloquearla!'

      }).then((result) => {

        $(iconoPuerta).removeClass('fa fa-door-closed');

        $(iconoPuerta).addClass('fa fa-door-open');

        $(iconoPuerta).attr('estadoPuerta', 0);

      })

    } else {

      $(iconoPuerta).removeClass('fa fa-door-open');

      $(iconoPuerta).addClass('fa fa-door-closed');

      $(iconoPuerta).attr('estadoPuerta', 1);

    }

  })

  /*=====  fin del  bloquear/desbloquear (puerta)  ======*/



/*===============================================
=            sweet alert de eliminar            =
===============================================*/
$(".btnEliminarPuerta").click(function(){
  Swal.fire({
    title: '¿Esta seguro que desea eliminar?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6' ,
    cancelButtonText: 'Cancelar',
    confirmButtonText: 'Eliminar'
  }).then((result) => {
    if (result.value) {
      Swal.fire(
        'Eliminado con exito!',
        )
    }
  })
})

/*=====  fin del  sweet alert de eliminar  ======*/



  /*==================================================
  =            ALARMA.             =
  ==================================================*/
  
  var botonAlarma = document.getElementById("btnMonitorear");

  var iconoAlarma= document.getElementById("puertaAlarma");

  $(botonAlarma).click(function(){

    var estadoAlarma = $(iconoAlarma).attr("estadoAlarma");

    if (estadoAlarma == 1) {

      Swal.fire({

        icon: "warning",
        title: "¿Esta seguro que desea desactivar la alarma?",
        text: "¡Si no lo esta puede cancelar la accion!",
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Si, ¡Desactivarla!'

      }).then((result) => {

        $(iconoAlarma).removeClass('far fa-siren-on');

        $(iconoAlarma).addClass('far fa-siren');

        $(iconoAlarma).attr('estadoAlarma', 0);

      })

    } else {

      $(iconoAlarma).removeClass('far fa-siren');

      $(iconoAlarma).addClass('far fa-siren-on');

      $(iconoAlarma).attr('estadoAlarma', 1);

    }

  })
  
  
  /*=====  fin del Sweet alert de monitorear.  ======*/
  

    /*==================================================
  =            BLOQUEO MODAL EDITAR.             =
  ==================================================*/
  

  var botonBloqueoModal = document.getElementById("btnBloqueoModal");

  var iconoBloqueoModal= document.getElementById("puertaBloqueoModal");

  $(botonBloqueoModal).click(function(){

    var estadoBloqueoModal = $(iconoBloqueoModal).attr("estadoBloqueoModal");

    if (estadoBloqueoModal == 1) {


      $(iconoBloqueoModal).removeClass('far fa-lock-open-alt');

      $(iconoBloqueoModal).addClass('far fa-lock-alt');

      $(iconoBloqueoModal).attr('estadoBloqueoModal', 0);


    } else {

      $(iconoBloqueoModal).removeClass('far fa-lock-alt');

      $(iconoBloqueoModal).addClass('far fa-lock-open-alt');

      $(iconoBloqueoModal).attr('estadoBloqueoModal', 1);

    }

  })

 /*==================================================
  =            ESTADO MODAL EDITAR.             =
  ==================================================*/
  

  var botonEstadoModal = document.getElementById("btnEstadoModal");

  var iconoEstadoModal= document.getElementById("puertaEstadoModal");

  $(botonEstadoModal).click(function(){

    var estadoPuertaModal = $(iconoEstadoModal).attr("estadoPuertaModal");

    if (estadoPuertaModal == 1) {


      $(iconoEstadoModal).removeClass('far fa-door-open');

      $(iconoEstadoModal).addClass('far fa-door-closed');

      $(iconoEstadoModal).attr('estadoPuertaModal', 0);

    } else {

      $(iconoEstadoModal).removeClass('far fa-door-closed');

      $(iconoEstadoModal).addClass('far fa-door-open');

      $(iconoEstadoModal).attr('estadoPuertaModal', 1);

    }

  })

 /*==================================================
  =            ALARMA MODAL EDITAR.             =
  ==================================================*/
  

  var botonAlarmaModal = document.getElementById("btnAlarmaModal");

  var iconoAlarmaModal= document.getElementById("puertaAlarmaModal");

  $(botonAlarmaModal).click(function(){

    var alarmaPuertaModal = $(iconoAlarmaModal).attr("alarmaPuertaModal");

    if (alarmaPuertaModal == 1) {


      $(iconoAlarmaModal).removeClass('far fa-siren');

      $(iconoAlarmaModal).addClass('far fa-siren-on');

      $(iconoAlarmaModal).attr('alarmaPuertaModal', 0);

    } else {

      $(iconoAlarmaModal).removeClass('far fa-siren-on');

      $(iconoAlarmaModal).addClass('far fa-siren');

      $(iconoAlarmaModal).attr('alarmaPuertaModal', 1);

    }
  })
  
    /*==================================================
  =            BLOQUEO MODAL AGREGAR.             =
  ==================================================*/



  var botonAgregarBloqueoModal = document.getElementById("btnAgregarBloqueoModal");

  var iconoAgregarBloqueoModal= document.getElementById("agregarPuertaBloqueoModal");

  $(botonAgregarBloqueoModal).click(function(){

    var agregarEstadoBloqueoModal = $(iconoAgregarBloqueoModal).attr("agregarEstadoBloqueoModal");

    if (agregarEstadoBloqueoModal == 1) {


      $(iconoAgregarBloqueoModal).removeClass('far fa-lock-open-alt');

      $(iconoAgregarBloqueoModal).addClass('far fa-lock-alt');

      $(iconoAgregarBloqueoModal).attr('agregarEstadoBloqueoModal', 0);


    } else {

      $(iconoAgregarBloqueoModal).removeClass('far fa-lock-alt');

      $(iconoAgregarBloqueoModal).addClass('far fa-lock-open-alt');

      $(iconoAgregarBloqueoModal).attr('agregarEstadoBloqueoModal', 1);

    }

  })

/*==================================================
  =            ESTADO MODAL AGREGAR.             =
  ==================================================*/
  

  var botonAgregarEstadoModal = document.getElementById("btnAgregarEstadoModal");

  var iconoAgregarEstadoModal= document.getElementById("agregarPuertaEstadoModal");

  $(botonAgregarEstadoModal).click(function(){

    var agregarEstadoPuertaModal = $(iconoAgregarEstadoModal).attr("agregarEstadoPuertaModal");

    if (agregarEstadoPuertaModal == 1) {


      $(iconoAgregarEstadoModal).removeClass('far fa-door-open');

      $(iconoAgregarEstadoModal).addClass('far fa-door-closed');

      $(iconoAgregarEstadoModal).attr('agregarEstadoPuertaModal', 0);

    } else {

      $(iconoAgregarEstadoModal).removeClass('far fa-door-closed');

      $(iconoAgregarEstadoModal).addClass('far fa-door-open');

      $(iconoAgregarEstadoModal).attr('agregarEstadoPuertaModal', 1);

    }

  })

    /*==================================================
  =            ALARMA MODAL AGREGAR.             =
  ==================================================*/



  var botonAgregarAlarmaModal = document.getElementById("btnAgregarAlarmaModal");

  var iconoAgregarAlarmaModal= document.getElementById("agregarPuertaAlarmaModal");

  $(botonAgregarAlarmaModal).click(function(){

    var agregarAlarmaPuertaModal = $(iconoAgregarAlarmaModal).attr("agregarAlarmaPuertaModal");

    if (agregarAlarmaPuertaModal == 1) {


      $(iconoAgregarAlarmaModal).removeClass('far fa-siren');
      
      $(iconoAgregarAlarmaModal).addClass('far fa-siren-on');

      $(iconoAgregarAlarmaModal).attr('agregarAlarmaPuertaModal', 0);


    } else {

      $(iconoAgregarAlarmaModal).removeClass('far fa-siren-on');
      
      $(iconoAgregarAlarmaModal).addClass('far fa-siren');

      $(iconoAgregarAlarmaModal).attr('agregarAlarmaPuertaModal', 1);

    }
    
  })

  /*=============================================
=    Subiendo foto del usuario      =
=============================================*/

$(".nuevaFoto").change(function(){

  var imagen = this.files[0];

  /*=============================================
  Validar Formato Foto
  =============================================*/

  if(imagen["type"] != "image/jpeg" && imagen["type"] != "image/png"){

    $(".nuevaFoto").val("");

    Swal.fire({

      icon: "error",
      title: 'Error al subir la imagen',
      text: 'La imagen debe estar en formato JPG o PNG',
      confirmButtonColor: '#dc3545',
      confirmButtonText: 'Cerrar'

    });

  }else if(imagen["size"] > 2000000){

    $(".nuevaFoto").val("");

    Swal.fire({

      type: 'error',
      background: '#343a40',
      html: '<p class="tituloWhite"> ¡Error al subir la imagen! </p>',
      text: 'La imagen excede el tamaño permitido de 2MB',
      confirmButtonColor: '#dc3545',
      confirmButtonText: 'Ok'

    });

  }else{

    var datosImagen = new FileReader;

    datosImagen.readAsDataURL(imagen);

    $(datosImagen).on("load", function(event){

      var rutaImagen = event.target.result;
      
      $(".previsualizar").attr("src", rutaImagen);
    });
  }
})





