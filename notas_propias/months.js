//function list_months()
//{
	var months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
	/*for(i = 0; i < months.length; i++)
	{
		alert(months[i])
	}*/
	
	for(var i in months)
	{
		//alert(months[i]);
	}
	
	var cadena = "En un lugar de la Mancha de cuyo nombre no quiero acordarme...";
var letras = cadena.split("");
var resultado = "";
 
for(i in letras) {
  if(letras[i] == 'a') {
    continue;
  }
 // else {
    resultado += letras[i];
  //}
}
//alert(resultado);


function muestraMensaje() {
  alert('Gracias por pinchar');
}

function resalta(elemento) {
  switch(elemento.style.borderColor) {
    case 'silver':
    case 'silver silver silver silver':
    case '#c0c0c0':
      elemento.style.borderColor = 'black';
      break;
    case 'black':
    case 'black black black black':
    case '#000000':
      elemento.style.borderColor = 'silver';
      break;
  }
}

window.onload = function() {
  document.getElementById("pinchable").onclick = muestraMensaje;
}

//--En el siguiente ejemplo, se añaden eventos a los elementos de tipo input=text de un formulario complejo:

/*
function resalta() {
  // Código JavaScript
}


window.onload = function() {
  var formulario = document.getElementById("formulario");
  var camposInput = formulario.getElementsByTagName("input");
 
  for(var i=0; i<camposInput.length; i++) {
    if(camposInput[i].type == "text") {
      camposInput[i].onclick = resalta;
    }
  }
}*/
	
	
//}

function resalta(elEvento) {
  var evento = elEvento || window.event;  // Se debe capturar asi el evento para que funcione en todos los navegadores
  switch(evento.type) {
    case 'mouseover':
      this.style.borderColor = 'black';
      break;
    case 'mouseout':
      this.style.borderColor = 'silver';
      break;
  }
}
 
window.onload = function() {
  document.getElementById("seccion").onmouseover = resalta;
  document.getElementById("seccion").onmouseout = resalta;
}


// Manejo de eventos de teclas

window.onload = function() {
  document.onkeyup = muestraInformacion;
  document.onkeypress = muestraInformacion;
  document.onkeydown = muestraInformacion;
}
 
function muestraInformacion(elEvento) {
  var evento = window.event || elEvento;
 
  var mensaje = "Tipo de evento: " + evento.type + "<br>" +
                "Propiedad keyCode: " + evento.keyCode + "<br>" +
                "Propiedad charCode: " + evento.charCode + "<br>" +
                "Carácter pulsado: " + String.fromCharCode(evento.charCode);
 
  info.innerHTML += "<br>--------------------------------------<br>" + mensaje
}


if(evento.altKey) {   //altKey, ctrlKey y shiftKey
  alert('Estaba pulsada la tecla ALT');
}


function manejador(elEvento) {
  var evento = elEvento || window.event;
  var caracter = evento.charCode || evento.keyCode;
  alert("El carácter pulsado es: " + String.fromCharCode(caracter));
}
 
document.onkeypress = manejador;


// Eventos de raton

function muestraInformacion(elEvento) {
  var evento = elEvento || window.event;
  var coordenadaX = evento.clientX;
  var coordenadaY = evento.clientY;
  alert("Has pulsado el ratón en la posición: " + coordenadaX + ", " + coordenadaY);
}
document.onclick = muestraInformacion;


var coordenadaX = evento.screenX;
var coordenadaY = evento.screenY;

var ie = navigator.userAgent.toLowerCase().indexOf('msie')!=-1;
 
if(ie) {
  coordenadaX = evento.clientX + document.body.scrollLeft;
  coordenadaY = evento.clientY + document.body.scrollTop;
}
else {
  coordenadaX = evento.pageX;
  coordenadaY = evento.pageY;
}
alert("Has pulsado el ratón en la posición: " + coordenadaX + ", " + coordenadaY + " respecto de la página web");