<?php

ini_set('display_errors', 0);
error_reporting(E_ALL);
// Conexión a la base de datos
require_once 'conexion.php';

// Procesar el formulario cuando se envía
if(isset($_POST['func'])) {
    switch($_POST['func']) {
        case 'insertProduct':
            insertProduct($conexion);
            break;
        // Puedes agregar más casos aquí
    }
}
function insertProduct($conexion) {
    // Validar datos recibidos
    $required_fields = ['producto', 'precio', 'talla_id', 'categoria_id', 'description'];
    foreach($required_fields as $field) {
        if(empty($_POST[$field])) {
            echo json_encode(['success' => false, 'message' => 'Todos los campos son requeridos']);
            exit();
        }
    }

    // Procesar imagen
    $ruta_imagen = '';
    if(isset($_FILES['imagen']) ){
        $target_dir = __DIR__ . "/../assets/img/";

        if (!file_exists($target_dir)) {
    mkdir($target_dir, 0777, true);
}


        $file_name = basename($_FILES["imagen"]["name"]);
        $target_file = $target_dir . $file_name;
        $imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

        // Validar que es una imagen
        $check = getimagesize($_FILES["imagen"]["tmp_name"]);
        if($check === false) {
            echo json_encode(['success' => false, 'message' => 'El archivo no es una imagen']);
            exit();
        }

        

        // Mover archivo al directorio
        if(move_uploaded_file($_FILES["imagen"]["tmp_name"], $target_file)) {
                $ruta_imagen = "img/" . $file_name; // Esto es lo que se guarda en la base de datos
        } else {
            echo json_encode(['success' => false, 'message' => 'Error al subir la imagen']);
            exit();
        }
    }

    // Preparar consulta SQL
    $sql = "INSERT INTO catalogo (producto, ruta, description, precio, talla_id, categoria_id) 
            VALUES (?, ?, ?, ?, ?, ?)";
    $stmt = $conexion->prepare($sql);
    
    // Vincular parámetros
    $stmt->bind_param("sssdii", 
        $_POST['producto'],
        $ruta_imagen,
        $_POST['description'],
        $_POST['precio'],
        $_POST['talla_id'],
        $_POST['categoria_id']
    );

    // Ejecutar consulta
    if($stmt->execute()) {
        echo json_encode(['success' => true, 'message' => 'Producto insertado correctamente']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Error al insertar producto: ' . $conexion->error]);
    }

    $stmt->close();
}

$conexion->close();
