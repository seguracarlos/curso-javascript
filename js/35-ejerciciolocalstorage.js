'use strict'

var formulario = document.querySelector("#formpeliculas");

formulario.addEventListener('submit', function(){
	
	var titulo= document.querySelector("#addpeliculas").value;
	if(titulo.length >= 1){
	localStorage.setItem(titulo, titulo);    
    }
});

var ul = document.querySelector("#peliculas-list");

for(var indice in localStorage){

	if(typeof localStorage[indice] == 'string'){
		var li = document.createElement("li");
		li.append(localStorage[indice]);
		ul.append(li);

	}
}

//para borrar elemneto de la lista
var formulariob = document.querySelector("#formBorrarPeliculas");

formulariob.addEventListener('submit', function(){
	
	var titulo= document.querySelector("#borrarpeliculas").value;
	if(titulo.length >= 1){
	localStorage.removeItem(titulo);    
    }
});