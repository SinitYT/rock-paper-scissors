const buttons = document.getElementsByTagName("button");
const userScore = document.getElementById("user-score");
const computerScore = document.getElementById("computer-score");
const userImage = document.getElementById("user-image");
const computerImage = document.getElementById("computer-image");
const winner = document.getElementById("winner");
const choices= ['rock','paper','scissors'];
let randomNum;




document.addEventListener("DOMContentLoaded",function(){
    
    for (let button of buttons){
        button.addEventListener("click",function(){
          let userChoice = this.getAttribute("draw-type");
          startGame(userChoice);
          winner.textContent = checkWinner(userChoice,choices);
          countScore();
         
          
        })
    }
})

function startGame(userChoice) {
    
    userImage.src = `assets/images/${userChoice}.jpg`;
    userImage.alt = userChoice;
    randomNum = Math.floor(Math.random()*3);
    computerImage.src = `assets/images/${choices[randomNum]}.jpg`;
    computerImage.alt = choices[randomNum];
    
 }
    
  




function checkWinner(userChoice, choices){
    if (userChoice === choices[randomNum]){
        return "It's a tie!";
    }
    else if (choices[randomNum] === 'rock'){
        return (userChoice === 'paper') ? "You win!" : "You lose!";
    }
    else if (choices[randomNum] === 'paper'){
        return (userChoice === 'scissors') ? "You win!" : "You lose!";
    }
    else if (choices[randomNum] === 'scissors'){
        return (userChoice === 'rock') ? "You win!" : "You lose!";
    }
    
}


function countScore(){
    
    if (winner.textContent === "You win!"){
        let userOldScore = parseInt(document.getElementById("user-score").innerText);
        userScore.innerText = ++userOldScore;
    }
    else if (winner.textContent === "You lose!") {

        let computerOldScore = parseInt(document.getElementById("computer-score").innerText);
        computerScore.innerText = ++computerOldScore;
    }
    else {
        userScore.innerText = ++userOldScore;
        computerScore.innerText = ++computerOldScore;

    }
    
    
}
    
    

    

 






