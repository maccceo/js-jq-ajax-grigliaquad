// Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato.

$(document).ready(function() {
	// ## AL CLICK SU UN QUADRATO
	$(".quadrato").click(squareClick);
});



function squareClick() {
	// salvo il quadrato cliccato per usarlo dentro funzioni qua annidate
	var thisSquare = $(this);

	// chiamata asincrona
	$.ajax({
		url : "https://flynn.boolean.careers/exercises/api/random/int",
		method : "GET",
		success : function (data) {
			squareFiller(data.response,thisSquare);
		},
		error : function (richiesta,stato,errori) {
			alert("E' avvenuto un errore. "+errori);
		}
	});

	function squareFiller(number, square) {
		//stampo il numero "estratto" al centro del quadrato
		square.text(number);
		// controllo come colorarlo
		if (number <= 5) {
			square.removeClass("green");
			square.addClass("yellow");
		} else {
			square.removeClass("yellow");
			square.addClass("green");
		}
	}
}