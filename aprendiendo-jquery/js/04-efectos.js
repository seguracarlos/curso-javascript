$(document).ready(function(){

	var caja = $("#caja");

	$("#mostrar").click(function(){
		$(this).hide();
		$("#ocultar").show();
		caja.fadeIn('slow',1);//se pueden usar los siguientes atributos fast,  normal, hide, show, slow 
	});

	$("#ocultar").click(function(){
		$(this).hide();
		$("#mostrar").show();
		caja.fadeOut('slow',0);
	}); 

	//		-------------------------

	$("#todoenuno").click(function(){
		caja.slideToggle('fast');// fadeToggle,slideToggle
	});

	$("#animame").click(function(){
		caja.animate({
			marginLeft: '500px',
			fontSize: '40px',
			height: '110px'	
		}, 'slow')
		.animate({
			borderRadius: '900px',
			marginTop: '80px'
		},'slow')
		.animate({
			borderRadius: '0px',
			marginLeft: '0px'
		},'slow')
		.animate({
			borderRadius: '100px',
			marginTop: '0px'
		},'slow')
		.animate({
			marginLeft: '500px',
			fontSize: '40px',
			height: '110px'	
		}, 'slow');
	});

});