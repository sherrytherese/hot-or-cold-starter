
$(document).ready(function(){

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
});

/*--- Initial Variables ---*/

var secretNumber = Math.floor((Math.random()*100)+1);
		console.log("The secret number is: " + secretNumber);
var numberOfGuesses = 0;

/*--- Make a Guess ---*/

$("#guessButton").click(function(e) {
	e.preventDefault();
	var guess = parseInt($("#userGuess").val());
	console.log("User guess is: " + guess);

	/*--- Validate Guess ---*/
		
	if ((guess !==null) && (guess >0) && (guess <101)){

		/*--- Number of Guesses ---*/
		numberOfGuesses +=1;
		console.log("Number of guesses is: " + numberOfGuesses);
		$("#count").text(numberOfGuesses);		
	} 
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

	/*--- Hot or Cold ---*/
	


});

		

	

	







