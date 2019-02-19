<html lang="pt-br">
<meta charset="utf-8">
<head>
<link rel="stylesheet" href="style.css" type="text/css"/>
<title>The Game</title>
<style>
body{
background-color:black;
}
</style>
<script type="text/javascript" src="java.js"></script>
<?php 
require("config.php");
$conex = $conex = new PDO("mysql:host=$servidor;dbname=$basedados",
$usuario,
$senha);
?>
</head>
<body>
<audio id="fasmus" controls preload="none" style="display:none">
<source src="som/fase.mp3" type="audio/mp3">
</audio>
<audio id="enimus" controls preload="none" style="display:none">
<source src="som/enigma.mp3" type="audio/mp3">
</audio>
<center>
<div id="everything">
<div id="caixadetexto"></div>
<div id="jogomesmo">
<div id="nick"></div>
<div id="jogo">
<div id="vida">
<span id="barradevida">
<div id="nao"><img src='cenario/vazio.png' id="V10"></div>
<div id="nao"><img src='cenario/vazio.png' id="V9"></div>
<div id="nao"><img src='cenario/vazio.png' id="V8"></div>
<div id="nao"><img src='cenario/vazio.png' id="V7"></div>
<div id="nao"><img src='cenario/vazio.png' id="V6"></div>
<div id="nao"><img src='cenario/vazio.png' id="V5"></div>
<div id="nao"><img src='cenario/vazio.png' id="V4"></div>
<div id="nao"><img src='cenario/vazio.png' id="V3"></div>
<div id="nao"><img src='cenario/vazio.png' id="V2"></div>
<div id="nao"><span id="dice"><img src='cenario/vazio.png' id="V1"></span></div>
</span>
</div>
<div id="maze"> 
<center><font size="100px" color="red">The Game</font><br/>
<input type="button" value="Iniciar" onclick="iniciar()"><br/><br/>
<span id="log">
<input type="button" value="Logar" onclick="logar()"><br/>
</span><br/>
<font style="color:white;"><span id="men"></span></font>
</div>
<div id="vida">
<span id="item10"><div id="nao"><img src="cenario/vazio.png" id="imginv10"></div></span>
<span id="item9"><div id="nao"><img src="cenario/vazio.png" id="imginv9"></div></span>
<span id="item8"><div id="nao"><img src="cenario/vazio.png" id="imginv8"></div></span>
<span id="item7"><div id="nao"><img src="cenario/vazio.png" id="imginv7"></div></span>
<span id="item6"><div id="nao"><img src="cenario/vazio.png" id="imginv6"></div></span>
<span id="item5"><div id="nao"><img src="cenario/vazio.png" id="imginv5"></div></span>
<span id="item4"><div id="nao"><img src="cenario/vazio.png" id="imginv4"></div></span>
<span id="item3"><div id="nao"><img src="cenario/vazio.png" id="imginv3"></div></span>
<span id="item2"><div id="nao"><img src="cenario/vazio.png" id="imginv2"></div></span>
<span id="item1"><div id="nao"><img src="cenario/vazio.png" id="imginv1"></div></span>
</div>
</div>
<div id="cont"></div>
</div>
<div id="textodecaixa"></div>
</div>
</center>
</body>
</html>
