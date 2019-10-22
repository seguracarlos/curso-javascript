'use strict'

/*
calculadora que pida dos numeros por pantalla, si se introduce algun numero mal volver a pedir
en el cuerpo de la pagina una alerta y por consola el resultado de sumar, restar,multiplicar y dividir esas dos cifras

*/

var numero1 = parseInt(prompt('ingresa el primer numero ',0));

var numero2= parseInt(prompt('ingresa el segundo numero ',0));

while(isNaN(numero1)|| isNaN(numero2)){
	 numero1 = parseInt(prompt('ingresa el primer numero ',0));
	 numero2= parseInt(prompt('ingresa el segundo numero ',0));
}

/*document.write("<h1> la suma de las cifras es: "+(numero1+numero2)+"</h1> <br>");
console.log('la suma de las cifras es de: '+(numero1+numero2));
alert('la suma de las cifras es de: '+(numero1+numero2));

document.write("<h1> la resta de las cifras es: "+(numero1-numero2)+"</h1> <br>");
console.log('la resta de las cifras es de: '+(numero1-numero2));
alert('la resta de las cifras es de: '+(numero1-numero2));

document.write("<h1> la multiplicación de las cifras es: "+(numero1*numero2)+"</h1> <br>");
console.log('la multiplicacion de las cifras es de: '+(numero1*numero2));
alert('la multiplicacion de las cifras es de: '+(numero1*numero2));

document.write("<h1> la division de las cifras es: "+(numero1/numero2)+"</h1> <br>");
console.log('la division de las cifras es de: '+(numero1/numero2));
alert('la division de las cifras es de: '+(numero1/numero2));*/

//otra forma de mostrar el resultado es:

var resultado = "<h1> la suma de las cifras es: "+(numero1+numero2)+"<br>"+
				" la resta de las cifras es: "+(numero1-numero2)+"<br>"+
				"la multiplicación de las cifras es: "+(numero1*numero2)+"<br>"+
				"la division de las cifras es: "+(numero1/numero2)+"</h1> <br>"

var resultado_cons = "la suma de las cifras es: "+(numero1+numero2)+"\n"+
				" la resta de las cifras es: "+(numero1-numero2)+"\n"+
				"la multiplicación de las cifras es: "+(numero1*numero2)+"\n"+
				"la division de las cifras es: "+(numero1/numero2)+"\n"

			document.write(resultado);	
			alert(resultado_cons);
			console.log(resultado_cons);