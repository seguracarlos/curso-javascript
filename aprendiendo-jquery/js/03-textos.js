$(document).ready(function(){
	$(reloadLinks);

	$("#add_button").click(function(){
		// prepend lo pone al principio de la lista, before lo pone fuera de la lista, append lo pone al final de la lista
		//
		$("#menu").append('<li><a href="'+$("#add_link").val()+'"></a></li>');
		$(reloadLinks);
	});

	


});

function reloadLinks(){
	$('a').each(function(index){
		var that = $(this);
		
		var enlace = that.attr("href");
		that.attr('target', 'blank');
		that.text(enlace);
	});
}