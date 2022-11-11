<?php
$servername = "localhost";
$database = "dbdiez";
$username = "root";
$password = "";

$conn=mysqli_connect($servername,$username,$password,$database);

if(!$conn) {
    die("connection failed :" . mysqli_connect_error());
}

else{
    //print "<p>connection sucesful</p>\n";
    //header("location: ../index.html", TRUE, 301);
}
?>