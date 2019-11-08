'use strict'

// agregar metodo load para que cargue la pagina cuando todos los elementos estes cargados

window.addEventListener('load', () => { //agrego metodo de load para que cargue la pagina


	// un evento se ejecuta cuando sucede algo en la pagina
	// evento raton

	//var boton = document.querySelector('#boton');

	function cambiarcolor(){
		console.log("me has dado clic");
		var bg = boton.style.background;

		if(bg == "green"){
			boton.style.background="red";
		}else{
			boton.style.background="green";
		}
		    boton.style.padding ="10px";
		    boton.style.border="1px solid #ccc";
	return true;
	}

	var boton = document.querySelector('#boton');

	//evento click
	boton.addEventListener('click', function (){
		cambiarcolor();
	});

	//mouse over(cuenado entras a la propiedad) para agregar un estilo al pasar el mause
	boton.addEventListener('mouseover',function(){
		boton.style.background= "#ccc";
	});

	//mouse out(cuenado sales a la propiedad) para agregar un estilo al pasar el mause
	boton.addEventListener('mouseout',function(){
		boton.style.background= "yellow";
	});

	// focus,cuandoentramos al foco (input)

	var input = document.querySelector('#campo_nombre');

	input.addEventListener('focus',function(){
		console.log("focus, estas dentro del input");
	});

	// blur,cuando salimos al foco (input)
	input.addEventListener('blur',function(){
		console.log("blur,estas fuera del input");
	});

	// keydown,sucede cuando escribes (input)
	input.addEventListener('keydown',function(){
		console.log("keydown, cuando teclamos");
	});

	// keydown,sucede cuando escribes (input)
	input.addEventListener('keydown',function(){
		//console.log("keydown, cuando teclamos");
	});

	// keydown,sucede cuando escribes (input), podemos ver que tecla captura el usuario
	input.addEventListener('keydown',function(event){
		console.log("[keydown] pulsando la tecla: ", String.fromCharCode(event.keyCode)); 
		//String.fromCharCode(event.keyCode) para saber que es lo que teclea el usuario
	});

	// keypress,sucede cuando presiono una tecla (input)
	input.addEventListener('keypress',function(event){
		console.log("[keypress] tecla presionada: ", String.fromCharCode(event.keyCode)); 
		//String.fromCharCode(event.keyCode) para saber que es lo que teclea el usuario
	});

	// keyup,sucede levantas el dedo de la tecla (input)
	input.addEventListener('keyup',function(event){
		console.log("[keyup] tecla soltada: ", String.fromCharCode(event.keyCode)); 
		//String.fromCharCode(event.keyCode) para saber que es lo que teclea el usuario
	});

});// fin del metodo load

