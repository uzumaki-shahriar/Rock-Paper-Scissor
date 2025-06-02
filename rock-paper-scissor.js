const buttons = document.querySelectorAll('#game-pictures button');
let userScore = document.querySelector('#user-score');
let computerScore = document.querySelector('#computer-score');
let result = document.querySelector('#result-text');
let resetButton = document.querySelector('#reset');

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        let userChoice = btn.id;

        buttons.forEach(b => b.classList.remove('computer-selected'));
        const randomIndex = Math.floor(Math.random() * buttons.length);
        const computerBtn = buttons[randomIndex];
        computerBtn.classList.add('computer-selected');
        let computerChoice = computerBtn.id;

        let winner = '';
        if (userChoice === computerChoice) {
            winner = "It's a draw!";
        } else if (
            (userChoice === 'rock' && computerChoice === 'scissor') ||
            (userChoice === 'paper' && computerChoice === 'rock') ||
            (userChoice === 'scissor' && computerChoice === 'paper')
        ) {
            winner = "You win!";
            userScore.textContent = Number(userScore.textContent) + 1;
        } else {
            winner = "Computer wins!";
            computerScore.textContent = Number(computerScore.textContent) + 1;
        }
        result.textContent = winner;
        result.style.color = winner.includes("You win!") ? 'green' :winner.includes("Computer wins!") ?'yellow': 'red';
        result.style.fontSize = '1.3em';
        result.style.fontWeight = 'bold';
    });


});

resetButton.addEventListener('click', () => {
    userScore.textContent = '0';
    computerScore.textContent = '0';
    result.textContent = '';
    buttons.forEach(b => b.classList.remove('selected', 'computer-selected'));
    // result.style.color = '';
    // result.style.fontSize = '';
    // result.style.fontWeight = '';
});