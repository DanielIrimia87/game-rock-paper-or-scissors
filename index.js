/* ==================================
    Assignment (Main JavaScript Project):
   ==================================
*/

/* initial state */
let playerSore = 0;
let computerScore = 0;
let message = "";

/**
 * The computerPlay function returns a random option from the computerOptions array.
 * @returns The computer's choice of rock, paper, or scissors.
 */
const computerPlay = () => {
    const computerOptions = ["Rock", "Paper", "Scissors"];
    const randomOption = Math.floor(Math.random(computerOptions) * 3);
    return computerOptions[randomOption];
}

/**
 * The playRound function takes two parameters, playerSelection and computerSelection, and returns a message that
 * tells the player whether they won, lost, or tied
 * @param playerSelection - the player's choice
 * @param computerSelection - a string that represents the computer's choice
 */
const playRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return message = `It's a tie! You both chose ${playerSelection}`;
    } else if (
        playerSelection === "rock" && computerSelection === "scissors" || 
        playerSelection === "paper" && computerSelection === "rock" || 
        playerSelection === "scissors" && computerSelection === "paper") {
        return message = `Player win! Player chose ${playerSelection} and computer chose ${computerSelection}.`;
    } else if (
        playerSelection === "rock" && computerSelection === "paper" || 
        playerSelection === "paper" && computerSelection === "scissors" || 
        playerSelection === "scissors" && computerSelection === "rock") {
        return message = `Computer win! Player chose ${playerSelection} and computer chose ${computerSelection}.`;
    } else {
        return message = "Invalid input. Please try again.";
    }

}

/**
 * The game function is a loop that runs 5 times, each time it runs it calls the playRound function and
 * passes the playerSelection and computerSelection as arguments
 * @returns the message variable.
 */
const game = () => {

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt(`Round ${i + 1}: Enter your choice: Rock, Paper, or Scissors`);
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        console.log(message);

        /* The includes() method determines whether an array includes a certain value among
        its entries, returning true or false as appropriate. */
        if (message.includes("Player win")) {
            playerSore++;
            console.log(`Player score: ${playerSore} Computer score: ${computerScore}`);
        } else if (message.includes("Computer win")) {
            computerScore++;
            console.log(`Player score: ${playerSore} Computer score: ${computerScore}`);
        } else{
            console.log(`Player score: ${playerSore} Computer score: ${computerScore}`);
        }
    }

    if (playerSore > computerScore) {
        console.log(`Player win the game! Player score: ${playerSore} Computer score: ${computerScore}`);
    } else if (playerSore < computerScore) {
        console.log(`Computer win the game! Player score: ${playerSore} Computer score: ${computerScore}`);
    } else {
        console.log(`It's a tie! Player score: ${playerSore} Computer score: ${computerScore}`);
    }

    return message;
}

game();
