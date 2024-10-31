export default function playOneRound(humanChoice) {
	let randomNumberForComputer = Math.floor(Math.random() * 3);
	let computerChoice = returnText(randomNumberForComputer)
	humanChoice = returnText(humanChoice)
	let winner = evaluateWinner(humanChoice, computerChoice)
	return {humanChoice, computerChoice, winner}
}

function returnText(number) {
	let equevalent = {
		'0': 'rock',
		'1': 'paper',
		'2': 'scissor',
	};
	return equevalent[`${number}`]
}

function evaluateWinner(humanChoice, computerChoice) {
	switch (humanChoice) {
		case 'rock':
			return computerChoice == 'rock' ? '=' : computerChoice == 'paper' ? 'computer' : 'human';
		case 'paper':
			return computerChoice == 'rock' ? 'human' : computerChoice == 'paper' ? '=' : 'computer';
		case 'scissor':
			return computerChoice == 'rock' ? 'computer' : computerChoice == 'paper' ? 'human' : '=';
	}
}

