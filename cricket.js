let computerChoice;
        let resultMsg;

        function generateComputerChoice() {
            let randomNum = Math.random() * 3;

            if (randomNum >= 0 && randomNum < 1) {
                computerChoice = 'ROCK';
            } else if (randomNum >= 1 && randomNum < 2) {
                computerChoice = 'PAPER';
            } else {
                computerChoice = 'SCISSORS';
            }
        }

        function playGame(playerChoice) {
            console.log(`You have chosen ${playerChoice}!`);
            generateComputerChoice();
            console.log(`Computer choice is ${computerChoice}`);

            if (computerChoice === playerChoice) {
                resultMsg = 'It\'s a tie';
            } else if ((playerChoice === 'ROCK' && computerChoice === 'SCISSORS') ||
                       (playerChoice === 'PAPER' && computerChoice === 'ROCK') ||
                       (playerChoice === 'SCISSORS' && computerChoice === 'PAPER')) {
                resultMsg = 'You won';
            } else {
                resultMsg = 'Computer won';
            }

            alert(`You have chosen ${playerChoice}. Computer choice is ${computerChoice} and ${resultMsg}`);
        }