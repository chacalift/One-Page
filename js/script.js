// JavaScript Document
$(function(){
	setTimeout("mostrar()",5000)
	setTimeout("ocultar()",20000)
	$(".fechar,.popup").click(function(){
		$(".popup,.news").fadeOut(500)
})
})

function mostrar(){
	$(".popup,.news").fadeIn(1000)
}

function ocultar(){
	$(".popup,.news").fadeOut(1000)
	}
	
	