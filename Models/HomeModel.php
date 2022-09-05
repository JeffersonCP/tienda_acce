<?php
class HomeModel extends Query{
 
    public function __construct()
    {
        parent::__construct();
    }
    public function getCategorias()
    {
        $sql ="SELECT * FROM categoria";
        return $this->selectAll($sql);
    }
    public function getNuevosProductos()
    {
        $sql ="SELECT * FROM productos ORDER BY id DESC LIMIT 9 ";
        return $this->selectAll($sql);
    }
}
 
?>