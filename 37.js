const choices = ["rock","paper","scissors"]
const choicedisplay = document.getElementById("choiceDisplay")
const computerdisplay = document.getElementById("computerDisplay")
const resultdisplay= document.getElementById("resultDisplay")
const players = document.getElementById("playerScore")
const computers = document.getElementById("computerScore")

let playerScore =0
let computerScore =0
function playgame(playerchoice){
    const computerchoice = choices[Math.floor(Math.random()*3)];
    let result = ""

    
    if(computerchoice === playerchoice){
        result = "It is a tie"
    }
    else{

        switch(playerchoice){
            case "rock":
                result = (computerchoice ==="scissors")?"You lose":"You won";
                break;
            case "paper":
                result = (computerchoice==="scissors")?"You won":"You lose";
                break;
            case "scissors":
                result = (computerchoice ==="rock")?"You lose":"You won";
                break;
        }
    }
    resultdisplay.classList.remove("red","green")
    players.classList.add("green")
    computers.classList.add("red")
    switch(result){
        case "You won":
            playerScore ++;
            resultdisplay.classList.add("green")
            break;
        case "You lose":
            computerScore++;
            resultdisplay.classList.add("red")
            break;
    }
    choicedisplay.textContent = `Player's Choice : ${playerchoice}`
    computerdisplay.textContent = `Computer's Choice : ${computerchoice}`
    players.textContent = playerScore
    computers.textContent = computerScore
    resultdisplay.textContent=result;
}