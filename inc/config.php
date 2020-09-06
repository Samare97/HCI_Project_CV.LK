<?php 
	$server ="localhost:3306";
	$user_name = "root";
	$password = "";
	$database ="hci_ui/ux";


	$conn = new mysqli($server,$user_name,$password,$database);

	if($conn -> connect_error)
	{

		die("connection Failed : " .$conn -> connect_error);

	}	

	else
	{
		//echo  '<p style="color:red;">'. ("connected successfully !!") .'</p>';

	}



?>