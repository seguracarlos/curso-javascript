'use strict'

/*
mostrar si un numero es par o impar
1.- ventana promp
2.- si no es valido el numero que ingresa que pida de nuevo el numero
*/

var numero1 = parseInt(prompt('ingresa el primer numero',0));

while(isNaN(numero1)){
	var numero1 = parseInt(prompt('ingresa el primer numero',0));
}
if(numero1%2 ==0){
document.write("el numero "+numero1+" es par");
alert("el numero "+numero1+" es par");

}else{
	document.write("el numero "+numero1+" es impar");
}