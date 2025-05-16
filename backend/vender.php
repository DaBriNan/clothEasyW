<?php
if(isset($_POST["submit"])){
    $producto         = $_POST["producto"];
    $ruta             = $_POST["imagen"];
    $precio           = $_POST["precio"];
    $descripcion      = $_POST["description"];
    $categoria        = $_POST["categoria_id"];
    $talla            = $_POST["talla_id"];

    require_once 'conexion.php';
    require_once 'funciones.php';

    $array = array($conexion, $producto, $ruta, $descripcion, $precio, $talla,$categoria);
    if(isEmptyInput($array)){
        header("location: ../pages/produPrueba.php");
        exit();
    }

    $noti_id = crearProducto($conexion, $producto, $ruta, $descripcion, $precio, $talla,$categoria);

    if($noti_id > 0){
        header("location: ../pages/produPrueba.php");
        exit();
    } else {
        header("location: ../pages/produPrueba.php");
        exit();
    }
}
