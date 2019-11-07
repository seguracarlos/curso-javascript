'use strict'

// JSON javascript Object Notation

var pelicula = {
	titulo: 'Batman',
	year: 2017,
	pais: 'Estados Unidos'
};

//console.log(pelicula);

var peliculas = [
	{titulo: "la verdad duele", year:2016, pais:"francia"},
	pelicula
];

var caja_peliculas = document.querySelector("#pelicula");


var indice;
for(indice in peliculas){
	var p = document.createElement("p");
	p.append(peliculas[indice].titulo+" -"+peliculas[indice].year+" -"+peliculas[indice].pais );
	caja_peliculas.append(p);

}


console.log(peliculas);