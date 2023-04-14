<?php
	//Sintaxis de conexión de la base de datos de muestra para PHP y MySQL.
	
	//Conectar a la base de datos
	//hola
  $valor = $_REQUEST['id'];

	$hostname="localhost";
	$username="alejandro";
	$password="Pintame"; 
	$dbname="numerologia";
	$usertable="sendero";
	
	$conn=mysqli_connect($hostname,$username, $password, $dbname);
	
	
      if ($conn->connect_error) {
        die("ERROR: No se puede conectar al servidor: " . $conn->connect_error);
        exit;
      } 
          $query = "SELECT * FROM sendero where id = ".$valor;

      if ($execquery = $conn->query($query)) {
        $result = $execquery->fetch_all(MYSQLI_ASSOC);
        $resultjson= json_encode($result[0]);
         echo ($resultjson); 
      }
?>