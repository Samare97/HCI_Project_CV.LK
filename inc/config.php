<?php 
	$server ="localhost:3306";
	$user_name = "root";
	$password = "";
	$database ="";


	$conn = new mysqli($server,$user_name,$password,$database);

	if($conn -> connect_error)
	{

		die("connection Faild : " .$conn -> connect_error);


	}	

	else
	{
		//echo  '<p style="color:red;">'. ("connected successfully !!") .'</p>';

	}



?>