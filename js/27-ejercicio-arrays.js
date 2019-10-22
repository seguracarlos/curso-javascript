'use strict'

/*1.- programa que pida 6 numeros por pantalla y meterlo en un array
2.-mostrar el array con todos sus elementos en el cuerpo de la pagina y consola
3.- sacar el array ordenado y mostrarlo
4.- invertir el orden y mostrarlo
5.- mostrar cuantos elementos tiene el array
6.- buscar de un valor introducido por el usuario y que nos diga si esta en el array 
y que nos diga su posicion*/




var datos =[]; 

var valor =""
//1
while (datos.length <6){
	var valor = prompt("ingresa un valor el valor ");
	datos.push(valor);
}
//2
document.write("<h1> arreglo original "+datos+"</h1>");
console.log(datos);

//3
datos.sort();
document.write("<h1>arreglo por orden "+datos+"</h1>");
console.log(datos);

//4
datos.reverse();
document.write("<h1> arreglo al reves "+datos+"</h1>");
console.log(datos);
//5
document.write("<h1> numero de datos en array "+datos.length+"</h1>");
console.log(datos.length);


//6
var busqueda = datos.some(dato => dato == 2);

document.write("<h1> estatus de numero encontrado "+busqueda+"</h1>");
console.log(busqueda);


var busca_posicion = datos.findIndex(dat => dat == 2);
document.write("<h1> se encuentra en el indice "+busca_posicion+"</h1>");
console.log(busca_posicion);


