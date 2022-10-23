// Variables
// -----------------------------------------------------------------------------

var words = [
	new Word(0, "A", "Amb la lletra A:", " On et vas fotre un bitxo tant coent que et sortia cera de les orelles, tot i els avisos previs del cambrer.", "Alacant"),
	new Word(1, "B", "Amb la lletra B:", " Enemic total gastronòmic contra el que lluites aferrissadament fent proselitisme de la teva causa a les nostres filles.", "Bledes"),
	new Word(2, "C", "Amb la lletra C:", " Nom pel qe et coneix la Bettio.", "Croissant"),
	new Word(3, "D", "Amb la lletra D:", " El sobrenom que més t'escau.", "Dat pel cul"),
	new Word(4, "E", "Amb la lletra E:", " Disfressa amb la que et vas presentar al carnaval de Solsona, on en comptes de disfresses s’utilitzen bates de colors.", "Exèrcit Roig"),
	new Word(5, "F", "Amb la lletra F:", " Quina muntanya berguedana vam pujar 5 persones dues vegades amb un dorsal a l’esquena el dia de cap d’any?", "Figuerassa"),
	new Word(6, "G", "Amb la lletra G:", " Lloc on vas estar apunt d'ingressar per fer un 'grafitti' (tipus Diana i no de Gal-les) a la façana d'un conegut supermercat de Berga.", "Garjola"),
	new Word(7, "H", "Amb la lletra H:", " Nom del filòsof que va dir (més o menys) el següent: No podem rebre dues vegades la mateixa sodomia per part de l'Òscar. Quan hi torna, ni la seva tranca ni el nostre cul són els mateixos.", "Heràclit"),
	new Word(8, "I", "Amb la lletra I:", "  Organització internacionalista que, gràcies a tu, és el gra al cul de la CUP.", "Ítaca"),
	new Word(9, "J", "Amb la lletra J:", " Autor de la cançó exitosament coreografiada per cap d'any, a casa vostra, i que de manera infame vas fer pública. Pista: \"... és la teva forma de ser...\"", "Josep Maria Cantimplora"),
	new Word(10, "K", "Amb la lletra K:", " Nom d'una de les poques repúbliques exsoviètiques que no has visitat.", "KAZAKHSTAN"),
	new Word(11, "L", "Amb la lletra L:", " Estat en què et van dur a l'hospital després d'una nit de 'juerga' amb els amics quan eres un preadolescent.", "Lamentable"),
	new Word(12, "LL", "Amb la lletra LL:", " El teu sobrenom quan pedales per àfrica.", "El Llantes"),
	new Word(13, "M", "Amb la lletra M:", " El nostre primer viatge..... i on et vas banyar al mar amb les claus del cotxe a la butxaca del banyador.....qui ho havia de dir que llavors no el podríem obrir!!!!", "Mallorca"),
	new Word(14, "NY", "Amb la lletra NY:", " El sobrenom amb el que et coneixen al Xino Xano.", "Nyanyo"),
	new Word(15, "O", "Amb la lletra O:", " La casa que vem marxar amb el cotxe en marxa quan uns “pocs amics”ens perseguien", "Okupa"),
	new Word(16, "P", "Amb la lletra P:", " On vem provar de dormir fent-nos passar per peregrins del camí de sant Jaume.", "Pamplona"),
	new Word(17, "Q", "Amb la lletra Q:", " La primera via llarga que vas haver d'arrossegar l'Eva.", "Queraltina"),
	new Word(18, "R", "Amb la lletra R:", " L’amic que vem fer quan vem anar a buscar samarretes per vendre i pagar la multa dels “graffitis”.", "Rota"),
	new Word(19, "S", "Amb la lletra S:", " nom de l'entrentrenament infernal fet a Pedret i del qual et vas escollonar, que constava en 10 repeticions x400 mts.", "Sèries"),
	new Word(20, "T", "Amb la lletra T:", " Sobrenom polític.", "Trotskar"),
	new Word(21, "V", "Amb la lletra V:", " Líquid diví que no pot ser tot degustat en una sola nit.", "Vi"),
	new Word(22, "X", "Amb la lletra X:", " Nom de la via, on en el 3er llarg et va caure un peu d gat…..", "Xibalbà"),
	new Word(23, "Z", "Amb la lletra Z:", " Personeta a la que Li has ficat mes mandarines dintre la roba, i a la que vash traumar per que es pensaba que tenía bonys per tot el cos...Com t'agrada Fer bromas a tothom...", "Zulema")
];

// Functions
// -----------------------------------------------------------------------------

function Word(idNumber, letter, hint, definition, word, correct) {
	this.idNumber = idNumber;
	this.letter = letter;
	this.hint = hint;
	this.definition = definition;
	this.word = word;
	this.correct = null;
}

function showDefinition(pos) {
	$("#js--hint").html(words[pos].hint);
	$("#js--definition").html(words[pos].definition);
}

var remainingWords = 24;

function checkAnswer(pos) {
	var userAnswer = $("#js--user-answer").val().toLowerCase();
	
	if (userAnswer == words[pos].word.toLowerCase()) {
		words[pos].correct = true;
		$(".circle .item").eq(words[pos].idNumber).removeClass("item--failure");
		$(".circle .item").eq(words[pos].idNumber).addClass("item--success");
		remainingWords--;
		$("js--score").html(remainingWords);
		count++
	} else {
		words[pos].correct = false;
		$(".circle .item").eq(words[pos].idNumber).addClass("item--failure");
		pasapalabra(pos);
	}	

}

function pasapalabra(pos) {
	var w = words.splice(pos, 1)[0];
	words.push(w);

}

function continuePlaying() {
	if (count != 24) {
		$("#js--user-answer").val("");
		showDefinition(count);
	} else {
		endGame();
	}
}

function endGame() {
	$("#js--question-controls").addClass("hidden");
	$("#js--pa-controls").removeClass("hidden");
	$("#js--end-title").html("Per molts anys Òscar!");
	$("#js--end-subtitle").html(showUserScore());
	$("#js--close").addClass("hidden")
	ConfettiTime();
	PlayAnathem();
}

function gameOver() {
	$("#js--question-controls").addClass("hidden");
	$("#js--pa-controls").removeClass("hidden");
	$("#js--end-title").html("Torna-ho a provar");
	$("#js--end-subtitle").html(showUserScore());
	$("#js--close").addClass("hidden")
}

function showUserScore() {
	var counter = 0;
	for (i = 0; i < words.length; i++) {
		if (words[i].correct == true) {
			counter++;
		}
	}
	// MARCAR TAMBÉ ELS ERRORS
	return "Has endevinat " + counter + " paraules.";
}


// Main Program
// ----------------------------------------------------------------------------- */

// New game
var count = 0; // Counter for answered words
$("#js--new-game").click(function() {
	$("#js--ng-controls").addClass("hidden");
	$("#js--question-controls").removeClass("hidden");
	$("#js--close").removeClass("hidden");
	$("js--user-answer").focus();
	showDefinition(count);		
	
});

// Send the answer
$("#js--send").click(function() {
	checkAnswer(count);
	continuePlaying();
});

// Key bindings for send the answer
$("#js--question-controls").keypress(function(event) {
	var keycode = (event.keyCode ? event.keyCode : event.which);
	if (keycode == "13") {
		checkAnswer(count);
		continuePlaying();
	}
});

// Skip the word
$("#js--pasapalabra").click(function() {
	pasapalabra(count);
	continuePlaying();
});

// Play again
$("#js--pa").click(function() {
	location.reload()
});

// End the game
$("#js--close").click(function() {
	gameOver();
});


// Confetti party

function ConfettiTime(){
	var duration = 15 * 1000;
var animationEnd = Date.now() + duration;
var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

var interval = setInterval(function() {
  var timeLeft = animationEnd - Date.now();

  if (timeLeft <= 0) {
    return clearInterval(interval);
  }

  var particleCount = 50 * (timeLeft / duration);
  // since particles fall down, start a bit higher than random
  confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
  confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
}, 250);
}

// Play sound

function PlayAnathem(){

	const path = "./media/urss.ogg";

	const playAudio = (path) => {
		new Audio(path).play()
	 }
		 
	 playAudio(path);
}