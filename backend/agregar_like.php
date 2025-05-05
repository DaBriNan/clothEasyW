<?php
include 'conexion.php';
$catalogo_id = $_POST['catalogo_id'];
$usu_id = $_POST['usu_id'];

$sql = "INSERT INTO Likes (catalogo_id, usu_id) VALUES ($catalogo_id, $usu_id)";
// ...
echo json_encode(["message" => "Like agregado"]);
?>