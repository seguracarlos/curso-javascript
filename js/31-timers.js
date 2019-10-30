'use strict'

window.addEventListener('load',function(){

	//interval (setInterval) ejecuta una funcion o trozo de codigo cada cierto tiempo
	//set Timeout se ejecuta en el tiempo que le damos de estimacion pero solo lo hace una sola vez

	function intervalo(){
		var tiempo = setInterval(function(){
		console.log("set Interval ejecutado");

		var encabezado = document.querySelector("h1");

		if(encabezado.style.fontSize == "50px"){
			encabezado.style.fontSize = "20px";
		}else{
			encabezado.style.fontSize="50px";
		}
		
	},500);
		return tiempo;	
	}
	
	var tiempo = intervalo();

	var stop = document.querySelector("#stop");

	stop.addEventListener("click",function(){
		alert("haz detenido el bucle de intervalo");
		clearInterval(tiempo);
	});

	var start = document.querySelector("#start");

	start.addEventListener("click",function(){
		alert("haz iniciado el bucle del intervalo");
		intervalo();
	});

});