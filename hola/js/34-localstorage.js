'use strict'

// localstorage, memoria del navegador que guarda informacion

// comprar si el navegador es compatible
if(typeof(Storage) !== 'undefined'){
	console.log("localstorage disponible");
} else {
	console.log("localstorage no disponible");
}

//guardar datos en el localstorage, primerose pone el nombredel elemnto y despues el congenido
//localStorage.setItem("titulo","curso de javascript");

//recuperar elemtos
document.querySelector("#pelicula").innerHTML = localStorage.getItem('titulo');

// guardar objeto

var usuario = {
	nombre: "carlos",
	email: "carlos@gmail.com",
	web: "carlos.web.es"
};
// para poder enviar un json por localStorage hay que convertir el json a cadena
localStorage.setItem("usuario", JSON.stringify(usuario));

//recuperar objeto, el json que tenemos en una cadena  se tiene que convertir a json con JSON.parse
var user_js=JSON.parse(localStorage.getItem("usuario"));
console.log(user_js);

document.querySelector("#pelicula").append(" "+user_js.web);

//limpiarel localstorage

localStorage.clear();