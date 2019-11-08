'use strict'

var numero = parseInt(prompt('ingresa un numero del 2 al 9',0));

var contador = 0;


if(numero >=2 && numero <=9){

	for(var i=2; i<=9; i++){

		var res_usuario = parseInt(prompt(numero+' x '+i));

		var resultado =numero*i;
		if(resultado == res_usuario){


			contador++;
		}

	}

	alert("obtuviste un total de: "+contador+" aciertos");
}else{

alert("el numero que ingresaste no corresponde al rango seleccionado");}
