'use strict'

// arrays, arreglos, matrices etc
// coleccion de tipos de datos en una variable
var nombre = "carlos segura"; // variable con un dato simple
var nombres = ["jose","pepe","mario","juan","carlos"];//array

var nom = new Array("jose","pepe","mario","juan"); //objeto de arrays



/*
var elementos = parseInt(prompt("que elemento de aaray quieres",0));
if(elementos >= nombres.length){

	alert("ingresa un valor correcto, debe de ser menor a: "+ nombres.length);
}else{
	alert("el usuario seleccionado es: "+nombres[elementos]);
}

console.log(nombre);

console.log(nombres);
console.log(nom);*/


// recorrer el arreglo

/*for(var i=0; i<=nombres.length; i++){

	console.log(nombres[i]);
}*/

nombres.forEach((elemento, indice) => {	
	//document.write("<li>"+indice+"-"+elemento*" </li>");
	console.log(elemento);
});