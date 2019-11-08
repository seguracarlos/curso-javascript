'use strict'

/*
muestre todos los numeros introducidos en un prompt
*/

var numero1 = parseInt(prompt('ingresa el primer numero',1));

for(var i=1; i<=numero1; i++){

if(numero1%i ==0){
document.write(i+"<br/>");
}

}