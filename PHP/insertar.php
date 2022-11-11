<?php



require_once('conexion.php');

$nombre=$_POST['nombrephp'];
print($nombre);
print('<br>');
$apellidos=$_POST['apellidophp'];
print($apellidos);
print('<br>');
$correo=$_POST['correophp'];
print($correo);
print('<br>');
$id=$_POST['identificacionphp'];
print($id);
print('<br>');

$sql=("INSERT INTO `estudiante3` (`nombrephp`, `apellidophp`, `correophp`, `identificacionphp`)
 VALUES ('$nombre', '$apellidos', '$correo', '$id')");

if (mysqli_query($conn, $sql)) {
    echo "Exito en la insercion";
    header("Location: ../index.html", TRUE, 301);
    exit();
    mysqli_close($conn);
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}










?>