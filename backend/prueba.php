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
                'tallaP'             =>  mostrar_talla((int)$row['talla_id']),
                'categoriaP'             =>  (string)$row['categoria_id'],
            );
        }
    }
    
    return $catalogo;
}

function mostrar_talla($talla_id){
   
    switch ($talla_id) {
    case '1':
        return "S";
        break;
    case '2':
         return "M";
        break;
    case '3':
        return "L";
        break;
    case '4':
         return "XL";
        break;
    case '5':
        return "XS";
        break;
    case '6':
         return "22 MX";
        break;
    case '7':
        return "23 MX";
        break;
    case '8':
         return "24 MX";
        break;
    }

}