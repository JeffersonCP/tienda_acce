<?php include_once 'Views/template-principal/header.php';?>

    <!-- Start Content -->
    <div class="container py-5">
        <div class="row">
            <div class="col-md-8">
                <div class="card shadow-lg">
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered table-striped teble-hover align-middle" id="tableListaProductos">
                                <thead >
                                    <tr>
                                        <th>#</th>
                                        <th>Producto</th>
                                        <th>Precio</th>
                                        <th>Cantidad</th>
                                        <th>SubTotal</th>                                        
                                    </tr>
                                </thead>
                        
                                <tbody>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="card-footer text-end">
                        <h3 id="totalProducto"> </h3>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card shadow-lg">
                    <div class="card-body text-center">
                        <img class="img-thumbnail rounded-circle" src="<?php echo BASE_URL .'assets/img/logo.png' ;?>" alt="" width="150">                       
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- End Content -->

<?php include_once 'Views/template-principal/footer.php';?>

<script src= "<?php echo BASE_URL .'assets/js/clientes.js'; ?>"></script>
</body>
    

</html>