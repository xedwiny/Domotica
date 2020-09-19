
  <div class="content-wrapper">

    <section class="content-header">

      <div class="container-fluid">

        <div class="row mb-2">

          <div class="col-sm-6">
            <h1>Administrar Categorias</h1>
          </div>

          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">

              <li class="breadcrumb-item"><a href="inicio">Inicio</a></li>

              <li class="breadcrumb-item active">Administrar Categorias</li>

            </ol>

          </div>

        </div>

      </div>

    </section>

    <!-- Main content -->
    <section class="content">

      <!-- Default box -->
      <div class="card">

        <div class="card-header">

          <button class="btn btn-primary" data-toggle="modal" data-target="#modalAgregarCategoria">
            
            Agregar Categoria

          </button>
          
        </div>

        <div class="card-body table-responsive">

          <table class="table table-bordered table-striped tabla">
            
            <thead class="thead-dark">
              
              <tr>

                <th>Categoria</th>
                <th>Acciones</th>

              </tr>

            </thead>

            <tbody>
              
              <tr>

                <td>Equipos Electromecánicos</td>

                <td>

                  <div class="btn-group">
                    
                    <button class="btn btn-warning"><i class="fas fa-pencil-alt"></i></button>

                    <button class="btn btn-danger"><i class="fa fa-times"></i></button>

                  </div>

                </td>

              </tr>

              <tr>

                <td>Equipos Electromecánicos</td>

                <td>

                  <div class="btn-group">
                    
                    <button class="btn btn-warning"><i class="fas fa-pencil-alt"></i></button>

                    <button class="btn btn-danger"><i class="fa fa-times"></i></button>

                  </div>

                </td>

              </tr>

              <tr>

                <td>Equipos Electromecánicos</td>

                <td>

                  <div class="btn-group">
                    
                    <button class="btn btn-warning"><i class="fas fa-pencil-alt"></i></button>

                    <button class="btn btn-danger"><i class="fa fa-times"></i></button>

                  </div>

                </td>

              </tr>

            </tbody>

          </table>

        </div>
        <!-- /.card-body -->
  
      </div>
      <!-- /.card -->

    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->

  <!--================================
    MODAL AGREGAR CATEGORIA
  =================================-->

      <div class="modal fade" id="modalAgregarCategoria">

        <div class="modal-dialog">

          <div class="modal-content">

            <form role="form" method="post">

              <!--================================
                  CABEZA DEL MODAL
                =================================-->

              <div class="modal-header"  style="background: #007bff; color: white">

                <h4 class="modal-title">Agregar Categoria</h4>

                <button type="button" class="close" data-dismiss="modal" aria-label="Close">

                  <span aria-hidden="true">&times;</span>

                </button>

              </div>

               <!--================================
                  CUERPO DEL MODAL
                =================================-->

              <div class="modal-body">

                <div class="box-body">

                  <!-- ENTREDA PARA EL NOMBRE -->

                  <div class="form-group">
                  
                    <div class="input-group mb-3">

                      <div class="input-group-prepend">

                        <span class="input-group-text"><i class="fa fa-th"></i></span>

                      </div>

                      <input type="text" class="form-control input-lg" placeholder="Ingresar categoría" name="nuevaCategoria" required>

                    </div>

                  </div>

                </div>

              </div>

               <!--================================
                  FOOTER DEL MODAL
                =================================-->

              <div class="modal-footer justify-content-between">

                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>

                <button type="submit" class="btn btn-primary">Guardar cambios</button>

              </div>

            </form>

          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
      </div>
      <!-- /.modal -->
