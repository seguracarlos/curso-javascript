'use strict'

// una funcion es un conjunto deordenes que se muestran o se utilizan cuando invocamos dicha funcion


//defino la funcion y le paso dos parametros
function calculadora(num1, num2){
//conjunto de instrucciones 
console.log("suma: "+(num1+num2));
console.log("resta: "+(num1-num2));
console.log("multiplicacion: "+(num1*num2));
console.log("division: "+(num1/num2));

return("soy metodo de la calculadora!!");
}


//invocar funcion
//console.log(calculadora(),calculadora());
//calculadora(2,5);
for(var i=0; i<=10; i++){

	console.log(i);
	calculadora(i,5);
}

