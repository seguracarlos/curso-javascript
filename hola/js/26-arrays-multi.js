'use strict'

var categoria =  ["terror","comedia","drama","accion"];

var pelicula = ["la vida es bella", "it", "R&F","locura"];
// ordenar array
categoria.sort();
 console.log(categoria);

 //VOLTEAR EL ARRAY, PONER EL ULTIMO REGISTRO EN EL PRIMERO

categoria.reverse();
 console.log(categoria);

exit();
var cine = [categoria,pelicula]; // array multifuncional

//console.log(cine[0][1]);
//console.log(cine[1][3]);

//--------------------------------------
// añadir dato a un array

//pelicula[] = "batman"; // asi funciona en php
//pelicula.push("batman"); // asi funciona en php
//console.log(pelicula);

var peli = "";
do{
 var peli = prompt("introduce tu pelicula ");
 pelicula.push(peli); 
}
while(peli != "ACABAR");
 pelicula.pop(); // para eliminar el ultimo elemento del array

 console.log(pelicula);

 //convertir un array a string

 var pelicula_string = pelicula.join();
 console.log(pelicula_string);

 //convertir cadena a un array

 var cadena = "texto0, texto1, texto2, texto3";
 var cadena_array = cadena.split(", ");
 console.log(cadena_array);