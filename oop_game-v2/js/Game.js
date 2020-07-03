/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

//  Declare Game class
class Game {
	constructor() {
		this.missed = 0;
		this.phrases = [
			new Phrase("A Chip on Your Shoulder"),
			new Phrase("Burst Your Bubble"),
			new Phrase("Jumping The Gun"),
			new Phrase("Driving Me Nuts"),
			new Phrase("Arm and a leg"),
		];
		this.activePhrase = null;
	}

	/**
	 * Selects random phrase from phrases property
	 * @return {Object} Phrase object chosen to be used
	 */
	getRandomPhrase() {
		return this.phrases[Math.floor(Math.random() * Math.floor(5))];
	}

	/**
	 * Begins game by selecting a random phrase and displaying it to user
	 */
	startGame() {
		document.getElementById("overlay").style.display = "none";
		const randomPhrase = this.getRandomPhrase();
		const phrase = new Phrase(randomPhrase.phrase);
		phrase.addPhraseToDisplay();
		this.activePhrase = randomPhrase;
	}

	/**
	 * Handles onscreen keyboard button clicks
	 * @param (HTMLButtonElement) button - The clicked button element
	 */
	handleInteraction(button) {
		// Disable button
		button.disabled = true;
		// Check selected letter against phrase and reveal if a match or removeLife if no match
		if (this.activePhrase.checkLetter(button.textContent)) {
			this.activePhrase.showMatchedLetter(button.textContent);
			button.className = "key chosen";
			// Check if game won
			if (this.checkForWin()) {
				this.gameOver(this.checkForWin());
			}
		} else {
			this.removeLife();
			button.className = "key wrong";
			// Check if game lost
			if (this.missed === 5) {
				this.gameOver(this.checkForWin());
			}
		}
	}

	/**
	 * Checks for winning move
	 * @return {boolean} True if game has been won, false if game wasn't won
	 */
	checkForWin() {
		const hiddenLetters = document.querySelectorAll("li.hide");
		if (hiddenLetters.length === 0) {
			return true;
		} else {
			return false;
		}
	}

	/**
	 * Increases the value of the missed property
	 * Removes a life from the scoreboard
	 * Checks if player has remaining lives and ends game if player is out
	 */
	removeLife() {
		// Increases missed value by 1
		this.missed += 1;
		// Replace a liveHeart with lostHeart
		const lives = document.getElementsByClassName("tries");
		for (let i = 0; i < this.missed; i++) {
			lives[i].innerHTML =
				'<img src="images/lostHeart.png" alt="Heart Icon" height="35" width="30"></img>';
		}
		// Checks for remaining lives
		if (this.missed === 5) {
			this.gameOver(this.checkForWin());
		}
	}

	/**
	 * Displays game over message
	 * @param {boolean} gameWon - Whether or not the user won the game
	 */
	gameOver(gameWon) {
		// Win/Loss message
		if (!gameWon) {
			setTimeout(gameLost, 750);
		}
		if (gameWon) {
			setTimeout(gameWin, 750);
		}
	}
}

// Function for game lost
function gameLost() {
	document.querySelector("h1").textContent = `Oops, you are out of lives`;
	document.getElementById("overlay").style.display = "";
	document.getElementById("overlay").className = "lose";
}

// Function for game win
function gameWin() {
	document.querySelector("h1").textContent = "Well done! You found the phrase!";
	document.getElementById("overlay").style.display = "";
	document.getElementById("overlay").className = "win";
}
