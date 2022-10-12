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
        message = `You both chose ${playerSelection}.`;
    } else if (
        playerSelection === "rock" && computerSelection === "scissors" || 
        playerSelection === "paper" && computerSelection === "rock" || 
        playerSelection === "scissors" && computerSelection === "paper") {
        message = `Player win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        message = `You lose! Computer win ${computerSelection} beats ${playerSelection}.`;
    } 
}

/**
 * The game function is a loop that runs 5 times, each time it runs it calls the playRound function and
 * passes the playerSelection and computerSelection as arguments
 * @returns the message variable.
 */
const game = () => {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Please enter your choice: Rock, Paper, or Scissors.");
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        console.log(message);

        /* 
        This is a conditional statement that checks if the message variable contains the string
        "Player win" and if it does, it increments the playerSore variable by 1 and logs the
        playerSore and computerScore variables to the console. 
        If the message variable does not contain the string "Player win" it checks if it contains
        the string "Computer win" and if it does, it increments the computerScore variable by 1
        and logs the playerSore and computerScore variables to the console. If the message variable 
        does not contain the string "Computer win" it logs the playerSore and computerScore variables 
        to the console. */
        if (message.includes("Player win")) {
            playerSore++;
            console.log(`Playe scorer: ${playerSore} Computer score: ${computerScore}`);
        } else if (message.includes("Computer win")) {
            computerScore++;
            console.log(`Player score: ${playerSore} Computer score: ${computerScore}`);
        } else {
            console.log(`Player score: ${playerSore} Computer score: ${computerScore}`);
        }
    }

    /* This is a conditional statement that checks if the playerSore variable is greater than the
    computerScore variable. If it is, it logs the string "Player win the game!" to the console. If
    it is not, it checks if the playerSore variable is less than the computerScore variable. If it
    is, it logs the string "Computer win the game!" to the console. If it is not, it logs the string
    "It's a tie!" to the console. */
    if (playerSore > computerScore) {
        console.log("Player win the game!");
    } else if (playerSore < computerScore) {
        console.log("Computer win the game!");
    } else {
        console.log("It's a tie!");
    }
    return message;
}

game();
