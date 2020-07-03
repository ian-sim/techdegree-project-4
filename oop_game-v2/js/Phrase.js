/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

//  Declare Phrase class
class Phrase {
	constructor(phrase) {
		this.phrase = phrase.toLowerCase();
	}
	/**
	 * Display phrase on game board
	 * @param {string} phrase - phrase that will be displayed upon completion of game
	 */
	addPhraseToDisplay() {
		// Select the list to which each letter list item will be appended
		const phraseList = document.getElementById("phrase").firstElementChild;
		// Loop over phrase to create each individual list item
		for (let i = 0; i < this.phrase.length; i++) {
			if (/[a-z]/.test(this.phrase[i])) {
				let li = document.createElement("li");
				li.className = `hide letter ${this.phrase[i]}`;
				li.textContent = `${this.phrase[i]}`;
				phraseList.appendChild(li);
			}
			if (this.phrase[i] === " ") {
				let li = document.createElement("li");
				li.className = "space";
				li.textContent = " ";
				phraseList.appendChild(li);
			}
		}
	}

	/**
	 * Checks if passed letter is in phrase
	 * @param (string) letter - Letter to check
	 * @return {boolean} True if letter in phrase, false if letter not in phrase
	 */
	checkLetter(letter) {
		if (this.phrase.includes(letter)) {
			return true;
		} else {
			return false;
		}
	}

	/**
	 * Displays passed letter on screen after a match is found
	 * @param (string) letter - Letter to display
	 */
	showMatchedLetter(letter) {
		let matchedLetters = document.getElementsByClassName(letter);
		for (let i = 0; i < matchedLetters.length; i++) {
			matchedLetters[i].className = `show letter ${letter}`;
		}
	}
}
