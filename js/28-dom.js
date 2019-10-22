'use strict'

//DOM Document Object Model


// getElementById obtiene el contenido del id
//  con innerHTML obtiene el texto que esta dentro de la etiqueta
//var caja = document.getElementById("caja"); //var caja = document.getElementById("caja").innerHTML;


// otra forma de traer datos desde html es con querySelector y se hace la llamada con #(id) y . (una clase) como en css
var micaja = document.querySelector("#caja");
// cambiar texto de html por medio de js

caja.innerHTML = "texto desde js";

// se puede cambiar el estilo desde js ejemplo
caja.style.background="red";
caja.style.padding ="20px";
caja.style.color = "white";
// con el atributo className le puedo agregar una clase al div, ejempplo

caja.className = "clase";

// se puede cambiar por ejemplo el background en js con una funcion

function cambiacolor(color){
caja.style.background = color;
}
//console.log(caja);

// encontrar div con ID cobcreto
// conseguir elemento por etiquetas y por su clase
var todos_divs = document.getElementsByTagName('div');
//console.log(todos_divs);

//agregamos un hr despues de la seccion, primero obtenemos la seccion con querySelector cuando es un ID
//despues agregamos el hr con createElement
var seccion = document.querySelector("#mi_seccion");
var hr = document.createElement("hr");


//recorremos el arreglo con un for in

var valor;
	for(valor in todos_divs){
		if(typeof todos_divs[valor].textContent == 'string'){
			var parrafo = document.createElement("P");
	var texto = document.createTextNode(todos_divs[valor].textContent);
	//metemos los parametros de la variable parrafo a la variable texto, con appendChild
	//append añade despues y prepend añade antes
	parrafo.appendChild(texto);

	document.querySelector('#mi_seccion').appendChild(parrafo);
		}
	
}
seccion.append(hr);

//para obtener una clase es con getElementsByClassName

var divRojos = document.getElementsByClassName('rojo');
// podemos agregarle estilos a estas clases
// divRojos.style.background = "red"; de esta forma podemos darle estilo a los div por que son un array
// para hacer esto utilizamos el bucle for in para darle estilo a los divs con clase rojo

var val;
for (val in divRojos){
	if(divRojos.className == 'rojo'){
	divRojos[val].style.background = "red";
}
}
console.log(divRojos);

//trae todos los elementos de una lista el punto (.) es para clases y el # es para ID
var divsAll = document.querySelectorAll('.rojo');

console.log(divsAll);

