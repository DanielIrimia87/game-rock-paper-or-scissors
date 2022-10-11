/* ==================================
Assignment (Main JavaScript Project):
 ====================================
*/

/* 
Your game is going to play against the computer, so begin with a function called
computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
We’ll use this function in the game to make the computer’s play. 
Tip: use the console to make sure this is returning the expected output before moving to the next step!
 */

const computerPlay = () => {
    const computerOptions = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * 3);
    return options[random];
}

console.log(computerPlay());