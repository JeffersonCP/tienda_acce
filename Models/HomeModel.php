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
}
 
?>