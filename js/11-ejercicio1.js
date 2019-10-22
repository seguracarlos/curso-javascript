'use strict'

/*
pedir dos numeros y mostrar cual de los dos es mayor o si son iguales
plus: pedir de nuevo los numeros si alguno de los dos son cero o si no es correcto algun numero ingresado 
*/

var numero1 = parseInt(prompt('ingresa el primer numero',0));

var numero2 = parseInt(prompt('ingresa el segundo numero',0));

while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){
 numero1 = parseInt(prompt('ingresa el primer numero',0));

numero2 = parseInt(prompt('ingresa el segundo numero',0));
}

if(numero1 == numero2){
	alert('los numeros son iguales');

}else if(numero1 > numero2){
	alert('el numero 1 es mas grande');

}else if(numero2 > numero1){
	alert('el numero 2 es mas grande');

}else {
	alert('ingresa bien los numeros');
}