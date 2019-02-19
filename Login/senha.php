<?php 
require("config.php");
$conex = new PDO("mysql:host=$servidor;dbname=$basedados",
$usuario,
$senha);
$email = $_GET['e'];
$senha = $_GET['s'];
$login = $conex->prepare("SELECT * FROM jogador where email ='".$email."';");
$login->execute();
while($linha = $login->fetch(PDO::FETCH_ASSOC)){
	if($linha['senha'] == $senha){
		echo "true";
	}else{
		echo "false";
}
}
?>