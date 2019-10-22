'use stric'


function holamundo(texto){
	var hola ="variable local";
	console.log(texto);
	console.log(num1);
	console.log(typeof num1.toString());
	console.log(hola);

}

var texto ="variable global";
var num1 = 5;
holamundo(texto);
// error al imprimir por que la variable esta dentro de una funcion
//console.log(hola);