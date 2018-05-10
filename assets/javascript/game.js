// Set Variables
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'] 
var wins = 0;
var losses = 0;
var guesses = 10;
var guessesSoFar = [];
var userGuess = null;

var randomChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log("Wins:" + wins + "Losses: " + losses + "Guesses Remaining: " + guesses + "Your Guesses So Far: " + guessesSoFar)

//user presses key to select letter
//toLowerCase converts letters to lower case
document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    if (guessesSoFar.indexOf(userGuess) < 0 && alphabet.indexOf(userGuess) >= 0) {
        guessesSoFar[guessesSoFar.length]=userGuess;
        guesses--;
    }

    if(randomChoice == userGuess) {
        wins++;
        console.log("Winner!!");
        guesses = 9;
        guessesSoFar = [];
        randomChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log("Wins: " + wins + "Losses: " + losses + "Guesses Remaining: " + guesses + "Your Guesses So Far:");
    }
//guesses left 0 = loss
    if (guesses == 0) {
        losses++;
        console.log("Better luck next time!");
        guesses = 9;
        guessesSoFar = [];
        randomChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log("Wins: " + wins + "Losses: " + losses + "Guesses Remaining: " + guesses + "Your Guesses So Far:");
    }

    var html = "<h1>The Psychic Game</h1>" + "<h2>Guess what letter I'm thinking of!</h2>" + "<p><h3>Wins: " + wins + "</h3></p>" + "<p><h3>Losses: " + losses + "</h3></p>" + "<p><h3>Guesses Remaining: " + guesses + "</h3></p>" + "<p><h3>Your Guesses So Far: " + guessesSoFar + "</h3></p>";
	document.querySelector("#game").innerHTML = html;

}