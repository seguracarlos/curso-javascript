'use strict'

// transformacion de textos

var num1= 444;

var texto = "cursode javascript";

var textos2= "buen curso";


//convertir numero a string
var dato= num1.toString();
	dato= texto.toUpperCase();// convierte a mayusculas
	dato= texto.toLowerCase();// convierte a minusculas

console.log(dato);

//calcular longitud

var nombre ="hola";
	nombre= ["hola","hola"]; 
console.log(nombre.length);// el length puede contar array o texto

// concatenar- unir textos

//var textototal = texto+" " + textos2;
var textototal = texto.concat(" " + textos2+".");
console.log(textototal);
