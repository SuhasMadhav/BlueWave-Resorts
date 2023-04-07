<?php

$server_name=”localhost”;

$username=”root”;

$password=””;

$database_name=”Contact″;

$conn=mysqli_connect($server_name,$username,$password,$database_name);
//now check the connection
if(!$conn)
{die("Connection Failed:" . mysqli_connect_error());}
if(isset($_POST['save']))
{
$name = $_POST['name'];
$reason = $_POST['reason'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$message = $_POST['message'];
//For inserting the values to mysql database 
$sql_query = "INSERT INTO Contact (Name,Reason,Phone,Email,Message)
VALUES ('$Name','$Reason','$Phone','$Email','$Message')";
if (mysqli_query($conn, $sql_query))
{
echo "New Details Entry inserted successfully !";
}
}
?>
