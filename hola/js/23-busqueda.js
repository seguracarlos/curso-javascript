'use strict'

// metodos para hacer busquedas

var num1= 444;

var texto = "curso de javascript";

var textos2= "buen curso";

var busqueda = textos2.indexOf("curso"); //indica en que posicion se encuentra la palabra

var busqueda = textos2.lastIndexOf("curso");//indica en que posicion se encuentra la ultima palabra

var busqueda = textos2.search("curso");//indica en que posicion se encuentra la palabra

var busqueda = textos2.match("curso");//trae un array con todo el texto donde se encuentra la palabra

var busqueda = textos2.substr(5,5);// con esta instruccion le decimos desde que posicion nos busque y cuantos caracteres
//queremos que nos traiga

var busqueda = textos2.startsWith("buen"); //busca al inicio del texto la palabra marcada y devuelve un true o false 

var busqueda = textos2.includes("buen"); //busca la palabra exacta y muestra un true o false
console.log(busqueda);


//funcion para remplazar texto
var busqueda = texto.replace("javascript", "php");// remplaza una cadena de texto por otra
var busqueda = texto.slice(5);// separa y muestra la cadena apartir del caracter que le indiquemos
var busqueda = texto.slice(5,8);// se puede poner un rango para mostrar
var busqueda = texto.split();// nos regresa en un array el contenido del texto 
var busqueda = texto.split(" ");// podemos separar la cadena con comillas dobles y con un espacio
var busqueda = texto.trim();// trim quita los espacios por delante y por atras
console.log(busqueda);
