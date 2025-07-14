var player1 = "Rock";
var player2 = "Scissor";
if (player1 === player2) {
    console.log("Its a tie!");
}
else if ((player1 == "Rock" && player2 === "Scissor") ||
    (player1 == "Scissor" && player2 === "paper") ||
    (player1 == "Paper" && player2 === "Rock")) {
    console.log("player1 is Wins!");
}
else {
    console.log("player2 is wins");
}
