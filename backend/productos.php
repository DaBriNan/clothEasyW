<?php
header('Content-Type: application/json');
include 'conexion.php';

$sql = "SELECT 
          c.catalogo_id, 
          c.producto, 
          c.categoria,
          c.ruta AS imagen, 
          c.descripcion,
          c.precio, 
          t.talla 
        FROM Catalogo c
        JOIN Talla t ON c.talla_id = t.talla_id";

$result = $conexion->query($sql);

if ($result->num_rows > 0) {
    $productos = array();
    while ($fila = $result->fetch_assoc()) {
        $productos[] = $fila;
    }
    echo json_encode($productos);
} else {
    echo json_encode(array('error' => 'No hay productos'));
}

$conexion->close();
?>
