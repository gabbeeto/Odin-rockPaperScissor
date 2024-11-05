window.score = {
	human: 0,
	computer: 0,
}

window.currentChoices = 0

// only difficulty 1,2 and 3 is supported in the game
window.difficulty = 1

function setAmountOfPointsAccordingToDiffilculty(scorer) {
	return scorer == 'human' ? 1 : window.difficulty;
}


export default function setScore() {
	if (window.currentChoices.winner != "=") {

		window.score[window.currentChoices.winner] += setAmountOfPointsAccordingToDiffilculty(window.currentChoices.winner)
		let scorerGotMoreThan5Points = window.score[window.currentChoices.winner] >= 5
		if (scorerGotMoreThan5Points) {
			finishGame()
		}

	}
}

function finishGame() {
	window.gameIsFinished = true;
	let dialog = document.querySelector('dialog')
	let h2 = dialog.querySelector('h2');
	h2.innerHTML = `${window.score.human > window.score.computer ? 'human' : 'computer'} won!`;
	dialog.showModal()
}
