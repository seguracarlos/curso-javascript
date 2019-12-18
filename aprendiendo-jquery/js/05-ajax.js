$(document).ready(function(){
	// metodo load, nos permite hacer peticion ajax por get
	//$('#datos').load("https://reqres.in/");

	$.get("https://reqres.in/api/users",{page: 2}, function(response){
		response.data.forEach((element, index)=>{
			$('#datos').append("<p>"+element.first_name+" "+element.last_name+"</P>");
		});
	});

	

	$.("#formulario").submit(function(){
		

		var usuario ={
		name: $('input[name="name"]').val();
		apellido:$('input[name="apellido"]').val();
		web:$('input[name="web"]').val();
		};

		$.post($(this).attr("action"), usuario, function(response){
		console.log(response);
		});

		return false;
	});
});