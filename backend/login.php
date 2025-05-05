<?php
include 'conexion.php';
$correo = $_POST['correo'];
$contra = $_POST['contra'];

$sql = "SELECT * FROM Usuarios WHERE correo = '$correo' AND contra = '$contra'";
// ...
echo json_encode(["success" => true, "usuario" => $fila]);
?>