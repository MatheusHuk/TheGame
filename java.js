var cont = 0;
var vid = 5;
var codigo = 0;
var fasecont = 0;
var numchave = 0;
var PC = 0;
var mus = 0;
var paises = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var inv = ["cenario/vazio.png","cenario/vazio.png","cenario/vazio.png","cenario/vazio.png","cenario/vazio.png","cenario/vazio.png","cenario/vazio.png","cenario/vazio.png","cenario/vazio.png","cenario/vazio.png"]
var conti = [1,0,0,0,0];
var nick = "";
var nulo = "";
var em = "";
var se = "";
var paus = [0,0,0,0,0,0,0,0,0,0,0,0,0];
var copas = [0,0,0,0,0,0,0,0,0,0,0,0,0];
var espadas = [0,0,0,0,0,0,0,0,0,0,0,0,0];
var ouros = [0,0,0,0,0,0,0,0,0,0,0,0,0];
var joker = [0,0];
var chave = [0,0];
var rar = [0,0];
var srcchave = '';
function music(){
var fasmus = document.getElementById("fasmus");
if(mus == 1){
	
}else{
	fasmus.play();
	mus = 1;
}
}
function array(){
	document.getElementById('maze').innerHTML = "<font style='color:white'>"+paises[0];
}
function loadDoc(fase) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    document.getElementById('maze').innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "Fases/demo.php?fase="+fase, true);
  xhttp.send();
  loadCont(fase);
}
function loadCont(fase) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    document.getElementById('cont').innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "Fases/contdemo.php?fase="+fase, true);
  xhttp.send();
}
function iniciar(){
if(codigo == 040900){
lab(0,nulo,nulo);
}else if(codigo == 1000){
mundo(0);
}else{
music();
cont = 0;
fasecont = fasecont + 1;
document.getElementById('maze').innerHTML='<div id="ini" onmouseover="loadDoc('+fasecont+')"></div>'+
'<div id="nao"></div>'+
'<div id="nao"></div>'+
'<div id="nao"></div>'+
'<div id="nao"></div>'+
'<div id="nao"></div>'+
'<div id="nao"></div>'+
'<div id="nao"></div>'+
'<div id="nao"></div>'+
'<div id="nao"></div>'+

'<div id="nao"></div>'+
'<div id="nao"></div>'+
'<div id="nao"></div>'+
'<div id="nao"></div>'+
'<div id="nao"></div>'+
'<div id="nao"></div>'+
'<div id="nao"></div>'+
'<div id="nao"></div>'+
'<div id="nao"></div>'+
'<div id="nao"></div>'+

'<div id="barra">Coloque o mouse no vermelho</div>'+

'<div id="nao"></div>'+
'<div id="nao"></div>'+
'<div id="nao"></div>'+
'<div id="nao"></div>'+
'<div id="nao"></div>'+
'<div id="nao"></div>'+
'<div id="nao"></div>'+
'<div id="nao"></div>'+
'<div id="nao"></div>'+
'<div id="nao"></div>'+

'<div id="nao"></div>'+
'<div id="nao"></div>'+
'<div id="nao"></div>'+
'<div id="nao"></div>'+
'<div id="nao"></div>'+
'<div id="nao"></div>'+
'<div id="nao"></div>'+
'<div id="nao"></div>'+
'<div id="nao"></div>'+
'<div id="nao"></div>'+

'<div id="nao"></div>'+
'<div id="nao"></div>'+
'<div id="nao"></div>'+
'<div id="nao"></div>'+
'<div id="nao"></div>'+
'<div id="nao"></div>'+
'<div id="nao"></div>'+
'<div id="nao"></div>'+
'<div id="nao"></div>'+
'<div id="nao"></div>'+

'<div id="nao"></div>'+
'<div id="nao"></div>'+
'<div id="nao"></div>'+
'<div id="nao"></div>'+
'<div id="nao"></div>'+
'<div id="nao"></div>'+
'<div id="nao"></div>'+
'<div id="nao"></div>'+
'<div id="nao"></div>'+
'<div id="nao"></div>'+

'<div id="nao"></div>'+
'<div id="nao"></div>'+
'<div id="nao"></div>'+
'<div id="nao"></div>'+
'<div id="nao"></div>'+
'<div id="nao"></div>'+
'<div id="nao"></div>'+
'<div id="nao"></div>'+
'<div id="nao"></div>'+
'<div id="nao"></div>'+

'<div id="nao"></div>'+
'<div id="nao"></div>'+
'<div id="nao"></div>'+
'<div id="nao"></div>'+
'<div id="nao"></div>'+
'<div id="nao"></div>'+
'<div id="nao"></div>'+
'<div id="nao"></div>'+
'<div id="nao"></div>'+
'<div id="nao"></div>'+

'<div id="nao"></div>'+
'<div id="nao"></div>'+
'<div id="nao"></div>'+
'<div id="nao"></div>'+
'<div id="nao"></div>'+
'<div id="nao"></div>'+
'<div id="nao"></div>'+
'<div id="nao"></div>'+
'<div id="nao"></div>'+
'<div id="nao"></div>';
contadorvida();
}
}
function contadorvida(){	
if(vid > 10){
vid = 10;
contadorvida();
}else if(vid == 10){
document.getElementById('V10').src='item/core.png';
document.getElementById('V9').src='item/core.png';
document.getElementById('V8').src='item/core.png';
document.getElementById('V7').src='item/core.png';
document.getElementById('V6').src='item/core.png';
document.getElementById('V5').src='item/core.png';
document.getElementById('V4').src='item/core.png';
document.getElementById('V3').src='item/core.png';
document.getElementById('V2').src='item/core.png';
document.getElementById('V1').src='item/core.png';
}else if(vid == 9){
document.getElementById('V10').src='cenario/vazio.png';
document.getElementById('V9').src='item/core.png';
document.getElementById('V8').src='item/core.png';
document.getElementById('V7').src='item/core.png';
document.getElementById('V6').src='item/core.png';
document.getElementById('V5').src='item/core.png';
document.getElementById('V4').src='item/core.png';
document.getElementById('V3').src='item/core.png';
document.getElementById('V2').src='item/core.png';
document.getElementById('V1').src='item/core.png';
}else if(vid == 8){
document.getElementById('V10').src='cenario/vazio.png';
document.getElementById('V9').src='cenario/vazio.png';
document.getElementById('V8').src='item/core.png';
document.getElementById('V7').src='item/core.png';
document.getElementById('V6').src='item/core.png';
document.getElementById('V5').src='item/core.png';
document.getElementById('V4').src='item/core.png';
document.getElementById('V3').src='item/core.png';
document.getElementById('V2').src='item/core.png';
document.getElementById('V1').src='item/core.png';
}else if(vid == 7){
document.getElementById('V10').src='cenario/vazio.png';
document.getElementById('V9').src='cenario/vazio.png';
document.getElementById('V8').src='cenario/vazio.png';
document.getElementById('V7').src='item/core.png';
document.getElementById('V6').src='item/core.png';
document.getElementById('V5').src='item/core.png';
document.getElementById('V4').src='item/core.png';
document.getElementById('V3').src='item/core.png';
document.getElementById('V2').src='item/core.png';
document.getElementById('V1').src='item/core.png';
}else if(vid == 6){
document.getElementById('V10').src='cenario/vazio.png';
document.getElementById('V9').src='cenario/vazio.png';
document.getElementById('V8').src='cenario/vazio.png';
document.getElementById('V7').src='cenario/vazio.png';
document.getElementById('V6').src='item/core.png';
document.getElementById('V5').src='item/core.png';
document.getElementById('V4').src='item/core.png';
document.getElementById('V3').src='item/core.png';
document.getElementById('V2').src='item/core.png';
document.getElementById('V1').src='item/core.png';
}else if(vid == 5){
document.getElementById('V10').src='cenario/vazio.png';
document.getElementById('V9').src='cenario/vazio.png';
document.getElementById('V8').src='cenario/vazio.png';
document.getElementById('V7').src='cenario/vazio.png';
document.getElementById('V6').src='cenario/vazio.png';
document.getElementById('V5').src='item/core.png';
document.getElementById('V4').src='item/core.png';
document.getElementById('V3').src='item/core.png';
document.getElementById('V2').src='item/core.png';
document.getElementById('V1').src='item/core.png';
}else if(vid == 4){
document.getElementById('V10').src='cenario/vazio.png';
document.getElementById('V9').src='cenario/vazio.png';
document.getElementById('V8').src='cenario/vazio.png';
document.getElementById('V7').src='cenario/vazio.png';
document.getElementById('V6').src='cenario/vazio.png';
document.getElementById('V5').src='cenario/vazio.png';
document.getElementById('V4').src='item/core.png';
document.getElementById('V3').src='item/core.png';
document.getElementById('V2').src='item/core.png';
document.getElementById('V1').src='item/core.png';
}else if(vid == 3){
document.getElementById('V10').src='cenario/vazio.png';
document.getElementById('V9').src='cenario/vazio.png';
document.getElementById('V8').src='cenario/vazio.png';
document.getElementById('V7').src='cenario/vazio.png';
document.getElementById('V6').src='cenario/vazio.png';
document.getElementById('V5').src='cenario/vazio.png';
document.getElementById('V4').src='cenario/vazio.png';
document.getElementById('V3').src='item/core.png';
document.getElementById('V2').src='item/core.png';
document.getElementById('V1').src='item/core.png';
}else if(vid == 2){
document.getElementById('V10').src='cenario/vazio.png';
document.getElementById('V9').src='cenario/vazio.png';
document.getElementById('V8').src='cenario/vazio.png';
document.getElementById('V7').src='cenario/vazio.png';
document.getElementById('V6').src='cenario/vazio.png';
document.getElementById('V5').src='cenario/vazio.png';
document.getElementById('V4').src='cenario/vazio.png';
document.getElementById('V3').src='cenario/vazio.png';
document.getElementById('V2').src='item/core.png';
document.getElementById('V1').src='item/core.png';
}else if(vid == 1){
document.getElementById('V10').src='cenario/vazio.png';
document.getElementById('V9').src='cenario/vazio.png';
document.getElementById('V8').src='cenario/vazio.png';
document.getElementById('V7').src='cenario/vazio.png';
document.getElementById('V6').src='cenario/vazio.png';
document.getElementById('V5').src='cenario/vazio.png';
document.getElementById('V4').src='cenario/vazio.png';
document.getElementById('V3').src='cenario/vazio.png';
document.getElementById('V2').src='cenario/vazio.png';
document.getElementById('V1').src='item/core.png';
document.getElementById('dice').innerHTML='<a href="cenario/dice.html"><img src="item/core.png" id="V1"></a>';
}else if(vid == 0){
document.getElementById('V10').src='cenario/vazio.png';
document.getElementById('V9').src='cenario/vazio.png';
document.getElementById('V8').src='cenario/vazio.png';
document.getElementById('V7').src='cenario/vazio.png';
document.getElementById('V6').src='cenario/vazio.png';
document.getElementById('V5').src='cenario/vazio.png';
document.getElementById('V4').src='cenario/vazio.png';
document.getElementById('V3').src='cenario/vazio.png';
document.getElementById('V2').src='cenario/vazio.png';
document.getElementById('V1').src='cenario/vazio.png';
perdeu();
}
}
function con(cel){
	cont = cont + 1;
if (fasecont == 1){
document.getElementById('cont').innerHTML= cont+"/50";
document.getElementById(cel).onmouseover="nada()";
document.getElementById(cel).style="background-color:silver";
}else if(fasecont == 2){
document.getElementById('cont').innerHTML= cont+"/51";
document.getElementById(cel).onmouseover="nada()";
document.getElementById(cel).style="background-color:silver";
}else if(fasecont == 3){
document.getElementById('cont').innerHTML= cont+"/50";
document.getElementById(cel).onmouseover="nada()";
document.getElementById(cel).style="background-color:silver";
}
}
function nada(){
	
}
function vida(sit){
if (sit == 0){
vid = vid - 1;
contadorvida();
}
}
function perdeu(){
document.getElementById('maze').innerHTML='<center><font size="50px" color="red">Você perdeu<br/></font>';
}
function ganhavida(idvida){
vid = vid + 1;
contadorvida();
document.getElementById(idvida).onmouseover='';
document.getElementById(idvida).src='cenario/vaziocen.png';
}
function win(){
document.getElementById('caixadetexto').innerHTML = '';
document.getElementById('textodecaixa').innerHTML = '';
cont = cont + 1;
if(fasecont == 1){
if(cont == 50){
document.getElementById('maze').innerHTML='<center><font size="100px" color="red">Você Passou da fase 1</font><br/>'+
'<input type="button" value="Fase 2" onclick="iniciar()"></center>';
document.getElementById('cont').innerHTML= cont+"/50";
}else{
bloco();
}
}else if(fasecont == 2){
if(cont == 51){
document.getElementById('maze').innerHTML='<center><font size="100px" color="red">Você Passou da fase 2</font><br/>'+
'<input type="button" value="Fase 3" onclick="iniciar()"></center>';
document.getElementById('cont').innerHTML= cont+"/51";
}else{
bloco();
}
}else if(fasecont == 3){
if(cont == 50){
document.getElementById('maze').innerHTML='<center><font size="100px" color="red">Você Passou da fase 3</font><br/>'+
'<input type="button" value="Continuar" onclick="dialogo(0)"></center>';
document.getElementById('cont').innerHTML= cont+"/50";
}else{
bloco();
}
}
}
function key(chaveid){
switch(chaveid){
	case "chaveA": 
	chave[0] = 1;
	srcchave = document.getElementById(chaveid).src;
	document.getElementById('d7').innerHTML = "";
	colocainv(srcchave,chaveid);break;
}
}
function porta(portaid){
switch(portaid){
	case "portaa":
	if(chave[0] == 1){
	document.getElementById('portaa').innerHTML='';
	document.getElementById('portaa').id='h9';
	document.getElementById('h9').style='background-color:silver';
	document.getElementById('naoi9').id='i9';
	document.getElementById('naoj9').id='j9';
	document.getElementById('naoj10').id='win';
	document.getElementById('i9').onmouseover='';
	document.getElementById('j9').onmouseover='';
	document.getElementById('win').onmouseover='';
	document.getElementById('i9').innerHTML = '<div id="span1" onmouseover="con(this.id)"></div>';
	document.getElementById('j9').innerHTML = '<div id="span2" onmouseover="con(this.id)"></div>';
	document.getElementById('win').innerHTML = '<div id="spanwin" onmouseover="win()"></div>';
	chave[0] == 2;
	tirainv(srcchave);
	}else{
	document.getElementById('caixadetexto').innerHTML = 'Você precisa da chave A';
	}break;
}

}
function dialogo(parte){
if(parte == 0){
document.getElementById('maze').innerHTML='<a href="rar/inicio.rar" download><div id="defaultimage"><img src="cenario/rar.png" onclick="dialogo(1)"></div></a>';
document.getElementById('caixadetexto').innerHTML = "Bem,Você passou da fase 3, um mini-tutorial. Clique no arquivo RAR para baixar o tutorial completo";
}else if(parte == 1){
document.getElementById('caixadetexto').innerHTML = "Ao clicar na porta você poderá ir para o seu laboratório";
document.getElementById('maze').innerHTML = '<center><img src="cenario/portacompleta.png" onclick="dialogo(2)"></center>';
}else if(parte == 2){
document.getElementById('caixadetexto').innerHTML = "Você pensou que ia ser tão fácil assim né? pois bem, abra o arquivo rar, resolva o enigma e coloque a resposta na caixa de texto";
document.getElementById('textodecaixa').innerHTML = "Se a resposta estiver correta você irá para o seu laboratório,caso contrário tente de novo";
document.getElementById('maze').innerHTML = '<center><input type="text" id="resposta" onclick="enigma(100)"><br/><br/><input type="button" value="Responder" onclick="enigma(0)"><br/><br/><span id="text"></span></center>';
}else if(parte == 3){
document.getElementById('caixadetexto').innerHTML = "Muito bem! Agora sim você pode ir ao seu laboratório";
document.getElementById('textodecaixa').innerHTML = "";
document.getElementById('maze').innerHTML = '<center><img src="cenario/portacompleta.png" onclick="lab(1)"></center>';
}
}
function enigma(e){
	switch(e){
		case 0 :
		var e0 = new XMLHttpRequest();
		e0.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		if(this.responseText == "true"){
			dialogo(3);
		}else{
			document.getElementById('text').innerHTML = 'Tente de novo';
		}
}
};
		var resp0 = document.getElementById('resposta').value;
		e0.open("GET","enigmas/0.php?resp="+resp0, true);
		e0.send();
		case 100:
		document.getElementById('text').innerHTML = '';break;
	}

}
function bloco(){
fasecont = fasecont - 1;
document.getElementById('maze').innerHTML='<center><font size="100px" color="red">Você pulou algum bloco</font><br/>'+
'<input type="button" Value="Reiniciar" onclick="iniciar()">';
}
function lab(labo){
if(em != "" & se != ""){
var logado = new XMLHttpRequest();
logado.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
document.getElementById('nick').innerHTML = this.responseText;
nick = this.responseText;
rar[0] = 1;
}
};
logado.open("GET","Login/logado.php?e="+em+"&s="+se, true);
logado.send();

var vidas = new XMLHttpRequest();
vidas.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
vid = this.responseText;
contadorvida();
}
};
vidas.open("GET","Login/vidas.php?e="+em+"&s="+se, true);
vidas.send();

var conti0 = new XMLHttpRequest();
conti0.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
conti[0] = this.responseText;
}
};
conti0.open("GET","Login/conti/0.php?e="+em+"&s="+se, true);
conti0.send();

var conti1 = new XMLHttpRequest();
conti1.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
conti[1] = this.responseText;
}
};
conti1.open("GET","Login/conti/1.php?e="+em+"&s="+se, true);
conti1.send();

var conti2 = new XMLHttpRequest();
conti2.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
conti[2] = this.responseText;
}
};
conti2.open("GET","Login/conti/2.php?e="+em+"&s="+se, true);
conti2.send();

var conti3 = new XMLHttpRequest();
conti3.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
conti[3] = this.responseText;
}
};
conti3.open("GET","Login/conti/3.php?e="+em+"&s="+se, true);
conti3.send();

var conti4 = new XMLHttpRequest();
conti4.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
conti[4] = this.responseText;
}
};
conti4.open("GET","Login/conti/4.php?e="+em+"&s="+se, true);
conti4.send();

var paises0 = new XMLHttpRequest();
paises0.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
paises[0] = this.responseText;
}
};
paises0.open("GET","Login/paises/0.php?e="+em+"&s="+se, true);
paises0.send();

var paises1 = new XMLHttpRequest();
paises1.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
paises[1] = this.responseText;
}
};
paises1.open("GET","Login/paises/1.php?e="+em+"&s="+se, true);
paises1.send();

var paises2 = new XMLHttpRequest();
paises2.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
paises[2] = this.responseText;
}
};
paises2.open("GET","Login/paises/2.php?e="+em+"&s="+se, true);
paises2.send();

var paises3 = new XMLHttpRequest();
paises3.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
paises[3] = this.responseText;
}
};
paises3.open("GET","Login/paises/3.php?e="+em+"&s="+se, true);
paises3.send();

var paises4 = new XMLHttpRequest();
paises4.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
paises[4] = this.responseText;
}
};
paises4.open("GET","Login/paises/4.php?e="+em+"&s="+se, true);
paises4.send();

var paises5 = new XMLHttpRequest();
paises5.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
paises[5] = this.responseText;
}
};
paises5.open("GET","Login/paises/5.php?e="+em+"&s="+se, true);
paises5.send();

var paises6 = new XMLHttpRequest();
paises6.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
paises[6] = this.responseText;
}
};
paises6.open("GET","Login/paises/6.php?e="+em+"&s="+se, true);
paises6.send();

var paises7 = new XMLHttpRequest();
paises7.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
paises[7] = this.responseText;
}
};
paises7.open("GET","Login/paises/7.php?e="+em+"&s="+se, true);
paises7.send();

var paises8 = new XMLHttpRequest();
paises8.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
paises[8] = this.responseText;
}
};
paises8.open("GET","Login/paises/8.php?e="+em+"&s="+se, true);
paises8.send();

var paises9 = new XMLHttpRequest();
paises9.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
paises[9] = this.responseText;
}
};
paises9.open("GET","Login/paises/9.php?e="+em+"&s="+se, true);
paises9.send();

var paises10 = new XMLHttpRequest();
paises10.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
paises[10] = this.responseText;
}
};
paises10.open("GET","Login/paises/10.php?e="+em+"&s="+se, true);
paises10.send();

var paises11 = new XMLHttpRequest();
paises11.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
paises[11] = this.responseText;
}
};
paises11.open("GET","Login/paises/11.php?e="+em+"&s="+se, true);
paises11.send();

var paises12 = new XMLHttpRequest();
paises12.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
paises[12] = this.responseText;
}
};
paises12.open("GET","Login/paises/12.php?e="+em+"&s="+se, true);
paises12.send();

var paises13 = new XMLHttpRequest();
paises13.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
paises[13] = this.responseText;
}
};
paises13.open("GET","Login/paises/13.php?e="+em+"&s="+se, true);
paises13.send();

var paises14 = new XMLHttpRequest();
paises14.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
paises[14] = this.responseText;
}
};
paises14.open("GET","Login/paises/14.php?e="+em+"&s="+se, true);
paises14.send();

var paises15 = new XMLHttpRequest();
paises15.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
paises[15] = this.responseText;
}
};
paises15.open("GET","Login/paises/15.php?e="+em+"&s="+se, true);
paises15.send();

var paises16 = new XMLHttpRequest();
paises16.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
paises[16] = this.responseText;
}
};
paises16.open("GET","Login/paises/16.php?e="+em+"&s="+se, true);
paises16.send();

var paises17 = new XMLHttpRequest();
paises17.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
paises[17] = this.responseText;
}
};
paises17.open("GET","Login/paises/17.php?e="+em+"&s="+se, true);
paises17.send();

var paises18 = new XMLHttpRequest();
paises18.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
paises[18] = this.responseText;
}
};
paises18.open("GET","Login/paises/18.php?e="+em+"&s="+se, true);
paises18.send();

var paises19 = new XMLHttpRequest();
paises19.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
paises[19] = this.responseText;
}
};

paises19.open("GET","Login/paises/19.php?e="+em+"&s="+se, true);
paises19.send();
var paises20 = new XMLHttpRequest();
paises20.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
paises[20] = this.responseText;
}
};

paises20.open("GET","Login/paises/20.php?e="+em+"&s="+se, true);
paises20.send();
var paises21 = new XMLHttpRequest();
paises21.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
paises[21] = this.responseText;
}
};
paises21.open("GET","Login/paises/21.php?e="+em+"&s="+se, true);
paises21.send();

var paises22 = new XMLHttpRequest();
paises22.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
paises[22] = this.responseText;
}
};
paises22.open("GET","Login/paises/22.php?e="+em+"&s="+se, true);
paises22.send();

var paises23 = new XMLHttpRequest();
paises23.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
paises[23] = this.responseText;
}
};
paises23.open("GET","Login/paises/23.php?e="+em+"&s="+se, true);
paises23.send();

var paises24 = new XMLHttpRequest();
paises24.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
paises[24] = this.responseText;
}
};
paises24.open("GET","Login/paises/24.php?e="+em+"&s="+se, true);
paises24.send();

}else{
	
}
fasmus.pause();
var enimus = document.getElementById("enimus");
enimus.currentTime = 0;
enimus.play();
document.getElementById('cont').innerHTML='Laboratório';
document.getElementById('maze').innerHTML=
'<div id="vazio"  id="A1"></div>'+
'<div id="vazio"  id="B1"><img src="cenario/candir.png"></div>'+
'<div id="parede"></div>'+
'<div id="parede"></div>'+
'<div id="parede"></div>'+
'<div id="parede"></div>'+
'<div id="parede"></div>'+
'<div id="parede"></div>'+
'<div id="vazio"  id="I1"><img src="cenario/canesq.png"></div>'+
'<div id="vazio"  id="J1"></div>'+

'<div id="vazio"  id="A2"><img src="cenario/candir.png"></div>'+
'<div id="parede"><img src="cenario/algoesq.png"></div>'+
'<div id="c2"  id="C2"><img src="cenario/porta0.png" onclick="mundo(0)"></div>'+
'<div id="d2"  id="D2"></div>'+
'<div id="e2"  id="E2"></div>'+
'<div id="f2"  id="F2"></div>'+
'<div id="g2"  id="G2"></div>'+
'<div id="h2"  id="H2"></div>'+
'<div id="parede"><img src="cenario/algodir.png"></div>'+
'<div id="vazio"  id="J2"><img src="cenario/canesq.png"></div>'+

'<div id="parede"></div>'+
'<div id="b3"  id="B3"></div>'+
'<div id="c3"  id="C3"><img src="cenario/porta1.png" onclick="mundo(0)"></div>'+
'<div id="d3"  id="D3"></div>'+
'<div id="e3"  id="E3"></div>'+
'<div id="f3"  id="F3"></div>'+
'<div id="g3"  id="G3"></div>'+
'<div id="h3"  id="H3"></div>'+
'<div id="i3"  id="I3"></div>'+
'<div id="parede"></div>'+

'<div id="parede"></div>'+
'<div id="b4"  id="B4"></div>'+
'<div id="c4"  id="C4"></div>'+
'<div id="d4"  id="D4"></div>'+
'<div id="e4"  id="E4"></div>'+
'<div id="f4"  id="F4"></div>'+
'<div id="g4"  id="G4"></div>'+
'<div id="h4"  id="H4"></div>'+
'<div id="mesa"></div>'+
'<div id="parede"></div>'+

'<div id="parede"></div>'+
'<div id="b5"  id="B5"></div>'+
'<div id="c5"  id="C5"></div>'+
'<div id="d5"  id="D5"></div>'+
'<div id="e5"  id="E5"></div>'+
'<div id="f5"  id="F5"></div>'+
'<div id="g5"  id="G5"></div>'+
'<div id="h5"  id="H5"></div>'+
'<div id="mesa"><img src="cenario/pc.png" onmouseover="texto(1)" onmouseout="texto(10)" onclick="pc(em,se)"></div>'+
'<div id="parede"></div>'+

'<div id="parede"></div>'+
'<div id="b6"  id="B6"></div>'+
'<div id="c6"  id="C6"></div>'+
'<div id="d6"  id="D6"></div>'+
'<div id="e6"  id="E6"></div>'+
'<div id="f6"  id="F6"></div>'+
'<div id="g6"  id="G6"></div>'+
'<div id="h6"  id="H6"></div>'+
'<div id="mesa"><img src="cenario/baralho.png" onmouseover="texto(5)" onmouseout="texto(50)" onclick="baralho()"></div>'+
'<div id="parede"></div>'+

'<div id="parede"></div>'+
'<div id="b7"  id="B7"></div>'+
'<div id="c7"  id="C7"></div>'+
'<div id="d7"  id="D7"></div>'+
'<div id="e7"  id="E7"></div>'+
'<div id="f7"  id="F7"></div>'+
'<div id="g7"  id="G7"></div>'+
'<div id="h7"  id="H7"></div>'+
'<div id="mesa"></div>'+
'<div id="parede"></div>'+

'<div id="parede"></div>'+
'<div id="b8"  id="B8"></div>'+
'<div id="c8"  id="C8"></div>'+
'<div id="d8"  id="D8"></div>'+
'<div id="e8"  id="E8"></div>'+
'<div id="f8"  id="F8"></div>'+
'<div id="g8"  id="G8"></div>'+
'<div id="h8"  id="H8"></div>'+
'<div id="i8"  id="I8"></div>'+
'<div id="parede"></div>'+

'<div id="vazio"  id="A9"><img src="cenario/canto.png"></div>'+
'<div id="parede"><img src="cenario/algocim.png"></div>'+
'<div id="c9"  id="C9"></div>'+
'<div id="d9"  id="D9"></div>'+
'<div id="e9"  id="E9"></div>'+
'<div id="f9"  id="F9"></div>'+
'<div id="g9"  id="G9"></div>'+
'<div id="h9"  id="H9"></div>'+
'<div id="parede"><img src="cenario/algobai.png"></div>'+
'<div id="vazio"  id="J9"><img src="cenario/canbai.png"></div>'+

'<div id="vazio"  id="A10"></div>'+
'<div id="vazio"  id="B10"><img src="cenario/canto.png"></div>'+
'<div id="parede"></div>'+
'<div id="parede"></div>'+
'<div id="parede"></div>'+
'<div id="parede"></div>'+
'<div id="parede"></div>'+
'<div id="parede"></div>'+
'<div id="vazio"  id="I10"><img src="cenario/canbai.png"></div>'+
'<div id="vazio"  id="J10"></div>';
if(labo == 1){
document.getElementById('caixadetexto').innerHTML = '';
document.getElementById('f5').innerHTML='<span id="rar"><a href="rar/Tutorial.rar" download><img src="item/rar.png"  onclick="baixarar(this.id)" id="rar1"></a></span>';
}else if(labo == 9999){
	
}
}
function game(){
	document.getElementById('maze').innerHTML='<center><font size="100px" color="red">The Game</font><br/>'+
'<input type="button" value="Iniciar" onclick="iniciar()"></center>';
fasecont = 0;
}
function mudacont(maisum,atual){
if(atual == 0){
if(maisum == 1){
if(conti[1] == 1){
document.getElementById('continente').src="cenario/europa.jpg";
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudacont(1,1)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudacont(0,1)">';
document.getElementById('espacobaixo').innerHTML="Europa";
document.getElementById('selecont').innerHTML='<img src="cenario/selecont.png" onclick="aparecepais(1)">';
}else{
document.getElementById('continente').src="cenario/europa.jpg";
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudacont(1,1)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudacont(0,1)">';
document.getElementById('espacobaixo').innerHTML="Europa";
document.getElementById('selecont').innerHTML='<img src="cenario/contbloq.png">';
}
}else if(maisum == 0){
if(conti[4] == 1){
document.getElementById('continente').src="cenario/oceania.jpg";
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudacont(1,4)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudacont(0,4)">';
document.getElementById('espacobaixo').innerHTML="Oceania";
document.getElementById('selecont').innerHTML='<img src="cenario/selecont.png" onclick="aparecepais(4)">';
}else{
document.getElementById('continente').src="cenario/oceania.jpg";
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudacont(1,4)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudacont(0,4)">';
document.getElementById('espacobaixo').innerHTML="Oceania";
document.getElementById('selecont').innerHTML='<img src="cenario/contbloq.png">';
}
}
}else if(atual == 1){
if(maisum == 1){
if(conti[2] == 1){
document.getElementById('continente').src="cenario/africa.jpg";
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudacont(1,2)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudacont(0,2)">';
document.getElementById('espacobaixo').innerHTML="África";
document.getElementById('selecont').innerHTML='<img src="cenario/selecont.png" onclick="aparecepais(2)">';
}else{
document.getElementById('continente').src="cenario/africa.jpg";
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudacont(1,2)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudacont(0,2)">';
document.getElementById('espacobaixo').innerHTML="África";
document.getElementById('selecont').innerHTML='<img src="cenario/contbloq.png">';
}
}else if(maisum == 0){
document.getElementById('continente').src="cenario/america.jpg";
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudacont(1,0)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudacont(0,0)">';
document.getElementById('espacobaixo').innerHTML="América";
document.getElementById('selecont').innerHTML='<img src="cenario/selecont.png" onclick="aparecepais(0)">';
}
}else if(atual == 2){
if(maisum == 1){
if(conti[3] == 1){
document.getElementById('continente').src="cenario/asia.jpg";
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudacont(1,3)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudacont(0,3)">';
document.getElementById('espacobaixo').innerHTML="Asia";
document.getElementById('selecont').innerHTML='<img src="cenario/selecont.png" onclick="aparecepais(3)">';
}else{
document.getElementById('continente').src="cenario/asia.jpg";
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudacont(1,3)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudacont(0,3)">';
document.getElementById('espacobaixo').innerHTML="Asia";
document.getElementById('selecont').innerHTML='<img src="cenario/contbloq.png">';
}
}else if(maisum == 0){
if(conti[1] == 1){
document.getElementById('continente').src="cenario/europa.jpg";
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudacont(1,1)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudacont(0,1)">';
document.getElementById('espacobaixo').innerHTML="Europa";
document.getElementById('selecont').innerHTML='<img src="cenario/selecont.png" onclick="aparecepais(1)">';
}else{
document.getElementById('continente').src="cenario/europa.jpg";
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudacont(1,1)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudacont(0,1)">';
document.getElementById('espacobaixo').innerHTML="Europa";
document.getElementById('selecont').innerHTML='<img src="cenario/contbloq.png">';
}
}
}else if(atual == 3){
if(maisum == 1){
if(conti[4] == 1){
document.getElementById('continente').src="cenario/oceania.jpg";
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudacont(1,4)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudacont(0,4)">';
document.getElementById('espacobaixo').innerHTML="Oceania";
document.getElementById('selecont').innerHTML='<img src="cenario/selecont.png" onclick="aparecepais(4)">';
}else{
document.getElementById('continente').src="cenario/oceania.jpg";
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudacont(1,4)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudacont(0,4)">';
document.getElementById('espacobaixo').innerHTML="Oceania";
document.getElementById('selecont').innerHTML='<img src="cenario/contbloq.png">';
}
}else if(maisum == 0){
if(conti[2] == 1){
document.getElementById('continente').src="cenario/africa.jpg";
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudacont(1,2)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudacont(0,2)">';
document.getElementById('espacobaixo').innerHTML="África";
document.getElementById('selecont').innerHTML='<img src="cenario/selecont.png" onclick="aparecepais(2)">';
}else{
document.getElementById('continente').src="cenario/africa.jpg";
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudacont(1,2)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudacont(0,2)">';
document.getElementById('espacobaixo').innerHTML="África";
document.getElementById('selecont').innerHTML='<img src="cenario/contbloq.png">';
}
}
}else if(atual == 4){
if(maisum == 1){
document.getElementById('continente').src="cenario/america.jpg";
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudacont(1,0)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudacont(0,0)">';
document.getElementById('espacobaixo').innerHTML="América";
document.getElementById('selecont').innerHTML='<img src="cenario/selecont.png" onclick="aparecepais(0)">';
}else if(maisum == 0){
if(conti[3] == 1){
document.getElementById('continente').src="cenario/asia.jpg";
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudacont(1,3)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudacont(0,3)">';
document.getElementById('espacobaixo').innerHTML="Asia";
document.getElementById('selecont').innerHTML='<img src="cenario/selecont.png" onclick="aparecepais(3)">';
}else{
document.getElementById('continente').src="cenario/asia.jpg";
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudacont(1,3)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudacont(0,3)">';
document.getElementById('espacobaixo').innerHTML="Asia";
document.getElementById('selecont').innerHTML='<img src="cenario/contbloq.png">';
}
}
}
}
function aparecepais(cont){
	if(cont == 0){
document.getElementById('pais').innerHTML='<img src="paises/eua.png">';
document.getElementById('selepais').innerHTML='<img src="cenario/selepais.png" onclick="selepais(01)">';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,01)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,01)">';
document.getElementById('selecont').innerHTML='<font size="50px" color="red">América</font>';
document.getElementById('espacobaixo').innerHTML='Estados Unidos';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(0)">';
}else if(cont == 1){
document.getElementById('pais').innerHTML='<img src="paises/reinounido.png">';
document.getElementById('selepais').innerHTML='<img src="cenario/selepais.png" onclick="selepais(11)">';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,11)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,11)">';
document.getElementById('selecont').innerHTML='<font size="50px" color="red">Europa</font>';
document.getElementById('espacobaixo').innerHTML='Reino unido';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(1)">';
}else if(cont == 2){
document.getElementById('pais').innerHTML='<img src="paises/egito.png">';
document.getElementById('selepais').innerHTML='<img src="cenario/selepais.png" onclick="selepais(21)">';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,21)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,21)">';
document.getElementById('selecont').innerHTML='<font size="50px" color="red">África</font>';
document.getElementById('espacobaixo').innerHTML='Egito';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(2)">';
}else if(cont == 3){
document.getElementById('pais').innerHTML='<img src="paises/russia.png">';
document.getElementById('selepais').innerHTML='<img src="cenario/selepais.png" onclick="selepais(31)">';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,31)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,31)">';
document.getElementById('selecont').innerHTML='<font size="50px" color="red">Ásia</font>';
document.getElementById('espacobaixo').innerHTML='Russia';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(3)">';
}else if(cont == 4){
document.getElementById('pais').innerHTML='<img src="paises/micronesia.png">';
document.getElementById('selepais').innerHTML='<img src="cenario/selepais.png" onclick="selepais(41)">';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,41)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,41)">';
document.getElementById('selecont').innerHTML='<font size="50px" color="red">Oceania</font>';
document.getElementById('espacobaixo').innerHTML='Micronésia';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(4)">';
}
}
function mudapais(maisum,pais){
	if(pais == 01){
if(maisum == 1){
if(paises[1] == 1){
document.getElementById('pais').innerHTML='<img src="paises/canada.png">';
document.getElementById('espacobaixo').innerHTML='Canadá';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,02)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,02)">';
document.getElementById('selepais').innerHTML='<img src="cenario/selepais.png" onclick="selepais(02)">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(0)">';
}else{
document.getElementById('pais').innerHTML='<img src="cenario/paisbloq.png">';
document.getElementById('espacobaixo').innerHTML='???(2)';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,02)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,02)">';
document.getElementById('selepais').innerHTML='<img src="cenario/contbloq.png">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(0)">';
}
}else if(maisum == 0){
if(paises[4] == 1){
document.getElementById('pais').innerHTML='<img src="paises/chile.png">';
document.getElementById('espacobaixo').innerHTML='Chile';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,05)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,05)">';
document.getElementById('selepais').innerHTML='<img src="cenario/selepais.png" onclick="selepais(05)">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(0)">';
}else{
document.getElementById('pais').innerHTML='<img src="cenario/paisbloq.png">';
document.getElementById('espacobaixo').innerHTML='???(5)';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,05)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,05)">';
document.getElementById('selepais').innerHTML='<img src="cenario/contbloq.png">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(0)">';
}
}
}else if(pais == 02){
if(maisum == 1){
if(paises[2] == 1){
document.getElementById('pais').innerHTML='<img src="paises/mexico.png">';
document.getElementById('espacobaixo').innerHTML='México';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,03)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,03)">';
document.getElementById('selepais').innerHTML='<img src="cenario/selepais.png" onclick="selepais(03)">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(0)">';
}else{
document.getElementById('pais').innerHTML='<img src="cenario/paisbloq.png">';
document.getElementById('espacobaixo').innerHTML='???(3)';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,03)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,03)">';
document.getElementById('selepais').innerHTML='<img src="cenario/contbloq.png">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(0)">';
}
}else if(maisum == 0){
document.getElementById('pais').innerHTML='<img src="paises/eua.png">';
document.getElementById('espacobaixo').innerHTML='Estados Unidos';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,01)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,01)">';
document.getElementById('selepais').innerHTML='<img src="cenario/selepais.png" onclick="selepais(01)">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(0)">';
}
}else if(pais == 03){
if(maisum == 1){
if(paises[3] == 1){
document.getElementById('pais').innerHTML='<img src="paises/brasil.png">';
document.getElementById('espacobaixo').innerHTML='Brasil';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,04)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,04)">';
document.getElementById('selepais').innerHTML='<img src="cenario/selepais.png" onclick="selepais(04)">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(0)">';
}else{
document.getElementById('pais').innerHTML='<img src="cenario/paisbloq.png">';
document.getElementById('espacobaixo').innerHTML='???(4)';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,04)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,04)">';
document.getElementById('selepais').innerHTML='<img src="cenario/contbloq.png">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(0)">';
}
}else if(maisum == 0){
if(paises[1] == 1){
document.getElementById('pais').innerHTML='<img src="paises/canada.png">';
document.getElementById('espacobaixo').innerHTML='Canadá';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,02)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,02)">';
document.getElementById('selepais').innerHTML='<img src="cenario/selepais.png" onclick="selepais(02)">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(0)">';
}else{
document.getElementById('pais').innerHTML='<img src="cenario/paisbloq.png">';
document.getElementById('espacobaixo').innerHTML='???(2)';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,02)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,02)">';
document.getElementById('selepais').innerHTML='<img src="cenario/contbloq.png">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(0)">';
}
}
}else if(pais == 04){
if(maisum == 1){
if(paises[4] == 1){
document.getElementById('pais').innerHTML='<img src="paises/chile.png">';
document.getElementById('espacobaixo').innerHTML='Chile';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,05)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,05)">';
document.getElementById('selepais').innerHTML='<img src="cenario/selepais.png" onclick="selepais(05)">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(0)">';
}else{
document.getElementById('pais').innerHTML='<img src="cenario/paisbloq.png">';
document.getElementById('espacobaixo').innerHTML='???(5)';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,05)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,05)">';
document.getElementById('selepais').innerHTML='<img src="cenario/contbloq.png">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(0)">';
}
}else if(maisum == 0){
if(paises[2] == 1){
document.getElementById('pais').innerHTML='<img src="paises/mexico.png">';
document.getElementById('espacobaixo').innerHTML='México';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,03)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,03)">';
document.getElementById('selepais').innerHTML='<img src="cenario/selepais.png" onclick="selepais(03)">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(0)">';
}else{
document.getElementById('pais').innerHTML='<img src="cenario/paisbloq.png">';
document.getElementById('espacobaixo').innerHTML='???(3)';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,03)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,03)">';
document.getElementById('selepais').innerHTML='<img src="cenario/contbloq.png">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(0)">';
}
}
}else if(pais == 05){
if(maisum == 1){
document.getElementById('pais').innerHTML='<img src="paises/eua.png">';
document.getElementById('espacobaixo').innerHTML='Estados Unidos';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,01)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,01)">';
document.getElementById('selepais').innerHTML='<img src="cenario/selepais.png" onclick="selepais(01)">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(0)">';
}else if(maisum == 0){
if(paises[3] == 1){
document.getElementById('pais').innerHTML='<img src="paises/brasil.png">';
document.getElementById('espacobaixo').innerHTML='Brasil';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,04)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,04)">';
document.getElementById('selepais').innerHTML='<img src="cenario/selepais.png" onclick="selepais(04)">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(0)">';
}else{
document.getElementById('pais').innerHTML='<img src="cenario/paisbloq.png">';
document.getElementById('espacobaixo').innerHTML='???(4)';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,04)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,04)">';
document.getElementById('selepais').innerHTML='<img src="cenario/contbloq.png">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(0)">';
}
}
}else if(pais == 11){
if(maisum == 1){
if(paises[6] == 1){
document.getElementById('pais').innerHTML='<img src="paises/franca.png">';
document.getElementById('espacobaixo').innerHTML='França';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,12)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,12)">';
document.getElementById('selepais').innerHTML='<img src="cenario/selepais.png" onclick="selepais(12)">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(1)">';
}else{
document.getElementById('pais').innerHTML='<img src="cenario/paisbloq.png">';
document.getElementById('espacobaixo').innerHTML='???(2)';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,12)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,12)">';
document.getElementById('selepais').innerHTML='<img src="cenario/contbloq.png">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(1)">';
}
}else if(maisum == 0){
if(paises[9] == 1){
document.getElementById('pais').innerHTML='<img src="paises/holanda.png">';
document.getElementById('espacobaixo').innerHTML='Holanda';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,15)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,15)">';
document.getElementById('selepais').innerHTML='<img src="cenario/selepais.png" onclick="selepais(15)">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(1)">';
}else{
document.getElementById('pais').innerHTML='<img src="cenario/paisbloq.png">';
document.getElementById('espacobaixo').innerHTML='???(5)';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,15)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,15)">';
document.getElementById('selepais').innerHTML='<img src="cenario/contbloq.png">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(1)">';
}
}
}else if(pais == 12){
if(maisum == 1){
if(paises[7] == 1){
document.getElementById('pais').innerHTML='<img src="paises/alemanha.png">';
document.getElementById('espacobaixo').innerHTML='Alemanha';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,13)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,13)">';
document.getElementById('selepais').innerHTML='<img src="cenario/selepais.png" onclick="selepais(13)">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(1)">';
}else{
document.getElementById('pais').innerHTML='<img src="cenario/paisbloq.png">';
document.getElementById('espacobaixo').innerHTML='???(3)';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,13)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,13)">';
document.getElementById('selepais').innerHTML='<img src="cenario/contbloq.png">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(1)">';
}
}else if(maisum == 0){
document.getElementById('pais').innerHTML='<img src="paises/reinounido.png">';
document.getElementById('espacobaixo').innerHTML='Reino unido';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,11)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,11)">';
document.getElementById('selepais').innerHTML='<img src="cenario/selepais.png" onclick="selepais(11)">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(1)">';
}
}else if(pais == 13){
if(maisum == 1){
if(paises[8] == 1){
document.getElementById('pais').innerHTML='<img src="paises/belgica.png">';
document.getElementById('espacobaixo').innerHTML='Bélgica';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,14)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,14)">';
document.getElementById('selepais').innerHTML='<img src="cenario/selepais.png" onclick="selepais(14)">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(1)">';
}else{
document.getElementById('pais').innerHTML='<img src="cenario/paisbloq.png">';
document.getElementById('espacobaixo').innerHTML='???(4)';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,14)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,14)">';
document.getElementById('selepais').innerHTML='<img src="cenario/contbloq.png">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(1)">';
}
}else if(maisum == 0){
if(paises[6] == 1){
document.getElementById('pais').innerHTML='<img src="paises/franca.png">';
document.getElementById('espacobaixo').innerHTML='França';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,12)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,12)">';
document.getElementById('selepais').innerHTML='<img src="cenario/selepais.png" onclick="selepais(12)">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(1)">';
}else{
document.getElementById('pais').innerHTML='<img src="cenario/paisbloq.png">';
document.getElementById('espacobaixo').innerHTML='???(2)';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,12)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,12)">';
document.getElementById('selepais').innerHTML='<img src="cenario/contbloq.png">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(1)">';
}
}
}else if(pais == 14){
if(maisum == 1){
if(paises[9] == 1){
document.getElementById('pais').innerHTML='<img src="paises/holanda.png">';
document.getElementById('espacobaixo').innerHTML='Holanda';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,15)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,15)">';
document.getElementById('selepais').innerHTML='<img src="cenario/selepais.png" onclick="selepais(15)">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(1)">';
}else{
document.getElementById('pais').innerHTML='<img src="cenario/paisbloq.png">';
document.getElementById('espacobaixo').innerHTML='???(5)';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,15)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,15)">';
document.getElementById('selepais').innerHTML='<img src="cenario/contbloq.png">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(1)">';
}
}else if(maisum == 0){
if(paises[7] == 1){
document.getElementById('pais').innerHTML='<img src="paises/alemanha.png">';
document.getElementById('espacobaixo').innerHTML='Alemanha';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,13)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,13)">';
document.getElementById('selepais').innerHTML='<img src="cenario/selepais.png" onclick="selepais(13)">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(1)">';
}else{
document.getElementById('pais').innerHTML='<img src="cenario/paisbloq.png">';
document.getElementById('espacobaixo').innerHTML='???(3)';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,13)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,13)">';
document.getElementById('selepais').innerHTML='<img src="cenario/contbloq.png">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(1)">';
}
}
}else if(pais == 15){
if(maisum == 1){
document.getElementById('pais').innerHTML='<img src="paises/reinounido.png">';
document.getElementById('espacobaixo').innerHTML='Reino unido';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,11)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,11)">';
document.getElementById('selepais').innerHTML='<img src="cenario/selepais.png" onclick="selepais(11)">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(1)">';
}else if(maisum == 0){
if(paises[8] == 1){
document.getElementById('pais').innerHTML='<img src="paises/belgica.png">';
document.getElementById('espacobaixo').innerHTML='Bélgica';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,14)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,14)">';
document.getElementById('selepais').innerHTML='<img src="cenario/selepais.png" onclick="selepais(14)">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(1)">';
}else{
document.getElementById('pais').innerHTML='<img src="cenario/paisbloq.png">';
document.getElementById('espacobaixo').innerHTML='???(4)';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,14)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,14)">';
document.getElementById('selepais').innerHTML='<img src="cenario/contbloq.png">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(1)">';
}
}
}else if(pais == 21){
if(maisum == 1){
if(paises[11] == 1){
document.getElementById('pais').innerHTML='<img src="paises/congo.png">';
document.getElementById('espacobaixo').innerHTML='Congo';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,22)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,22)">';
document.getElementById('selepais').innerHTML='<img src="cenario/selepais.png" onclick="selepais(22)">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(2)">';
}else{
document.getElementById('pais').innerHTML='<img src="cenario/paisbloq.png">';
document.getElementById('espacobaixo').innerHTML='???(2)';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,22)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,22)">';
document.getElementById('selepais').innerHTML='<img src="cenario/contbloq.png">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(2)">';
}
}else if(maisum == 0){
if(paises[14] == 1){
document.getElementById('pais').innerHTML='<img src="paises/africasul.png">';
document.getElementById('espacobaixo').innerHTML='África do Sul';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,25)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,25)">';
document.getElementById('selepais').innerHTML='<img src="cenario/selepais.png" onclick="selepais(25)">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(2)">';
}else{
document.getElementById('pais').innerHTML='<img src="cenario/paisbloq.png">';
document.getElementById('espacobaixo').innerHTML='???(5)';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,25)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,25)">';
document.getElementById('selepais').innerHTML='<img src="cenario/contbloq.png">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(2)">';
}
}
}else if(pais == 22){
if(maisum == 1){
if(paises[12] == 1){
document.getElementById('pais').innerHTML='<img src="paises/nigeria.png">';
document.getElementById('espacobaixo').innerHTML='Nigéria';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,23)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,23)">';
document.getElementById('selepais').innerHTML='<img src="cenario/selepais.png" onclick="selepais(23)">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(2)">';
}else{
document.getElementById('pais').innerHTML='<img src="cenario/paisbloq.png">';
document.getElementById('espacobaixo').innerHTML='???(3)';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,23)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,23)">';
document.getElementById('selepais').innerHTML='<img src="cenario/contbloq.png">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(2)">';
}
}else if(maisum == 0){
document.getElementById('pais').innerHTML='<img src="paises/egito.png">';
document.getElementById('espacobaixo').innerHTML='Egito';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,21)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,21)">';
document.getElementById('selepais').innerHTML='<img src="cenario/selepais.png" onclick="selepais(21)">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(2)">';
}
}else if(pais == 23){
if(maisum == 1){
if(paises[13] == 1){
document.getElementById('pais').innerHTML='<img src="paises/camaroes.png">';
document.getElementById('espacobaixo').innerHTML='Camarões';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,24)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,24)">';
document.getElementById('selepais').innerHTML='<img src="cenario/selepais.png" onclick="selepais(24)">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(2)">';
}else{
document.getElementById('pais').innerHTML='<img src="cenario/paisbloq.png">';
document.getElementById('espacobaixo').innerHTML='???(4)';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,24)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,24)">';
document.getElementById('selepais').innerHTML='<img src="cenario/contbloq.png">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(2)">';
}
}else if(maisum == 0){
if(paises[11] == 1){
document.getElementById('pais').innerHTML='<img src="paises/congo.png">';
document.getElementById('espacobaixo').innerHTML='Congo';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,22)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,22)">';
document.getElementById('selepais').innerHTML='<img src="cenario/selepais.png" onclick="selepais(22)">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(2)">';
}else{
document.getElementById('pais').innerHTML='<img src="cenario/paisbloq.png">';
document.getElementById('espacobaixo').innerHTML='???(2)';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,22)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,22)">';
document.getElementById('selepais').innerHTML='<img src="cenario/contbloq.png">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(2)">';
}
}
}else if(pais == 24){
if(maisum == 1){
if(paises[14] == 1){
document.getElementById('pais').innerHTML='<img src="paises/africasul.png">';
document.getElementById('espacobaixo').innerHTML='África do Sul';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,25)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,25)">';
document.getElementById('selepais').innerHTML='<img src="cenario/selepais.png" onclick="selepais(25)">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(2)">';
}else{
document.getElementById('pais').innerHTML='<img src="cenario/paisbloq.png">';
document.getElementById('espacobaixo').innerHTML='???(5)';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,25)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,25)">';
document.getElementById('selepais').innerHTML='<img src="cenario/contbloq.png">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(2)">';
}
}else if(maisum == 0){
if(paises[12] == 1){
document.getElementById('pais').innerHTML='<img src="paises/nigeria.png">';
document.getElementById('espacobaixo').innerHTML='Nigéria';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,23)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,23)">';
document.getElementById('selepais').innerHTML='<img src="cenario/selepais.png" onclick="selepais(23)">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(2)">';
}else{
document.getElementById('pais').innerHTML='<img src="cenario/paisbloq.png">';
document.getElementById('espacobaixo').innerHTML='???(3)';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,23)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,23)">';
document.getElementById('selepais').innerHTML='<img src="cenario/contbloq.png">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(2)">';
}
}
}else if(pais == 25){
if(maisum == 1){
document.getElementById('pais').innerHTML='<img src="paises/egito.png">';
document.getElementById('espacobaixo').innerHTML='Egito';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,21)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,21)">';
document.getElementById('selepais').innerHTML='<img src="cenario/selepais.png" onclick="selepais(21)">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(2)">';
}else if(maisum == 0){
if(paises[13] == 1){
document.getElementById('pais').innerHTML='<img src="paises/camaroes.png">';
document.getElementById('espacobaixo').innerHTML='Camarões';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,24)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,24)">';
document.getElementById('selepais').innerHTML='<img src="cenario/selepais.png" onclick="selepais(24)">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(2)">';
}else{
document.getElementById('pais').innerHTML='<img src="cenario/paisbloq.png">';
document.getElementById('espacobaixo').innerHTML='???(4)';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,24)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,24)">';
document.getElementById('selepais').innerHTML='<img src="cenario/contbloq.png">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(2)">';
}
}
}else if(pais == 31){
if(maisum == 1){
if(paises[16] == 1){
document.getElementById('pais').innerHTML='<img src="paises/india.png">';
document.getElementById('espacobaixo').innerHTML='India';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,32)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,32)">';
document.getElementById('selepais').innerHTML='<img src="cenario/selepais.png" onclick="selepais(32)">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(3)">';
}else{
document.getElementById('pais').innerHTML='<img src="cenario/paisbloq.png">';
document.getElementById('espacobaixo').innerHTML='???(2)';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,32)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,32)">';
document.getElementById('selepais').innerHTML='<img src="cenario/contbloq.png">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(3)">';
}
}else if(maisum == 0){
if(paises[19] == 1){
document.getElementById('pais').innerHTML='<img src="paises/japao.png">';
document.getElementById('espacobaixo').innerHTML='Japão';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,35)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,35)">';
document.getElementById('selepais').innerHTML='<img src="cenario/selepais.png" onclick="selepais(35)">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(3)">';
}else{
document.getElementById('pais').innerHTML='<img src="cenario/paisbloq.png">';
document.getElementById('espacobaixo').innerHTML='???(5)';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,35)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,35)">';
document.getElementById('selepais').innerHTML='<img src="cenario/contbloq.png">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(3)">';
}
}
}else if(pais == 32){
if(maisum == 1){
if(paises[17] == 1){
document.getElementById('pais').innerHTML='<img src="paises/turquia.png">';
document.getElementById('espacobaixo').innerHTML='Turquia';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,33)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,33)">';
document.getElementById('selepais').innerHTML='<img src="cenario/selepais.png" onclick="selepais(33)">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(3)">';
}else{
document.getElementById('pais').innerHTML='<img src="cenario/paisbloq.png">';
document.getElementById('espacobaixo').innerHTML='???(3)';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,33)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,33)">';
document.getElementById('selepais').innerHTML='<img src="cenario/contbloq.png">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(3)">';
}
}else if(maisum == 0){
document.getElementById('pais').innerHTML='<img src="paises/russia.png">';
document.getElementById('espacobaixo').innerHTML='Russia';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,31)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,31)">';
document.getElementById('selepais').innerHTML='<img src="cenario/selepais.png" onclick="selepais(31)">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(3)">';
}
}else if(pais == 33){
if(maisum == 1){
if(paises[18] == 1){
document.getElementById('pais').innerHTML='<img src="paises/china.jpg">';
document.getElementById('espacobaixo').innerHTML='China';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,34)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,34)">';
document.getElementById('selepais').innerHTML='<img src="cenario/selepais.png" onclick="selepais(34)">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(3)">';
}else{
document.getElementById('pais').innerHTML='<img src="cenario/paisbloq.png">';
document.getElementById('espacobaixo').innerHTML='???(4)';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,34)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,34)">';
document.getElementById('selepais').innerHTML='<img src="cenario/contbloq.png">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(3)">';
}
}else if(maisum == 0){
if(paises[16] == 1){
document.getElementById('pais').innerHTML='<img src="paises/india.png">';
document.getElementById('espacobaixo').innerHTML='India';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,32)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,32)">';
document.getElementById('selepais').innerHTML='<img src="cenario/selepais.png" onclick="selepais(32)">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(3)">';
}else{
document.getElementById('pais').innerHTML='<img src="cenario/paisbloq.png">';
document.getElementById('espacobaixo').innerHTML='???(2)';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,32)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,32)">';
document.getElementById('selepais').innerHTML='<img src="cenario/contbloq.png">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(3)">';
}
}
}else if(pais == 34){
if(maisum == 1){
if(paises[19] == 1){
document.getElementById('pais').innerHTML='<img src="paises/japao.png">';
document.getElementById('espacobaixo').innerHTML='Japão';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,35)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,35)">';
document.getElementById('selepais').innerHTML='<img src="cenario/selepais.png" onclick="selepais(35)">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(3)">';
}else{
document.getElementById('pais').innerHTML='<img src="cenario/paisbloq.png">';
document.getElementById('espacobaixo').innerHTML='???(5)';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,35)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,35)">';
document.getElementById('selepais').innerHTML='<img src="cenario/contbloq.png">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(3)">';
}
}else if(maisum == 0){
if(paises[17] == 1){
document.getElementById('pais').innerHTML='<img src="paises/turquia.png">';
document.getElementById('espacobaixo').innerHTML='Turquia';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,33)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,33)">';
document.getElementById('selepais').innerHTML='<img src="cenario/selepais.png" onclick="selepais(33)">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(3)">';
}else{
document.getElementById('pais').innerHTML='<img src="cenario/paisbloq.png">';
document.getElementById('espacobaixo').innerHTML='???(3)';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,33)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,33)">';
document.getElementById('selepais').innerHTML='<img src="cenario/contbloq.png">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(3)">';
}
}
}else if(pais == 35){
if(maisum == 1){
document.getElementById('pais').innerHTML='<img src="paises/russia.png">';
document.getElementById('espacobaixo').innerHTML='Russia';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,31)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,31)">';
document.getElementById('selepais').innerHTML='<img src="cenario/selepais.png" onclick="selepais(31)">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(3)">';
}else if(maisum == 0){
if(paises[18] == 1){
document.getElementById('pais').innerHTML='<img src="paises/china.jpg">';
document.getElementById('espacobaixo').innerHTML='China';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,34)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,34)">';
document.getElementById('selepais').innerHTML='<img src="cenario/selepais.png" onclick="selepais(34)">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(3)">';
}else{
document.getElementById('pais').innerHTML='<img src="cenario/paisbloq.png">';
document.getElementById('espacobaixo').innerHTML='???(4)';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,34)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,34)">';
document.getElementById('selepais').innerHTML='<img src="cenario/contbloq.png">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(3)">';
}
}
}else if(pais == 41){
if(maisum == 1){
if(paises[21] == 1){
document.getElementById('pais').innerHTML='<img src="paises/papua.png">';
document.getElementById('espacobaixo').innerHTML='Papua nova Guiné';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,42)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,42)">';
document.getElementById('selepais').innerHTML='<img src="cenario/selepais.png" onclick="selepais(42)">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(4)">';
}else{
document.getElementById('pais').innerHTML='<img src="cenario/paisbloq.png">';
document.getElementById('espacobaixo').innerHTML='???(2)';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,42)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,42)">';
document.getElementById('selepais').innerHTML='<img src="cenario/contbloq.png">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(4)">';
}
}else if(maisum == 0){
if(paises[24] == 1){
document.getElementById('pais').innerHTML='<img src="paises/australia.png">';
document.getElementById('espacobaixo').innerHTML='Austrália';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,45)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,45)">';
document.getElementById('selepais').innerHTML='<img src="cenario/selepais.png" onclick="selepais(45)">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(4)">';
}else{
document.getElementById('pais').innerHTML='<img src="cenario/paisbloq.png">';
document.getElementById('espacobaixo').innerHTML='???(5)';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,45)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,45)">';
document.getElementById('selepais').innerHTML='<img src="cenario/contbloq.png">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(4)">';
}
}
}else if(pais == 42){
if(maisum == 1){
if(paises[22] == 1){
document.getElementById('pais').innerHTML='<img src="paises/fiji.jpg">';
document.getElementById('espacobaixo').innerHTML='Fiji';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,43)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,43)">';
document.getElementById('selepais').innerHTML='<img src="cenario/selepais.png" onclick="selepais(43)">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(4)">';
}else{
document.getElementById('pais').innerHTML='<img src="cenario/paisbloq.png">';
document.getElementById('espacobaixo').innerHTML='???(3)';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,43)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,43)">';
document.getElementById('selepais').innerHTML='<img src="cenario/contbloq.png">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(4)">';
}
}else if(maisum == 0){
document.getElementById('pais').innerHTML='<img src="paises/micronesia.png">';
document.getElementById('espacobaixo').innerHTML='Micronésia';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,41)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,41)">';
document.getElementById('selepais').innerHTML='<img src="cenario/selepais.png" onclick="selepais(41)">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(4)">';
}
}else if(pais == 43){
if(maisum == 1){
if(paises[23] == 1){
document.getElementById('pais').innerHTML='<img src="paises/zelandia.png">';
document.getElementById('espacobaixo').innerHTML='Nova Zelândia';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,44)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,44)">';
document.getElementById('selepais').innerHTML='<img src="cenario/selepais.png" onclick="selepais(44)">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(4)">';
}else{
document.getElementById('pais').innerHTML='<img src="cenario/paisbloq.png">';
document.getElementById('espacobaixo').innerHTML='???(4)';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,44)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,44)">';
document.getElementById('selepais').innerHTML='<img src="cenario/contbloq.png">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(4)">';
}
}else if(maisum == 0){
if(paises[21] == 1){
document.getElementById('pais').innerHTML='<img src="paises/papua.png">';
document.getElementById('espacobaixo').innerHTML='Papua nova Guiné';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,42)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,42)">';
document.getElementById('selepais').innerHTML='<img src="cenario/selepais.png" onclick="selepais(42)">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(4)">';
}else{
document.getElementById('pais').innerHTML='<img src="cenario/paisbloq.png">';
document.getElementById('espacobaixo').innerHTML='???(2)';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,42)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,42)">';
document.getElementById('selepais').innerHTML='<img src="cenario/contbloq.png">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(4)">';
}
}
}else if(pais == 44){
if(maisum == 1){
if(paises[24] == 1){
document.getElementById('pais').innerHTML='<img src="paises/australia.png">';
document.getElementById('espacobaixo').innerHTML='Austrália';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,45)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,45)">';
document.getElementById('selepais').innerHTML='<img src="cenario/selepais.png" onclick="selepais(45)">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(4)">';
}else{
document.getElementById('pais').innerHTML='<img src="cenario/paisbloq.png">';
document.getElementById('espacobaixo').innerHTML='???(5)';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,45)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,45)">';
document.getElementById('selepais').innerHTML='<img src="cenario/contbloq.png">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(4)">';
}
}else if(maisum == 0){
if(paises[22] == 1){
document.getElementById('pais').innerHTML='<img src="paises/fiji.jpg">';
document.getElementById('espacobaixo').innerHTML='Fiji';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,43)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,43)">';
document.getElementById('selepais').innerHTML='<img src="cenario/selepais.png" onclick="selepais(43)">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(4)">';
}else{
document.getElementById('pais').innerHTML='<img src="cenario/paisbloq.png">';
document.getElementById('espacobaixo').innerHTML='???(3)';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,43)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,43)">';
document.getElementById('selepais').innerHTML='<img src="cenario/contbloq.png">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(4)">';
}
}
}else if(pais == 45){
if(maisum == 1){
document.getElementById('pais').innerHTML='<img src="paises/micronesia.png">';
document.getElementById('espacobaixo').innerHTML='Micronésia';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,41)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,41)">';
document.getElementById('selepais').innerHTML='<img src="cenario/selepais.png" onclick="selepais(41)">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(4)">';
}else if(maisum == 0){
if(paises[23] == 1){
document.getElementById('pais').innerHTML='<img src="paises/zelandia.png">';
document.getElementById('espacobaixo').innerHTML='Nova Zelândia';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,44)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,44)">';
document.getElementById('selepais').innerHTML='<img src="cenario/selepais.png" onclick="selepais(44)">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(4)">';
}else{
document.getElementById('pais').innerHTML='<img src="cenario/paisbloq.png">';
document.getElementById('espacobaixo').innerHTML='???(4)';
document.getElementById('setadir').innerHTML='<img src="cenario/setadir.png" onclick="mudapais(1,44)">';
document.getElementById('setaesq').innerHTML='<img src="cenario/setaesq.png" onclick="mudapais(0,44)">';
document.getElementById('selepais').innerHTML='<img src="cenario/contbloq.png">';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mundo(4)">';
}
}
}
}
function selepais(pais){
	if(pais == 01){
document.getElementById('selepais').innerHTML='Estados Unidos';
document.getElementById('espacobaixo').innerHTML='<img src="cenario/ir.png" onclick="ir(0)">';
document.getElementById('setadir').innerHTML='';
document.getElementById('setaesq').innerHTML='';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mudapais(0,02)">';
}else if(pais == 02){
document.getElementById('selepais').innerHTML='Canadá';
document.getElementById('espacobaixo').innerHTML='<img src="cenario/ir.png" onclick="ir(1)">';
document.getElementById('setadir').innerHTML='';
document.getElementById('setaesq').innerHTML='';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mudapais(0,03)">';
}else if(pais == 03){
document.getElementById('selepais').innerHTML='México';
document.getElementById('espacobaixo').innerHTML='<img src="cenario/ir.png" onclick="ir(2)">';
document.getElementById('setadir').innerHTML='';
document.getElementById('setaesq').innerHTML='';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mudapais(0,04)">';
}else if(pais == 04){
document.getElementById('selepais').innerHTML='Brasil';
document.getElementById('espacobaixo').innerHTML='<img src="cenario/ir.png" onclick="ir(3)">';
document.getElementById('setadir').innerHTML='';
document.getElementById('setaesq').innerHTML='';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mudapais(0,05)">';
}else if(pais == 05){
document.getElementById('selepais').innerHTML='Chile';
document.getElementById('espacobaixo').innerHTML='<img src="cenario/ir.png" onclick="ir(4)">';
document.getElementById('setadir').innerHTML='';
document.getElementById('setaesq').innerHTML='';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mudapais(0,01)">';
}else if(pais == 11){
document.getElementById('selepais').innerHTML='Reino unido';
document.getElementById('espacobaixo').innerHTML='<img src="cenario/ir.png" onclick="ir(5)">';
document.getElementById('setadir').innerHTML='';
document.getElementById('setaesq').innerHTML='';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mudapais(0,12)">';
}else if(pais == 12){
document.getElementById('selepais').innerHTML='França';
document.getElementById('espacobaixo').innerHTML='<img src="cenario/ir.png" onclick="ir(6)">';
document.getElementById('setadir').innerHTML='';
document.getElementById('setaesq').innerHTML='';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mudapais(0,13)">';
}else if(pais == 13){
document.getElementById('selepais').innerHTML='Alemanha';
document.getElementById('espacobaixo').innerHTML='<img src="cenario/ir.png" onclick="ir(7)">';
document.getElementById('setadir').innerHTML='';
document.getElementById('setaesq').innerHTML='';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mudapais(0,14)">';
}else if(pais == 14){
document.getElementById('selepais').innerHTML='Bélgica';
document.getElementById('espacobaixo').innerHTML='<img src="cenario/ir.png" onclick="ir(8)">';
document.getElementById('setadir').innerHTML='';
document.getElementById('setaesq').innerHTML='';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mudapais(0,15)">';
}else if(pais == 15){
document.getElementById('selepais').innerHTML='Holanda';
document.getElementById('espacobaixo').innerHTML='<img src="cenario/ir.png" onclick="ir(9)">';
document.getElementById('setadir').innerHTML='';
document.getElementById('setaesq').innerHTML='';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mudapais(0,11)">';
}else if(pais == 21){
document.getElementById('selepais').innerHTML='Egito';
document.getElementById('espacobaixo').innerHTML='<img src="cenario/ir.png" onclick="ir(10)">';
document.getElementById('setadir').innerHTML='';
document.getElementById('setaesq').innerHTML='';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mudapais(0,22)">';
}else if(pais == 22){
document.getElementById('selepais').innerHTML='Congo';
document.getElementById('espacobaixo').innerHTML='<img src="cenario/ir.png" onclick="ir(11)">';
document.getElementById('setadir').innerHTML='';
document.getElementById('setaesq').innerHTML='';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mudapais(0,23)">';
}else if(pais == 23){
document.getElementById('selepais').innerHTML='Nigéria';
document.getElementById('espacobaixo').innerHTML='<img src="cenario/ir.png" onclick="ir(12)">';
document.getElementById('setadir').innerHTML='';
document.getElementById('setaesq').innerHTML='';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mudapais(0,24)">';
}else if(pais == 24){
document.getElementById('selepais').innerHTML='Camarões';
document.getElementById('espacobaixo').innerHTML='<img src="cenario/ir.png" onclick="ir(13)">';
document.getElementById('setadir').innerHTML='';
document.getElementById('setaesq').innerHTML='';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mudapais(0,25)">';
}else if(pais == 25){
document.getElementById('selepais').innerHTML='África do sul';
document.getElementById('espacobaixo').innerHTML='<img src="cenario/ir.png" onclick="ir(14)">';
document.getElementById('setadir').innerHTML='';
document.getElementById('setaesq').innerHTML='';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mudapais(0,21)">';
}else if(pais == 31){
document.getElementById('selepais').innerHTML='Russia';
document.getElementById('espacobaixo').innerHTML='<img src="cenario/ir.png" onclick="ir(15)">';
document.getElementById('setadir').innerHTML='';
document.getElementById('setaesq').innerHTML='';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mudapais(0,32)">';
}else if(pais == 32){
document.getElementById('selepais').innerHTML='India';
document.getElementById('espacobaixo').innerHTML='<img src="cenario/ir.png" onclick="ir(16)">';
document.getElementById('setadir').innerHTML='';
document.getElementById('setaesq').innerHTML='';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mudapais(0,33)">';
}else if(pais == 33){
document.getElementById('selepais').innerHTML='Turquia';
document.getElementById('espacobaixo').innerHTML='<img src="cenario/ir.png" onclick="ir(17)">';
document.getElementById('setadir').innerHTML='';
document.getElementById('setaesq').innerHTML='';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mudapais(0,34)">';
}else if(pais == 34){
document.getElementById('selepais').innerHTML='China';
document.getElementById('espacobaixo').innerHTML='<img src="cenario/ir.png" onclick="ir(18)">';
document.getElementById('setadir').innerHTML='';
document.getElementById('setaesq').innerHTML='';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mudapais(0,35)">';
}else if(pais == 35){
document.getElementById('selepais').innerHTML='Japão';
document.getElementById('espacobaixo').innerHTML='<img src="cenario/ir.png" onclick="ir(19)">';
document.getElementById('setadir').innerHTML='';
document.getElementById('setaesq').innerHTML='';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mudapais(0,31)">';
}else if(pais == 41){
document.getElementById('selepais').innerHTML='Micronésia';
document.getElementById('espacobaixo').innerHTML='<img src="cenario/ir.png" onclick="ir(20)">';
document.getElementById('setadir').innerHTML='';
document.getElementById('setaesq').innerHTML='';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mudapais(0,42)">';
}else if(pais == 42){
document.getElementById('selepais').innerHTML='Papua nova Guiné';
document.getElementById('espacobaixo').innerHTML='<img src="cenario/ir.png" onclick="ir(21)">';
document.getElementById('setadir').innerHTML='';
document.getElementById('setaesq').innerHTML='';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mudapais(0,43)">';
}else if(pais == 43){
document.getElementById('selepais').innerHTML='Fiji';
document.getElementById('espacobaixo').innerHTML='<img src="cenario/ir.png" onclick="ir(22)">';
document.getElementById('setadir').innerHTML='';
document.getElementById('setaesq').innerHTML='';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mudapais(0,44)">';
}else if(pais == 44){
document.getElementById('selepais').innerHTML='Nova Zelândia';
document.getElementById('espacobaixo').innerHTML='<img src="cenario/ir.png" onclick="ir(23)">';
document.getElementById('setadir').innerHTML='';
document.getElementById('setaesq').innerHTML='';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mudapais(0,45)">';
}else if(pais == 45){
document.getElementById('selepais').innerHTML='Austrália';
document.getElementById('espacobaixo').innerHTML='<img src="cenario/ir.png" onclick="ir(24)">';
document.getElementById('setadir').innerHTML='';
document.getElementById('setaesq').innerHTML='';
document.getElementById('voltar').innerHTML='<img src="cenario/voltar.jpg" onclick="mudapais(0,41)">';
}
}
function mundo(conti){
if(em == "" & se == ""){
document.getElementById('cont').innerHTML = "É necessário se registrar no Computador para prosseguir";
}else{
if(conti == 0){
document.getElementById("maze").innerHTML='<div id="mundo" id="world">'+
'<div id="planeta"><img src="cenario/america.jpg" id="continente"></div>'+
'<div id="local"><div id="lado"></div><div id="lado"></div><div id="pais"></div></div>'+
'<div id="blocao">'+
'<div id="selecont"><img src="cenario/selecont.png" onclick="aparecepais(0)"></div>'+
'<div id="selepais"></div></div>'+
'<div id="baixo"><span id="voltar"><img src="cenario/voltar.jpg" onclick="lab(0)"><div id="cantinho"></div></div>'+
'<div id="baixo"><span id="setaesq"><img src="cenario/setaesq.png" onclick="mudacont(0,0)"></span>'+
'<div id="espacobaixo" id="espacobaixo"></div>'+
'<span id="setadir"><img src="cenario/setadir.png" onclick="mudacont(1,0)"></span></div></div>';
document.getElementById("espacobaixo").innerHTML='América';
document.getElementById('cont').innerHTML="Mapa do Mundo";
}else if(conti == 1){
document.getElementById("maze").innerHTML='<div id="mundo" id="world">'+
'<div id="planeta"><img src="cenario/europa.jpg" id="continente"></div>'+
'<div id="local"><div id="lado"></div><div id="lado"></div><div id="pais"></div></div>'+
'<div id="blocao">'+
'<div id="selecont"><img src="cenario/selecont.png" onclick="aparecepais(1)"></div>'+
'<div id="selepais"></div></div>'+
'<div id="baixo"><span id="voltar"><img src="cenario/voltar.jpg" onclick="lab(0)"><div id="cantinho"></div></div>'+
'<div id="baixo"><span id="setaesq"><img src="cenario/setaesq.png" onclick="mudacont(0,1)"></span>'+
'<div id="espacobaixo" id="espacobaixo"></div>'+
'<span id="setadir"><img src="cenario/setadir.png" onclick="mudacont(1,1)"></span></div></div>';
document.getElementById("espacobaixo").innerHTML='Europa';
document.getElementById('cont').innerHTML="Mapa do Mundo";
}else if(conti == 2){
document.getElementById("maze").innerHTML='<div id="mundo" id="world">'+
'<div id="planeta"><img src="cenario/africa.jpg" id="continente"></div>'+
'<div id="local"><div id="lado"></div><div id="lado"></div><div id="pais"></div></div>'+
'<div id="blocao">'+
'<div id="selecont"><img src="cenario/selecont.png" onclick="aparecepais(2)"></div>'+
'<div id="selepais"></div></div>'+
'<div id="baixo"><span id="voltar"><img src="cenario/voltar.jpg" onclick="lab(0)"><div id="cantinho"></div></div>'+
'<div id="baixo"><span id="setaesq"><img src="cenario/setaesq.png" onclick="mudacont(0,2)"></span>'+
'<div id="espacobaixo" id="espacobaixo"></div>'+
'<span id="setadir"><img src="cenario/setadir.png" onclick="mudacont(1,2)"></span></div></div>';
document.getElementById("espacobaixo").innerHTML='África';
document.getElementById('cont').innerHTML="Mapa do Mundo";
}else if(conti == 3){
document.getElementById("maze").innerHTML='<div id="mundo" id="world">'+
'<div id="planeta"><img src="cenario/asia.jpg" id="continente"></div>'+
'<div id="local"><div id="lado"></div><div id="lado"></div><div id="pais"></div></div>'+
'<div id="blocao">'+
'<div id="selecont"><img src="cenario/selecont.png" onclick="aparecepais(3)"></div>'+
'<div id="selepais"></div></div>'+
'<div id="baixo"><span id="voltar"><img src="cenario/voltar.jpg" onclick="lab(0)"><div id="cantinho"></div></div>'+
'<div id="baixo"><span id="setaesq"><img src="cenario/setaesq.png" onclick="mudacont(0,3)"></span>'+
'<div id="espacobaixo" id="espacobaixo"></div>'+
'<span id="setadir"><img src="cenario/setadir.png" onclick="mudacont(1,3)"></span></div></div>';
document.getElementById("espacobaixo").innerHTML='Ásia';
document.getElementById('cont').innerHTML="Mapa do Mundo";
}else if(conti == 4){
document.getElementById("maze").innerHTML='<div id="mundo" id="world">'+
'<div id="planeta"><img src="cenario/oceania.jpg" id="continente"></div>'+
'<div id="local"><div id="lado"></div><div id="lado"></div><div id="pais"></div></div>'+
'<div id="blocao">'+
'<div id="selecont"><img src="cenario/selecont.png" onclick="aparecepais(4)"></div>'+
'<div id="selepais"></div></div>'+
'<div id="baixo"><span id="voltar"><img src="cenario/voltar.jpg" onclick="lab(0)"><div id="cantinho"></div></div>'+
'<div id="baixo"><span id="setaesq"><img src="cenario/setaesq.png" onclick="mudacont(0,4)"></span>'+
'<div id="espacobaixo" id="espacobaixo"></div>'+
'<span id="setadir"><img src="cenario/setadir.png" onclick="mudacont(1,4)"></span></div></div>';
document.getElementById("espacobaixo").innerHTML='Oceania';
document.getElementById('cont').innerHTML="Mapa do Mundo";
}
}
}
function logar(){
	document.getElementById("log").innerHTML = '<form action="index.php" method="post"><center><div id="logtext">Email:</div><br/>'+
	'<input type="text" value="" id="email" size="30"><br/><br/>'+
	'<div id="logtext">Senha:</div><br/>'+
	'<input type="password" value="" id="senha" size="15"><br/><br/>'+
	'<input type="button" value="Logar" onclick="logem()">';
}
function logem(){
	em = document.getElementById('email').value;
	var respemail = new XMLHttpRequest();
  respemail.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    em = this.responseText;
	  if(em == ""){
	  document.getElementById('men').innerHTML = "Email não encontrado";
  }else{
	logse();
  }
    }
  };
  respemail.open("GET", "Login/email.php?e="+em, true);
  respemail.send();
}
function logse(){
	se = document.getElementById('senha').value;
	var respse = new XMLHttpRequest();
  respse.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    var resposta = this.responseText;
	if (resposta == "true"){
		lab(0,em,se);
	}else if(resposta == "false"){
		document.getElementById('men').innerHTML = "Senha Incorreta";
	}
    }
  };
  respse.open("GET", "Login/senha.php?e="+em+"&s="+se, true);
  respse.send();
}
function texto(num){
	switch(num){
		case 1:
		document.getElementById('cont').innerHTML = "Computador";break;
		case 10:
		document.getElementById('cont').innerHTML = "Laboratório";break;
		case 2:
		document.getElementById('cont').innerHTML = "Sair";break;
		case 20:
		document.getElementById('cont').innerHTML = "Computador";break;
		case 3:
		document.getElementById('cont').innerHTML = "Registrar-se";break;
		case 30:
		document.getElementById('cont').innerHTML = "Computador";break;
		case 4:
		document.getElementById('cont').innerHTML = "Salvar";break;
		case 40:
		document.getElementById('cont').innerHTML = "Computador";break;
		case 5:
		document.getElementById('cont').innerHTML = "Baralho";break;
		case 50:
		document.getElementById('cont').innerHTML = "Laboratório";break;
	}
}
function pc(){
	if(rar[0] == 1){
	var pc = new XMLHttpRequest();
  pc.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    document.getElementById('maze').innerHTML = this.responseText;
	if(nick != ""){
		document.getElementById('pc1').innerHTML = '<img src="cenario/save.png" onmouseover="texto(4)" onmouseout="texto(40)" onclick="salvar(em,se)">'
	}
    }
  };
  pc.open("GET", "cenario/pc.php", true);
  pc.send();
}else{
	document.getElementById('cont').innerHTML = "Pegue o arquivo RAR";
}
}
function registrar(){
    document.getElementById('telapc').innerHTML = "<center><h1>Registrar-se</h1><br/>Nick:<input type='text' id='novonick' size='30px'><br/><br/>Email:<input type='text' id='novoemail' size='30px'><br/><br/>Senha:<input type='password' id='novasenha' size='15px'><br/><br/><input type='button' value='Registrar-se' onclick='reg()'><br/><br/><input type='button' value='voltar' onclick='fundopc()'></center>";
}
function fundopc(){
	var fundopc = new XMLHttpRequest();
  fundopc.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    document.getElementById('telapc').innerHTML = this.responseText;
	document.getElementById('cont').innerHTML = "Computador";
	if(nick != ""){
		document.getElementById('pc1').innerHTML = '<img src="cenario/save.png" onmouseover="texto(4)" onmouseout="texto(40)" onclick="salvar()">';
	}
    }
  };
  fundopc.open("GET", "cenario/fundopc.php", true);
  fundopc.send();
}
function salvar(){
document.getElementById('telapc').innerHTML = "<center><font size='30px' color='white'><span id='save'>Salvar seu progresso?<br/><br/><input type='button' value='salvar' onclick='save()'></span><br/><br/><input type='button' value='voltar' onclick='fundopc()'></center>";
}
function save(){
	var save = new XMLHttpRequest();
  save.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
	if(this.responseText == 'true'){
		document.getElementById('save').innerHTML = "Salvo com sucesso";
	}else{
		document.getElementById('save').innerHTML = "Erro";
	}
    }
  };
  save.open("GET", "Login/save.php?em="+em+"&se="+se+"&vid="+vid+"&conti0="+conti[0]+"&conti1="+conti[1]+"&conti2="+conti[2]+"&conti3="+conti[3]+"&conti4="+conti[4]+"&inv1="+inv[0]+"&inv2="+inv[1]+"&inv3="+inv[2]+"&inv4="+inv[3]+"&inv5="+inv[4]+"&inv6="+inv[5]+"&inv7="+inv[6]+"&inv8="+inv[7]+"&inv9="+inv[8]+"&inv10="+inv[9]+"&paises0="+paises[0]+"&paises1="+paises[1]+"&paises2="+paises[2]+"&paises3="+paises[3]+"&paises4="+paises[4]+"&paises5="+paises[5]+"&paises6="+paises[6]+"&paises7="+paises[7]+"&paises8="+paises[8]+"&paises9="+paises[9]+"&paises10="+paises[10]+"&paises11="+paises[11]+"&paises12="+paises[12]+"&paises13="+paises[13]+"&paises14="+paises[14]+"&paises15="+paises[15]+"&paises16="+paises[16]+"&paises17="+paises[17]+"&paises18="+paises[18]+"&paises19="+paises[19]+"&paises20="+paises[20]+"&paises21="+paises[21]+"&paises22="+paises[22]+"&paises23="+paises[23]+"&paises24="+paises[24], true);
  save.send();
  document.getElementById('save').innerHTML = "<img src='Login/loading.gif'/ style='width:64px;height:64px;'>";
}
function reg(){
	var reg = new XMLHttpRequest();
  reg.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
	if(this.responseText == 'true'){
		lab(0);
	}else{
		document.getElementById('telapc').innerHTML = "Erro";
	}
    }
  };
  em = document.getElementById('novoemail').value;
  se = document.getElementById('novasenha').value;
  nick = document.getElementById('novonick').value;
  reg.open("GET", "Login/reg.php?em="+em+"&se="+se+"&vid="+vid+"&nick="+nick+"&conti0="+conti[0]+"&conti1="+conti[1]+"&conti2="+conti[2]+"&conti3="+conti[3]+"&conti4="+conti[4]+"&inv1="+inv[0]+"&inv2="+inv[1]+"&inv3="+inv[2]+"&inv4="+inv[3]+"&inv5="+inv[4]+"&inv6="+inv[5]+"&inv7="+inv[6]+"&inv8="+inv[7]+"&inv9="+inv[8]+"&inv10="+inv[9]+"&paises0="+paises[0]+"&paises1="+paises[1]+"&paises2="+paises[2]+"&paises3="+paises[3]+"&paises4="+paises[4]+"&paises5="+paises[5]+"&paises6="+paises[6]+"&paises7="+paises[7]+"&paises8="+paises[8]+"&paises9="+paises[9]+"&paises10="+paises[10]+"&paises11="+paises[11]+"&paises12="+paises[12]+"&paises13="+paises[13]+"&paises14="+paises[14]+"&paises15="+paises[15]+"&paises16="+paises[16]+"&paises17="+paises[17]+"&paises18="+paises[18]+"&paises19="+paises[19]+"&paises20="+paises[20]+"&paises21="+paises[21]+"&paises22="+paises[22]+"&paises23="+paises[23]+"&paises24="+paises[24], true);
  reg.send();
}
function baralho(){
	document.getElementById('cont').innerHTML = "";
	document.getElementById('maze').innerHTML = '<div id="blocotitulo">Baralho</div>'+
	
	'<div id="pausa"></div>'+
	'<div id="paus2"></div>'+
	'<div id="paus3"></div>'+
	'<div id="paus4"></div>'+
	'<div id="paus5"></div>'+
	'<div id="paus6"></div>'+
	'<div id="paus7"></div>'+
	'<div id="paus8"></div>'+
	'<div id="paus9"></div>'+
	'<div id="paus10"></div>'+
	
	'<div id="pausj"></div>'+
	'<div id="pausq"></div>'+
	'<div id="pausk"></div>'+
	'<div id="fundobaralho"></div>'+
	'<div id="fundobaralho"></div>'+
	'<div id="fundobaralho"></div>'+
	'<div id="fundobaralho"></div>'+
	'<div id="fundobaralho"></div>'+
	'<div id="fundobaralho"></div>'+
	'<div id="fundobaralho"></div>'+
	
	'<div id="copasa"></div>'+
	'<div id="copas2"></div>'+
	'<div id="copas3"></div>'+
	'<div id="copas4"></div>'+
	'<div id="copas5"></div>'+
	'<div id="copas6"></div>'+
	'<div id="copas7"></div>'+
	'<div id="copas8"></div>'+
	'<div id="copas9"></div>'+
	'<div id="copas10"></div>'+
	
	'<div id="copasj"></div>'+
	'<div id="copasq"></div>'+
	'<div id="copask"></div>'+
	'<div id="fundobaralho"></div>'+
	'<div id="fundobaralho"></div>'+
	'<div id="fundobaralho"></div>'+
	'<div id="fundobaralho"></div>'+
	'<div id="fundobaralho"></div>'+
	'<div id="fundobaralho"></div>'+
	'<div id="fundobaralho"></div>'+
	
	'<div id="espadasa"></div>'+
	'<div id="espadas2"></div>'+
	'<div id="espadas3"></div>'+
	'<div id="espadas4"></div>'+
	'<div id="espadas5"></div>'+
	'<div id="espadas6"></div>'+
	'<div id="espadas7"></div>'+
	'<div id="espadas8"></div>'+
	'<div id="espadas9"></div>'+
	'<div id="espadas10"></div>'+
	
	'<div id="espadasj"></div>'+
	'<div id="espadasq"></div>'+
	'<div id="espadask"></div>'+
	'<div id="fundobaralho"></div>'+
	'<div id="fundobaralho"></div>'+
	'<div id="fundobaralho"></div>'+
	'<div id="fundobaralho"></div>'+
	'<div id="fundobaralho"></div>'+
	'<div id="fundobaralho"></div>'+
	'<div id="fundobaralho"></div>'+
	
	'<div id="ourosa"></div>'+
	'<div id="ouros2"></div>'+
	'<div id="ouros3"></div>'+
	'<div id="ouros4"></div>'+
	'<div id="ouros5"></div>'+
	'<div id="ouros6"></div>'+
	'<div id="ouros7"></div>'+
	'<div id="ouros8"></div>'+
	'<div id="ouros9"></div>'+
	'<div id="ouros10"></div>'+
	
	'<div id="ourosj"></div>'+
	'<div id="ourosq"></div>'+
	'<div id="ourosk"></div>'+
	'<div id="fundobaralho"></div>'+
	'<div id="fundobaralho"></div>'+
	'<div id="fundobaralho"></div>'+
	'<div id="fundobaralho"></div>'+
	'<div id="fundobaralho"></div>'+
	'<div id="fundobaralho"></div>'+
	'<div id="fundobaralho"></div>'+
	
	'<div id="joker"></div>'+
	'<div id="blocotitulomenor" onclick="lab(0)">Voltar</div>'+
	'<div id="joker2"></div>';
	
if(paus[0] == 1){
	document.getElementById('pausa').innerHTML = '<center><img src="cenario/baralho/AP.png"></center>';
}else{
	document.getElementById('pausa').innerHTML = '';
}
if(paus[1] == 1){
	document.getElementById('paus2').innerHTML = '<center><img src="cenario/baralho/2P.png"></center>';
}else{
	document.getElementById('paus2').innerHTML = '';
}
if(paus[2] == 1){
	document.getElementById('paus3').innerHTML = '<center><img src="cenario/baralho/3P.png"></center>';
}else{
	document.getElementById('paus3').innerHTML = '';
}
if(paus[3] == 1){
	document.getElementById('paus4').innerHTML = '<center><img src="cenario/baralho/4P.png"></center>';
}else{
	document.getElementById('paus4').innerHTML = '';
}
if(paus[4] == 1){
	document.getElementById('paus5').innerHTML = '<center><img src="cenario/baralho/5P.png"></center>';
}else{
	document.getElementById('paus5').innerHTML = '';
}
if(paus[5] == 1){
	document.getElementById('paus6').innerHTML = '<center><img src="cenario/baralho/6P.png"></center>';
}else{
	document.getElementById('paus6').innerHTML = '';
}
if(paus[6] == 1){
	document.getElementById('paus7').innerHTML = '<center><img src="cenario/baralho/7P.png"></center>';
}else{
	document.getElementById('paus7').innerHTML = '';
}
if(paus[7] == 1){
	document.getElementById('paus8').innerHTML = '<center><img src="cenario/baralho/8P.png"></center>';
}else{
	document.getElementById('paus8').innerHTML = '';
}
if(paus[8] == 1){
	document.getElementById('paus9').innerHTML = '<center><img src="cenario/baralho/9P.png"></center>';
}else{
	document.getElementById('paus9').innerHTML = '';
}
if(paus[9] == 1){
	document.getElementById('paus10').innerHTML = '<center><img src="cenario/baralho/10P.png"></center>';
}else{
	document.getElementById('paus10').innerHTML = '';
}
if(paus[10] == 1){
	document.getElementById('pausj').innerHTML = '<center><img src="cenario/baralho/JP.png"></center>';
}else{
	document.getElementById('pausj').innerHTML = '';
}
if(paus[11] == 1){
	document.getElementById('pausq').innerHTML = '<center><img src="cenario/baralho/QP.png"></center>';
}else{
	document.getElementById('pausq').innerHTML = '';
}
if(paus[12] == 1){
	document.getElementById('pausk').innerHTML = '<center><img src="cenario/baralho/KP.png"></center>';
}else{
	document.getElementById('pausk').innerHTML = '';
}
if(copas[0] == 1){
	document.getElementById('copasa').innerHTML = '<center><img src="cenario/baralho/AC.png"></center>';
}else{
	document.getElementById('copasa').innerHTML = '';
}
if(copas[1] == 1){
	document.getElementById('copas2').innerHTML = '<center><img src="cenario/baralho/2C.png"></center>';
}else{
	document.getElementById('copas2').innerHTML = '';
}
if(copas[2] == 1){
	document.getElementById('copas3').innerHTML = '<center><img src="cenario/baralho/3C.png"></center>';
}else{
	document.getElementById('copas3').innerHTML = '';
}
if(copas[3] == 1){
	document.getElementById('copas4').innerHTML = '<center><img src="cenario/baralho/4C.png"></center>';
}else{
	document.getElementById('copas4').innerHTML = '';
}
if(copas[4] == 1){
	document.getElementById('copas5').innerHTML = '<center><img src="cenario/baralho/5C.png"></center>';
}else{
	document.getElementById('copas5').innerHTML = '';
}
if(copas[5] == 1){
	document.getElementById('copas6').innerHTML = '<center><img src="cenario/baralho/6C.png"></center>';
}else{
	document.getElementById('copas6').innerHTML = '';
}
if(copas[6] == 1){
	document.getElementById('copas7').innerHTML = '<center><img src="cenario/baralho/7C.png"></center>';
}else{
	document.getElementById('copas7').innerHTML = '';
}
if(copas[7] == 1){
	document.getElementById('copas8').innerHTML = '<center><img src="cenario/baralho/8C.png"></center>';
}else{
	document.getElementById('copas8').innerHTML = '';
}
if(copas[8] == 1){
	document.getElementById('copas9').innerHTML = '<center><img src="cenario/baralho/9C.png"></center>';
}else{
	document.getElementById('copas9').innerHTML = '';
}
if(copas[9] == 1){
	document.getElementById('copas10').innerHTML = '<center><img src="cenario/baralho/10C.png"></center>';
}else{
	document.getElementById('copas10').innerHTML = '';
}
if(copas[10] == 1){
	document.getElementById('copasj').innerHTML = '<center><img src="cenario/baralho/JC.png"></center>';
}else{
	document.getElementById('copasj').innerHTML = '';
}
if(copas[11] == 1){
	document.getElementById('copasq').innerHTML = '<center><img src="cenario/baralho/QC.png"></center>';
}else{
	document.getElementById('copasq').innerHTML = '';
}
if(copas[12] == 1){
	document.getElementById('copask').innerHTML = '<center><img src="cenario/baralho/KC.png"></center>';
}else{
	document.getElementById('copask').innerHTML = '';
}
if(espadas[0] == 1){
	document.getElementById('espadasa').innerHTML = '<center><img src="cenario/baralho/AE.png"></center>';
}else{
	document.getElementById('espadasa').innerHTML = '';
}
if(espadas[1] == 1){
	document.getElementById('espadas2').innerHTML = '<center><img src="cenario/baralho/2E.png"></center>';
}else{
	document.getElementById('espadas2').innerHTML = '';
}
if(espadas[2] == 1){
	document.getElementById('espadas3').innerHTML = '<center><img src="cenario/baralho/3E.png"></center>';
}else{
	document.getElementById('espadas3').innerHTML = '';
}
if(espadas[3] == 1){
	document.getElementById('espadas4').innerHTML = '<center><img src="cenario/baralho/4E.png"></center>';
}else{
	document.getElementById('espadas4').innerHTML = '';
}
if(espadas[4] == 1){
	document.getElementById('espadas5').innerHTML = '<center><img src="cenario/baralho/5E.png"></center>';
}else{
	document.getElementById('espadas5').innerHTML = '';
}
if(espadas[5] == 1){
	document.getElementById('espadas6').innerHTML = '<center><img src="cenario/baralho/6E.png"></center>';
}else{
	document.getElementById('espadas6').innerHTML = '';
}
if(espadas[6] == 1){
	document.getElementById('espadas7').innerHTML = '<center><img src="cenario/baralho/7E.png"></center>';
}else{
	document.getElementById('espadas7').innerHTML = '';
}
if(espadas[7] == 1){
	document.getElementById('espadas8').innerHTML = '<center><img src="cenario/baralho/8E.png"></center>';
}else{
	document.getElementById('espadas8').innerHTML = '';
}
if(espadas[8] == 1){
	document.getElementById('espadas9').innerHTML = '<center><img src="cenario/baralho/9E.png"></center>';
}else{
	document.getElementById('espadas9').innerHTML = '';
}
if(espadas[9] == 1){
	document.getElementById('espadas10').innerHTML = '<center><img src="cenario/baralho/10E.png"></center>';
}else{
	document.getElementById('espadas10').innerHTML = '';
}
if(espadas[10] == 1){
	document.getElementById('espadasj').innerHTML = '<center><img src="cenario/baralho/JE.png"></center>';
}else{
	document.getElementById('espadasj').innerHTML = '';
}
if(espadas[11] == 1){
	document.getElementById('espadasq').innerHTML = '<center><img src="cenario/baralho/QE.png"></center>';
}else{
	document.getElementById('espadasq').innerHTML = '';
}
if(espadas[12] == 1){
	document.getElementById('espadask').innerHTML = '<center><img src="cenario/baralho/KE.png"></center>';
}else{
	document.getElementById('espadask').innerHTML = '';
}
if(ouros[0] == 1){
	document.getElementById('ourosa').innerHTML = '<center><img src="cenario/baralho/AO.png"></center>';
}else{
	document.getElementById('ourosa').innerHTML = '';
}
if(ouros[1] == 1){
	document.getElementById('ouros2').innerHTML = '<center><img src="cenario/baralho/2O.png"></center>';
}else{
	document.getElementById('ouros2').innerHTML = '';
}
if(ouros[2] == 1){
	document.getElementById('ouros3').innerHTML = '<center><img src="cenario/baralho/3O.png"></center>';
}else{
	document.getElementById('ouros3').innerHTML = '';
}
if(ouros[3] == 1){
	document.getElementById('ouros4').innerHTML = '<center><img src="cenario/baralho/4O.png"></center>';
}else{
	document.getElementById('ouros4').innerHTML = '';
}
if(ouros[4] == 1){
	document.getElementById('ouros5').innerHTML = '<center><img src="cenario/baralho/5O.png"></center>';
}else{
	document.getElementById('ouros5').innerHTML = '';
}
if(ouros[5] == 1){
	document.getElementById('ouros6').innerHTML = '<center><img src="cenario/baralho/6O.png"></center>';
}else{
	document.getElementById('ouros6').innerHTML = '';
}
if(ouros[6] == 1){
	document.getElementById('ouros7').innerHTML = '<center><img src="cenario/baralho/7O.png"></center>';
}else{
	document.getElementById('ouros7').innerHTML = '';
}
if(ouros[7] == 1){
	document.getElementById('ouros8').innerHTML = '<center><img src="cenario/baralho/8O.png"></center>';
}else{
	document.getElementById('ouros8').innerHTML = '';
}
if(ouros[8] == 1){
	document.getElementById('ouros9').innerHTML = '<center><img src="cenario/baralho/9O.png"></center>';
}else{
	document.getElementById('ouros9').innerHTML = '';
}
if(ouros[9] == 1){
	document.getElementById('ouros10').innerHTML = '<center><img src="cenario/baralho/10O.png"></center>';
}else{
	document.getElementById('ouros10').innerHTML = '';
}
if(ouros[10] == 1){
	document.getElementById('ourosj').innerHTML = '<center><img src="cenario/baralho/JO.png"></center>';
}else{
	document.getElementById('ourosj').innerHTML = '';
}
if(ouros[11] == 1){
	document.getElementById('ourosq').innerHTML = '<center><img src="cenario/baralho/QO.png"></center>';
}else{
	document.getElementById('ourosq').innerHTML = '';
}
if(ouros[12] == 1){
	document.getElementById('ourosk').innerHTML = '<center><img src="cenario/baralho/KO.png"></center>';
}else{
	document.getElementById('ourosk').innerHTML = '';
}
if(joker[0] == 1){
	document.getElementById('joker').innerHTML = '<center><img src="cenario/baralho/joker.png"></center>';
}else{
	document.getElementById('joker').innerHTML = '';
}
if(joker[1] == 1){
	document.getElementById('joker2').innerHTML = '<center><img src="cenario/baralho/joker2.png"></center>';
}else{
	document.getElementById('joker2').innerHTML = '';
}
}
function ir(pais){
switch(pais){
	case 0: document.getElementById('maze').innerHTML = '<center><video onclick="pais(0)" onended="pais(0)" width="640px" height="360px" src="paises/videos/euavid.mp4" type="video/mp4" autoplay></video></center>';break;
	case 1: document.getElementById('maze').innerHTML = '<center><video onclick="pais(1)" onended="pais(1)" width="640px" height="360px" src="paises/videos/canvid.mp4" type="video/mp4" autoplay></video></center>';break;
	case 2: document.getElementById('maze').innerHTML = '<center><video onclick="pais(2)" onended="pais(2)" width="640px" height="360px" src="paises/videos/mexvid.mp4" type="video/mp4" autoplay></video></center>';break;
	case 3: document.getElementById('maze').innerHTML = '<center><video onclick="pais(3)" onended="pais(3)" width="640px" height="360px" src="paises/videos/bravid.mp4" type="video/mp4" autoplay></video></center>';break;
	case 4: document.getElementById('maze').innerHTML = '<center><video onclick="pais(4)" onended="pais(4)" width="640px" height="360px" src="paises/videos/chivid.mp4" type="video/mp4" autoplay></video></center>';break;
	case 5: document.getElementById('maze').innerHTML = '<center><video onclick="pais(5)" onended="pais(5)" width="640px" height="360px" src="paises/videos/reivid.mp4" type="video/mp4" autoplay></video></center>';break;
	case 6: document.getElementById('maze').innerHTML = '<center><video onclick="pais(6)" onended="pais(6)" width="640px" height="360px" src="paises/videos/fravid.mp4" type="video/mp4" autoplay></video></center>';break;
	case 7: document.getElementById('maze').innerHTML = '<center><video onclick="pais(7)" onended="pais(7)" width="640px" height="360px" src="paises/videos/alevid.mp4" type="video/mp4" autoplay></video></center>';break;
	case 8: document.getElementById('maze').innerHTML = '<center><video onclick="pais(8)" onended="pais(8)" width="640px" height="360px" src="paises/videos/belvid.mp4" type="video/mp4" autoplay></video></center>';break;
	case 9: document.getElementById('maze').innerHTML = '<center><video onclick="pais(9)" onended="pais(9)" width="640px" height="360px" src="paises/videos/holvid.mp4" type="video/mp4" autoplay></video></center>';break;
	case 10: document.getElementById('maze').innerHTML = '<center><video onclick="pais(10)" onended="pais(10)" width="640px" height="360px" src="paises/videos/egivid.mp4" type="video/mp4" autoplay></video></center>';break;
	case 11: document.getElementById('maze').innerHTML = '<center><video onclick="pais(11)" onended="pais(11)" width="640px" height="360px" src="paises/videos/convid.mp4" type="video/mp4" autoplay></video></center>';break;
	case 12: document.getElementById('maze').innerHTML = '<center><video onclick="pais(12)" onended="pais(12)" width="640px" height="360px" src="paises/videos/nigvid.mp4" type="video/mp4" autoplay></video></center>';break;
	case 13: document.getElementById('maze').innerHTML = '<center><video onclick="pais(13)" onended="pais(13)" width="640px" height="360px" src="paises/videos/camvid.mp4" type="video/mp4" autoplay></video></center>';break;
	case 14: document.getElementById('maze').innerHTML = '<center><video onclick="pais(14)" onended="pais(14)" width="640px" height="360px" src="paises/videos/afrvid.mp4" type="video/mp4" autoplay></video></center>';break;
	case 15: document.getElementById('maze').innerHTML = '<center><video onclick="pais(15)" onended="pais(15)" width="640px" height="360px" src="paises/videos/rusvid.mp4" type="video/mp4" autoplay></video></center>';break;
	case 16: document.getElementById('maze').innerHTML = '<center><video onclick="pais(16)" onended="pais(16)" width="640px" height="360px" src="paises/videos/indvid.mp4" type="video/mp4" autoplay></video></center>';break;
	case 17: document.getElementById('maze').innerHTML = '<center><video onclick="pais(17)" onended="pais(17)" width="640px" height="360px" src="paises/videos/turvid.mp4" type="video/mp4" autoplay></video></center>';break;
	case 18: document.getElementById('maze').innerHTML = '<center><video onclick="pais(18)" onended="pais(18)" width="640px" height="360px" src="paises/videos/chnvid.mp4" type="video/mp4" autoplay></video></center>';break;
	case 19: document.getElementById('maze').innerHTML = '<center><video onclick="pais(19)" onended="pais(18)" width="640px" height="360px" src="paises/videos/japvid.mp4" type="video/mp4" autoplay></video></center>';break;
	case 20: document.getElementById('maze').innerHTML = '<center><video onclick="pais(20)" onended="pais(20)" width="640px" height="360px" src="paises/videos/micvid.mp4" type="video/mp4" autoplay></video></center>';break;
	case 21: document.getElementById('maze').innerHTML = '<center><video onclick="pais(21)" onended="pais(21)" width="640px" height="360px" src="paises/videos/papvid.mp4" type="video/mp4" autoplay></video></center>';break;
	case 22: document.getElementById('maze').innerHTML = '<center><video onclick="pais(22)" onended="pais(22)" width="640px" height="360px" src="paises/videos/fijvid.mp4" type="video/mp4" autoplay></video></center>';break;
	case 23: document.getElementById('maze').innerHTML = '<center><video onclick="pais(23)" onended="pais(23)" width="640px" height="360px" src="paises/videos/zelvid.mp4" type="video/mp4" autoplay></video></center>';break;
	case 24: document.getElementById('maze').innerHTML = '<center><video onclick="pais(24)" onended="pais(24)" width="640px" height="360px" src="paises/videos/ausvid.mp4" type="video/mp4" autoplay></video></center>';break;
}
}
function pais(pais){
	document.getElementById('cont').innerHTML = '<input type="button" value="Voltar" onclick="lab(0)">';
switch(pais){
	case 0: document.getElementById('maze').innerHTML = 'Mapa dos EUA';break;
	case 1: document.getElementById('maze').innerHTML = 'Mapa do Canadá';break;
	case 2: document.getElementById('maze').innerHTML = 'Mapa do México';break;
	case 3: document.getElementById('maze').innerHTML = 'Mapa do Brasil';break;
	case 4: document.getElementById('maze').innerHTML = 'Mapa do Chile';break;
	case 5: document.getElementById('maze').innerHTML = 'Mapa do Reino Unido';break;
	case 6: document.getElementById('maze').innerHTML = 'Mapa da França';break;
	case 7: document.getElementById('maze').innerHTML = 'Mapa da Alemanha';break;
	case 8: document.getElementById('maze').innerHTML = 'Mapa da Bélgica';break;
	case 9: document.getElementById('maze').innerHTML = 'Mapa da Holanda';break;
	case 10: document.getElementById('maze').innerHTML = 'Mapa do Egito';break;
	case 11: document.getElementById('maze').innerHTML = 'Mapa do Congo';break;
	case 12: document.getElementById('maze').innerHTML = 'Mapa da Nigéria';break;
	case 13: document.getElementById('maze').innerHTML = 'Mapa do Camarões';break;
	case 14: document.getElementById('maze').innerHTML = 'Mapa da Africa do Sul';break;
	case 15: document.getElementById('maze').innerHTML = 'Mapa da Russia';break;
	case 16: document.getElementById('maze').innerHTML = 'Mapa da India';break;
	case 17: document.getElementById('maze').innerHTML = 'Mapa da Turquia';break;
	case 18: document.getElementById('maze').innerHTML = 'Mapa da China';break;
	case 19: document.getElementById('maze').innerHTML = 'Mapa do Japão';break;
	case 20: document.getElementById('maze').innerHTML = 'Mapa da Micronésia';break;
	case 21: document.getElementById('maze').innerHTML = 'Mapa da Papua Nova Guiné';break;
	case 22: document.getElementById('maze').innerHTML = 'Mapa do Fiji';break;
	case 23: document.getElementById('maze').innerHTML = 'Mapa da Nova Zelândia';break;
	case 24: document.getElementById('maze').innerHTML = 'Mapa da Austrália';break;
}
}
function colocainv(item,id){
if(inv[0] === "cenario/vazio.png"){
	document.getElementById('imginv1').src = item;
	inv[0] = item;
}else if(inv[1] === "cenario/vazio.png"){
	document.getElementById('imginv2').src = item;
	inv[1] = item;
}else if(inv[2] === "cenario/vazio.png"){
	document.getElementById('imginv3').src = item;
	inv[2] = item;
}else if(inv[3] === "cenario/vazio.png"){
	document.getElementById('imginv4').src = item;
	inv[3] = item;
}else if(inv[4] === "cenario/vazio.png"){
	document.getElementById('imginv5').src = item;
	inv[4] = item;
}else if(inv[5] === "cenario/vazio.png"){
	document.getElementById('imginv6').src = item;
	inv[5] = item;
}else if(inv[6] === "cenario/vazio.png"){
	document.getElementById('imginv7').src = item;
	inv[6] = item;
}else if(inv[7] === "cenario/vazio.png"){
	document.getElementById('imginv8').src = item;
	inv[7] = item;
}else if(inv[8] === "cenario/vazio.png"){
	document.getElementById('imginv9').src = item;
	inv[8] = item;
}else if(inv[9] === "cenario/vazio.png"){
	document.getElementById('imginv10').src = item;
	inv[9] = item;
}else{
	document.getElementById('caixadetexto').innerHTML = "Não Há espaço no inventário";
}
}
function tirainv(item){
if(inv[0] === item){
	document.getElementById('imginv1').src = "cenario/vazio.png";
	inv[0] = "cenario/vazio.png";
}else if(inv[1] === item){
	document.getElementById('imginv2').src = "cenario/vazio.png";
	inv[1] = "cenario/vazio.png";
}else if(inv[2] === item){
	document.getElementById('imginv3').src = "cenario/vazio.png";
	inv[2] = "cenario/vazio.png";
}else if(inv[3] === item){
	document.getElementById('imginv4').src = "cenario/vazio.png";
	inv[3] = "cenario/vazio.png";
}else if(inv[4] === item){
	document.getElementById('imginv5').src = "cenario/vazio.png";
	inv[4] = "cenario/vazio.png";
}else if(inv[5] === item){
	document.getElementById('imginv6').src = "cenario/vazio.png";
	inv[5] = "cenario/vazio.png";
}else if(inv[6] === item){
	document.getElementById('imginv7').src = "cenario/vazio.png";
	inv[6] = "cenario/vazio.png";
}else if(inv[7] === item){
	document.getElementById('imginv8').src = "cenario/vazio.png";
	inv[7] = "cenario/vazio.png";
}else if(inv[8] === item){
	document.getElementById('imginv9').src = "cenario/vazio.png";
	inv[8] = "cenario/vazio.png";
}else if(inv[9] === item){
	document.getElementById('imginv10').src = "cenario/vazio.png";
	inv[9] = "cenario/vazio.png";
}
}
function baixarar(id){
	document.getElementById('rar').innerHTML = "";
	switch(id){
		case "rar1": rar[0] = 1;break;
	}
}