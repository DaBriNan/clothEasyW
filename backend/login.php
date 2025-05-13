<?php
if(isset($_POST["inicioSesion"])){

    $usr = $_POST["usuario"];
    $pwd = $_POST["contra"];

    require_once 'conexion.php';
    require_once 'funciones.php';

//  $array = array($usr, $pwd);
//     if(isEmptyInput($array)===false){
//         header("location: ../../src/login/login.html?error=emptyinput");
//         exit();
//     }

    $uidExists = uidExists($conexion, $usr, $usr );

    if($uidExists === false){
        header("location: ../../src/login/login.html?error=wronglogin");
         exit();
    }

    $pwdHasehed = $uidExists["Usu_Contra"];
    $checkPwd = password_verify($pwd, $pwdHasehed);

    if($checkPwd === false){
        header("location: ../../src/login/login.html?error=wronglogin");exit();
    }

    session_start();
    $_SESSION["Id"] =  $uidExists["Usu_Id"];
    $_SESSION["Nom"] =  $uidExists["Usu_Nombre"];
    $_SESSION["Cap"] =  $uidExists["Cap_Id"];
    header("location: index.html");
    exit();

}
