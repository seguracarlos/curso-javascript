'use strict'

// metodos para hacer busquedas

var nombre = prompt("Ingresa tu nombre: ");
var apellido = prompt("Ingresa tus apellido: ");

//var texto = "tu nombre es: "+nombre+" y tu apellido es: "+apellido;

var texto = `
    <h1>Hola como estas </h1>
	<h3>mi nombre es: ${nombre}</br>
	mi apellido es: ${apellido}</h3>
`;//plantilla 

document.write(texto); 