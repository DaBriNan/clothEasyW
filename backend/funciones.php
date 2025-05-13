
<?php


function uidExists($conexion, $username, $email){
    //prepared statements
    $sql = "SELECT * FROM Usuarios WHERE correo = ? OR contra = ?;";
    $stmt = mysqli_stmt_init($conexion);
    if(!mysqli_stmt_prepare($stmt, $sql)){
        header("location: ../../aqui.php?error=stmtFailed");
        exit();
    }

    #ss = 2 strings
    mysqli_stmt_bind_param($stmt, "ss", $username, $email);

    #execute
    mysqli_stmt_execute($stmt);

    #grab data
    $resultData = mysqli_stmt_get_result($stmt);

    if($row = mysqli_fetch_assoc($resultData)){
        //hay algo
        return $row;
    }

    return false;

    //Closing the statement
    mysqli_stmt_close($stmt);
    //Closing the connection
    mysqli_close($conn);
}

//function insertarProducto($conexion,$)