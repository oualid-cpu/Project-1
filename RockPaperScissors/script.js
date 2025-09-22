// Take the player's choice from command line
let playerChoice = process.argv[2]

// check if input is valid
const  choices = ["r","p","s"]
if (!choices.includes(playerChoice)) {
    console.log("Please choose: 'r' for Rock, 'p' for Paper and 's' for Scissors")
    process.exit()
}

// Computer choose: randomly
let computerChoice = choices[Math.floor(Math.random() * 3)] // i can use choices.length which is 3

//  Decide winner
let result;
if  (playerChoice === computerChoice) {
    result = "It's a draw 😒"
} else if (
    (playerChoice === "r" && computerChoice === "s") ||
    (playerChoice === "p" && computerChoice === "r") ||
    (playerChoice === "s" && computerChoice === "p") 
) {
    result = "You win 💪🏼"
} else {
    result = "You lose 👎🏼"
}

// function to show full word
function fullWord(choice) {
  if (choice === "r") return "Rock";
  if (choice === "p") return "Paper";
  if (choice === "s") return "Scissors";
}

// Show result
console.log(`You choose ${fullWord(playerChoice)} and the computer choosed ${fullWord(computerChoice)}. ${result}`)



