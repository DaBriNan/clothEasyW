
<?php



// function uidExists($conexion, $usr){
//     //prepared statements
//     $sql = "SELECT * FROM Usuarios WHERE correo = ?;";
//     $stmt = mysqli_stmt_init($conexion);
//     if(!mysqli_stmt_prepare($stmt, $sql)){
//         echo "entra primer if";
//         header("location: ../../aqui.php?error=stmtFailed");
//         exit();
//     }

//     #ss = 2 strings
//     mysqli_stmt_bind_param($stmt, "s", $usr);

//     #execute
//     mysqli_stmt_execute($stmt);

//     #grab data
//     $resultData = mysqli_stmt_get_result($stmt);

//     if($row = mysqli_fetch_assoc($resultData)){
//         //hay algo
//         echo "segundo if que debe regresar añlgo";
//         echo $row;
//         return $row;
//     }

//     return false;

//     //Closing the statement
//     mysqli_stmt_close($stmt);
//     //Closing the connection
//     mysqli_close($conexion);
// }
function uidExists($conexion, $usr) {
    $sql = "SELECT * FROM usuarios WHERE correo = ?"; // Solo busca por correo
    $stmt = mysqli_stmt_init($conexion);
    if(!mysqli_stmt_prepare($stmt, $sql)) {
        //header("location: ../../error.php?error=stmtFailed");
        exit();
    }
    mysqli_stmt_bind_param($stmt, "s", $usr);
    mysqli_stmt_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);
    return mysqli_fetch_assoc($result); // Devuelve el array o NULL si no existe
}


function isEmptyInput(&$array){

    foreach($array as $v){
        if(empty($v)) return true;
    }
    return false;
}

//////////adaptarlo para que haga un insert en ventas
function crearProducto($conexion, $producto, $ruta, $descripcion, $precio, $talla,$categoria) {
    $sql = "INSERT INTO catalogo (producto, ruta, descripcion, precio, talla_id,categoria_id) 
            VALUES (?, ?, ?, ?, ?, ?,?);";
    $stmt = mysqli_stmt_init($conexion);
    if(!mysqli_stmt_prepare($stmt, $sql)){
        return -1;
    }

    mysqli_stmt_bind_param($stmt, "sssss", $producto, $ruta, $descripcion, $precio, $talla, $categoria);

    mysqli_stmt_execute($stmt);

    mysqli_stmt_close($stmt);

    return mysqli_insert_id($conexion);
}
