'use strict'

var categoria =  ["terror","comedia","drama","accion"];



// funcion para encontrar un elemeneto dentro de un array
var busqueda = categoria.find(function(catego){

	return catego == "terror";
});

//console.log(busqueda);

// funcion detipo flecha para encontrar un elemento dentro de un array


var buscar = categoria.find(catego => catego == "terror");
//console.log(buscar);

// para buscar el indice en donde se encuentra es con findIndex
var buscar = categoria.findIndex(catego => catego == "comedia");
//console.log(buscar);

// para saber si existe un valor dentro del array con funcion some

var precios = [10,  20, 40, 60, 200, 100];
var busca = precios.some(precio => precio <= 10);

console.log(busca);