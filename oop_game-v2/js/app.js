/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//  Declare game variable
let game;
document.getElementById("btn__reset").addEventListener("click", () => {
	// Reset game board
	reset();
	// Start new game
	game = new Game();
	game.startGame();
});

// Handler for key click event
const letterKeys = document.querySelector("#qwerty");
letterKeys.addEventListener("click", (e) => {
	if (e.target.className === "key") {
		let button = e.target;
		game.handleInteraction(button);
	}
});

// Handler for keyup event
document.addEventListener("keyup", (e) => {
	// Test that key pressed was a letter key
	if (/[a-z]/.test(e.key)) {
		// Select key buttons on page and run
		let buttons = document.querySelectorAll("button.key");
		for (let i = 0; i < buttons.length; i++) {
			// Match keyup to key button on page and check if disabled
			if (buttons[i].textContent === e.key && buttons[i].disabled === false) {
				game.handleInteraction(buttons[i]);
			}
		}
	}
});

// Function to reset game board
function reset() {
	// Remove li elements
	const ul = document.getElementById("phrase").firstElementChild;
	ul.innerHTML = "";
	// Reset keys
	const buttons = document.getElementsByClassName("key");
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].className = "key";
		buttons[i].disabled = false;
	}
	// Replace a lostHeart with liveHeart
	const lives = document.getElementsByClassName("tries");
	for (let i = 0; i < lives.length; i++) {
		lives[i].innerHTML =
			'<img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></img>';
	}
}
