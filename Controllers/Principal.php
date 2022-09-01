<?php
class Principal extends Controller
{
    public function __construct() {
        parent::__construct();
        session_start();
    }
    public function index()
    {
       
    }
    //vista about
    public function about()
    {
        $data['title'] = 'SERVICIOS';
        $this-> views-> getView('principal', "about", $data);
    }
    //vista shop
    public function shop()
    {
        $data['title'] = 'PRODUCTOS';
        $this-> views-> getView('principal', "shop", $data);
    }
    //vista about
    public function detail($id_producto)
    {
        $data['title'] = '----------';
        $this->views-> getView('principal', "detail", $data);
    }
    //vista contacto
    public function contactos()
    {
        $data['title'] = 'CONTACTOS';
        $this->views-> getView('principal', "contact", $data);
    }
}