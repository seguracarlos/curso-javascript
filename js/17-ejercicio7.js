'use strict'

/*
Tabla de multiplicar con numero introducido en la pantalla
*/

var numero1 = parseInt(prompt('ingresa el numero de la tabla que quieres multiplicar',0));


for(var i=1; i<=10; i++){

	var tabla= numero1 * i;
	document.write(numero1+" X "+i+" ="+tabla+"<br>");

}

/*
todas las tablas de multiplicar
*/



for(var i=1; i<=10; i++){

	for(var a=1; a<=10; a++){

		document.write(i+" X "+a+" ="+(a*i)+"<br>");

	}
document.write("<br>");

}