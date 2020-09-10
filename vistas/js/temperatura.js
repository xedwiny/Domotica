/*==============================
   Sweet alert eliminar
=============================*/

$(document).on("click", ".btnEliminar", function(){

    var idCuarto = $(this).attr("idCuarto");

    Swal.fire({

    title: '<span class="tituloWhite"> ¿Estas seguro de eliminarlo? </span>',
    html: '<p class="text-white"> Puedes cancelar la accion si no estas seguro </p>',
    type: 'warning',
    background: '#343a40',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'si, eliminarlo!'

  }).then(function(result){

    if (result.value) {

        window.location = "index.php?vista=temperatura&idCuarto="+idCuarto;
        

      }
  })
})

/*==============================
   Bootstrap Switch
=============================*/

$("input[data-bootstrap-switch]").each(function(){
  $(this).bootstrapSwitch('state', $(this).prop('checked'));
});


