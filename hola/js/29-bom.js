'use strict'

//bom = object browser model

// propiedades de la pantalla
console.log(window.innerWidth);
console.log(window.innerHeight);

console.log(screen.width);
console.log(screen.height);

// obtener la url

console.log(window.location);

// redireccionar url con una funcion

function redirect(url){

	window.location.href= url;// url se le coloca en la consola redirect("https://www.google.com");
}

// funcion para que nos abra una ventana del navegador

function abrirventana(url){
	
	//window.open(url); 

	// se le puede agregar ancho y largo a la ventana con width y height
	window.open(url,"","width= 400 height=500"); 
}