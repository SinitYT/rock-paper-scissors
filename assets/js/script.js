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
         
          
        })
    }
})

function startGame(userChoice) {
    
/*
    let imgArray = new Array();

    imgArray[0] = new Image();
    imgArray[0].src = "assets/images/rock.jpg" ;
    
    
    imgArray[1] = new Image();
    imgArray[1].src = "assets/images/paper.png";
    
    imgArray[2] = new Image();
    imgArray[2].src = "assets/images/scissors.png";
    */
    userImage.src = `assets/images/${userChoice}.jpg`;
    userImage.alt = userChoice;
    randomNum = Math.floor(Math.random()*3);
    computerImage.src = `assets/images/${choices[randomNum]}.jpg`;
    computerImage.alt = choices[randomNum];
    
    /*
    switch (randomNum){
        case 0:
            comTurn.appendChild(imgArray[0]);
            break;
        case 1:
            comTurn.appendChild(imgArray[1]);
            break;
        case 2:
            comTurn.appendChild(imgArray[2]);
            break;
*/
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
 






