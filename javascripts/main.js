// Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero
// random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato

$(document).ready(function() {
	// ## AL CLICK SU UN QUADRATO
	$(".quadrato").click(squareClick);
});

function squareClick() {
	var thisSquare = $(this);

	// chiamata asincrona
	$.ajax({
		url : "https://flynn.boolean.careers/exercises/api/random/int",
		method : "GET",
		success : function (data,stato) {
			var result = data.response;
			//stampo il risultato
			thisSquare.text(result);
			// controllo come colorare il quadrato
			if (result <= 5) {
				thisSquare.removeClass("green");
				thisSquare.addClass("yellow");
			} else {
				thisSquare.removeClass("yellow");
				thisSquare.addClass("green");
			}
		},
		error : function (richiesta,stato,errori) {
			alert("E' avvenuto un errore. "+errore);
		}
	});
}