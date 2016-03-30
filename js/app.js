
$(document).ready(function(){

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	/*--- New Game ---*/
  	$(".new").click(function newGame(){ //how do I make this call the newGame() function defined below?
  		location.reload();
  		//var secretNumber = Math.floor((Math.random()*100)+1);
		//console.log("The secret number is: " + secretNumber);
		//var numberOfGuesses = 0;
		//$("#feedback").text("Make your Guess!");
		//$("#count").text(numberOfGuesses);
		//$("#userGuess").text("Enter your Guess");	<-- why doesn't this clear it out?
  	});
});

/*--- Initial Variables ---*/
function newGame(){
  	location.reload();
 }

var secretNumber = Math.floor((Math.random()*100)+1);
		console.log("The secret number is: " + secretNumber);
var numberOfGuesses = 0;
var list = "";

/*--- Make a Guess ---*/

$("#guessButton").click(function(e) {
	e.preventDefault();
	var guess = parseInt($("#userGuess").val());
	console.log("User guess is: " + guess);
	/*--- List the Guesses ---*/ 
	list += "<li>"+guess+"</li>";
	$("#guessList").html(list);
	game();

	/*--- Game ---*/

	function game() {

		/*--- Validate Guess ---*/

		if ((guess !==null) && (guess >0) && (guess <101)){

			/*--- Number of Guesses ---*/

			numberOfGuesses +=1;
			console.log("Number of guesses is: " + numberOfGuesses);
			$("#count").text(numberOfGuesses);		
			
			/*--- Hot or Cold ---*/

			if (guess == secretNumber) {
				$("#feedback").text("You are CORRECT. You Win! Press Enter to play again.");
					$(document).keypress(function(key){
						if(key.which == 13) {
							newGame();
						}
					});
			} // <--how do you only make it restart if you press ANY key?
				else { 
					if(Math.abs(guess - secretNumber)<5) {
					$("#feedback").text("You are HOT");
					}
					else if (guess - secretNumber <0) {
						$("#feedback").text("You are COLD. Guess a higher number!");
					}
					else if (guess - secretNumber >0) {
						$("#feedback").text("You are COLD. Guess a lower number!");
					}
				}
		} 
		
		
		//else {
		//	$("#feedback").text("You are COLD");
		//}

		/*--- Re-input Bad Data ---*/

		else {
			$("#feedback").text("Your guess must be a number between 1 and 100");
			$("#userGuess").click(function(e) {
				$("#feedback").text("Make your Guess!");
			});
			$("#userGuess").keyup(function(e) {
				if(e.keyCode == 8) {
				$("#feedback").text("Make your Guess!")};
			});
		}
	}
});
		

	

	







