var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// console.log(letters.length);

letters.forEach(function [i]) {
    console.log[i]
};
// var lettersLength = letters.length;

function consoleInside(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }

}
console.log("---------")

consoleInside(letters);

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var ties = 0;

var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var tiesText = document.getElementById("ties-text");

document.onkeyup = function (event) {

        var userGuess = event.key;

        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


        if (userGuess === computerGuess) {
            win++;
        } else if (userGuess !== computerGuess) {
            guessesleft--;

            if (numGuesses == 0) {

                numGuesses = 9;
                losses++;
                guessChoices = [];
            }
            
            console.log(win + " " + loss + " " + tie);
            directionsText.textContent = ""; //hide the directions
            userChoiceText.textContent = "You chose:" + userGuess;
            computerChoiceText.textContent = "The computer chose:" + computerGuess
            winsText.textContent = "wins: " + wins;
            lossesText.textContent = "losses: " + losses;
            tiesText.textContent = "ties: " + ties;