'use strict'

/*
utilizar un blucle, que muestre la suma y la media de los numeros introducidos 
hasta introducir un numero negativo y ahi mostrar el resultado
*/

var suma = 0;
var contador = 0;

do{

var numero = parseInt(prompt('introduce numeros hasta que introduzcas uno negativo',0));

if(isNaN(numero)){
numero=0;

}else if(numero >= 0){
suma= suma+ numero;

contador++;
}
console.log(suma);
console.log(contador);

}while(numero>=0)
alert("la suma de todos los numeros son: "+ suma);
alert("la media de los numeros es: "+(suma/contador));