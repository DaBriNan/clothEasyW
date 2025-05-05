<?php
// archivo: obtener_productos.php
include 'conexion.php';

$sql = "SELECT * FROM productos";
$resultado = $conn->query($sql);

$productos = array();

while ($fila = $resultado->fetch_assoc()) {
    $productos[] = $fila;
}

echo json_encode($productos); // lo puedes leer con JS
?>
