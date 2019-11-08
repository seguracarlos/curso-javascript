
$(document).ready(function(){
	console.log("correcto");
	//podemos hacer referencia al id y le podemos cambiar algun estilo con ccs
	var rojo= $("#rojo").css("color", "white")
						.css("background", "red");

	var rojo= $("#amarillo").css("color", "green")
						.css("background", "yellow");

	var rojo= $("#verde").css({"color": "red", "background-color": "green"});

	var mi_clase = $(".zebra").css("padding","5px");

	//mi_clase.css("border","5px dashed black");

	$('.sin_borde').click(function(){
		$(this).addClass('zebra');
	});

	//console.log(mi_clase);

});