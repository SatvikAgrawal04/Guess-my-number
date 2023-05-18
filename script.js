"use strict";

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'correst answer';

// document.querySelector('.number').textContent = 12;
// document.querySelector('.score').textContent = 100;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let randomNumber = Math.floor(Math.random() * 20) + 1;
console.log(randomNumber);
let score = 20;
let highScore = 0;

function displayMessage(message) {
	document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener("click", function () {
	const guess = Number(document.querySelector(".guess").value);
	console.log(typeof guess);
	if (!guess) {
		displayMessage("⛔️ No number!");
	} else if (guess === randomNumber) {
		document.querySelector(".message").textContent = "🎉 Correct Answer!";
		document.querySelector(".number").textContent = randomNumber;
		document.querySelector("body").style.backgroundColor = "#60b347";
		// document.querySelector('.number').style.width = '30rem';

		if (score > highScore) {
			highScore = score;
			document.querySelector(".highscore").textContent = highScore;
		}
	} else {
		if (score > 1) {
			displayMessage(guess > randomNumber ? "📈 Too high!" : "📉 Too low!");
			score--;
			document.querySelector(".score").textContent = score;
		} else {
			displayMessage("💥 You lost the game!");
			document.querySelector(".score").textContent = 0;
		}
	}
});

document.querySelector(".again").addEventListener("click", function () {
	score = 20;
	randomNumber = Math.floor(Math.random() * 20) + 1;
	document.querySelector(".message").textContent = "Start Guessing...";
	document.querySelector(".guess").value = null;
	document.querySelector(".score").textContent = score;
	document.querySelector(".number").textContent = "?";

	document.querySelector("body").style.backgroundColor = "#222";
	//   document.querySelector('.number').style.width = '15rem';
});
