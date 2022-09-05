<?php
class Home extends Controller
{
    public function __construct() {
        parent::__construct();
        session_start();
    }
    public function index()
    {
        $data['title'] = 'Pagina Principal';
        $data['categoria'] = $this->model->getCategorias();
        $data['NuevosProductos'] = $this->model->getNuevosProductos();
        $this->views->getView('home', "index", $data);
    }   
}