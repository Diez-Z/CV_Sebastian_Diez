<?php
require_once('conexion.php');
$campoamodificar = $_POST['campoamodificar'];
$nuevodato = $_POST['ndato'];
$id = $_POST['id'];
print $campoamodificar;
print "<br>";
print $nuevodato;
print "<br>";
print $id;

$sql=("UPDATE `estudiante3` SET `$campoamodificar` = '$nuevodato'
WHERE `estudiante3`.`identificacionphp` =$id");

if (mysqli_query($conn, $sql)){
    echo "Exito en la insercion";
    header("Location: ../index.html", TRUE, 301);
    exit();
    mysqli_close($conn);
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}


?>