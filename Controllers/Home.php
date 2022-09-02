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
        $this->views->getView('home', "index", $data);
    }   
}