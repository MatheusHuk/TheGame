<?php 
require("config.php");
$conex = new PDO("mysql:host=$servidor;dbname=$basedados",
$usuario,
$senha);
$email = $_GET['e'];
$login = $conex->prepare("SELECT * FROM jogador where email ='".$email."';");
$login->execute();
while($linha = $login->fetch(PDO::FETCH_ASSOC)){
	echo $linha['email'] ;
}
?>