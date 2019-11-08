'use strict'

// una funcion es un conjunto deordenes que se muestran o se utilizan cuando invocamos dicha funcion


//defino la funcion 
function calculadora(){
//conjunto de instrucciones 
console.log("soy metodo de la calculadora");

return("soy metodo de la calculadora!!");
}


//invocar funcion
//console.log(calculadora(),calculadora());
calculadora();

// agrego en una variable la respuesta de la funcion

var resultado=calculadora();

document.write(resultado);
