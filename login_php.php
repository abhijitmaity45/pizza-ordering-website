<?php
$con = mysqli_connect("localhost","root", "", "pizza_app", "3306");

if(mysqli_connect_error()){
	echo "Cannot Connect to database";
	exit();
}
?>