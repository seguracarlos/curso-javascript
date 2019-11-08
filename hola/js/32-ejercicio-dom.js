'use strict'

window.addEventListener('load', function(){
	console.log("dom cargado");

	var formulario = document.querySelector("#formulario");
	var box_dashed = document.querySelector('.dashed');
	box_dashed.style.display="none";

	formulario.addEventListener('submit', function(){

		console.log("evento submit capturado");

		var nombre = document.querySelector("#nombre").value;
		var apellidos = document.querySelector("#apellidos").value;
		var edad = parseInt(document.querySelector("#edad").value);

		if( nombre.trim() ==null || nombre.trim().length ==0){
			alert("el nombre no es valido");
			document.querySelector("#error_nombre").innerHTML="el nombre no es valido";
			document.querySelector("#error_nombre").style="color:#FF0000;";
			return false;
		}else{
			document.querySelector("#error_nombre").style.display = "none";
		}

		if( apellidos.trim() ==null || apellidos.trim().length ==0){
			alert("los apellidos no son validos");
			document.querySelector("#error_apellidos").innerHTML="los apellidos no son validos";
			document.querySelector("#error_apellidos").style="color:#FF0000;";
			return false;
		}else{
			document.querySelector("#error_apellidos").style.display = "none";
		}

		if( edad ==null || edad.length <=0 || isNaN(edad)){
			alert("la edad no es valida");
			document.querySelector("#error_edad").innerHTML="la edad no es valida";
			document.querySelector("#error_edad").style="color:#FF0000;";
			return false;
		}else{
			document.querySelector("#error_edad").style.display = "none";
		}
		box_dashed.style.display="block";
		console.log(nombre, apellidos, edad);
		// para mostrar los datos en el div de html podemos hacer un array de los valores
		// despues traerlos en un ciclo para mostrarlos en el div 


		/* primera forma para llenar el div <div class="box dashed">x
		var datos = [nombre, apellido, edad];
		var indice;
		for(indice in datos){
			// creamos una variable de parrafo y creamos el elemento
			var parrafo = document.createElement("p");
			//recorremos el arreglo 
			parrafo.append(datos[indice]);
			//dentro de la variable box_dashed 
			box_dashed.append(parrafo); 
		} */

		// segunda forma para llenar el formulario, traemos las variables desde el html y le agregamos el span
		var p_nombre = document.querySelector("#p_nombre span");
		var p_apellidos = document.querySelector("#p_apellidos span");
		var p_edad = document.querySelector("#p_edad span");

		//insertamos las variables en los id de los <p>
		p_nombre.innerHTML = nombre;
		p_apellidos.innerHTML = apellidos;
		p_edad.innerHTML = edad;
	});

});