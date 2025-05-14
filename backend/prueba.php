<?php


if(isset($_GET['myInfo']) && $_GET['myInfo'] !=''){
    $result = $_GET['myInfo']();
    echo json_encode($result);
}


function getChapters(){
    require_once 'conexion.php';
    $sql = "SELECT * FROM Catalogo"; 
    $result = mysqli_query($conexion, $sql);
    $catalogo = array();
    if(mysqli_num_rows($result) > 0){
        while($row = mysqli_fetch_assoc($result)){
            
            $catalogo[] = array(
                'idCatalogo'         =>  (string)$row['catalogo_id'],
                'nombreProducto'      =>  (string)$row['producto'],
                'rutaImagen'    =>  (string)$row['ruta'],
                'descripcionDeProducto'      =>  (string)$row['descripcion'],
                'precioP'             =>  (string)$row['precio'],
                'tallaP'             =>  (string)$row['talla_id'],
                'categoriaP'             =>  (string)$row['categoria_id'],
            );
        }
    }
    
    return $catalogo;
}