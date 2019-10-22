'use strict'

/*
funciones anonimas son funciones que no tienen nombre

callback es una funcion que se ejecuta una, dentro de otra
*/

/*
funcion anonima
var pelicula = function(nombre){

return "lapelicula es: " + nombre; 
}
*/

function sumame(num1, num2,sumaYmuestra,sumaPorDos){
	var suma= num1+num2;
	sumaYmuestra(suma);
	sumaPorDos(suma);

	return suma;
}


sumame(5,7, function(dato){
	console.log("la suma es: ", dato);
}, 
function(dato){
	console.log("la suma por dos es: ", (dato*2));
});

/*
funciones de flecha es una forma de definir funciones de calback de una manera limpia y clara
utilizando flecha y en parametro quitar el parentesis

sumame(5,7, dato->{
	console.log("la suma es: ", dato);
}, 
dato->{
	console.log("la suma por dos es: ", (dato*2));
});


*/