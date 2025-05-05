<?php
$servidor = "localhost";     
$usuario = "root";      
$password = "";    
$basedatos = "cloth";   

// Crear conexión
$conexion = new mysqli($servidor, $usuario, $password, $basedatos);

// Verificar errores
if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

echo "✅ Conexión exitosa a la base de datos.";
// Opcional: Configurar charset (recomendado)
$conexion->set_charset("utf8mb4");
?>