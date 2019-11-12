'use strict'

$(document).ready(function(){
	//maoseoOver, mauseOut
	//alert("evento.js cargado");
	var caja= $("#caja");

	/*caja.mouseover(function() {
		$(this).css("background","red");
	});

	caja.mouseout(function(){
		$(this).css("background","green");
	});*/

	//mover
	function cambiaRojo() {
		$(this).css("background","red");
	}

	function cambiaVerde(){
		$(this).css("background","green");
	}

	caja.hover(cambiaRojo, cambiaVerde);

	//click y doble click
	caja.click(function() {
		$(this).css("background", "blue")
			  .css("color", "white");
	});
	// doble clic con dblclick
	caja.dblclick(function() {
		$(this).css("background", "orange")
			  .css("color", "white");
	});

	//focus y blur
	var nombre=$("#nombre");

	nombre.focus(function() {
		$(this).css("border" , "2px solid green");
	});

	nombre.blur(function() {
		$(this).css("border" , "1px solid #ccc");
		
		$("#datos").text($(this).val()).show();
	});


});