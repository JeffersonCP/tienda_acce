<?php
class PrincipalModel extends Query{
 
    public function __construct()
    {
        parent::__construct();
    }
    public function getCategorias()
    {
        $sql ="SELECT * FROM categorias";
        return $this->selectAll($sql);
    }
}
 
?>