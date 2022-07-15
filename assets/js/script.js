const buttons = document.getElementsByTagName("button");
let comTurn = document.getElementById("com-choice");
let announce_p = document.getElementById("announce");






document.addEventListener("DOMContentLoaded",function(){
    
    for (let button of buttons){
        button.addEventListener("click",function(){
          let userChoice = this.getAttribute("draw-type");
          computerChoice();
          winnerCheck();
         
          
        })
    }
})

function computerChoice() {
    /*let choices = ['rock','paper','scissors'];*/
   
    let imgArray = new Array();

    imgArray[0] = new Image();
    imgArray[0].src = "assets/images/rock.jpg" ;
    
    
    imgArray[1] = new Image();
    imgArray[1].src = "assets/images/paper.png";
    
    imgArray[2] = new Image();
    imgArray[2].src = "assets/images/scissors.png";
    let randomNum = Math.floor(Math.random()*3);
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

    }
    
    /*let randomChosenPic = imgArray[random];
    comTurn.appendChild(imgArray[random]);
    return comTurn;*/

}


function winnerCheck(){
    let userChoice = document.getElementsByClassName('draw-type');
    if ( userChoice.innerHTML === 'rock' && comTurn.innerHTML === imgArray[0]){
        announce_p.innerHTML = "It is a tie.";
    } else if (userChoice.innerHTML === 'rock' && comTurn.innerHTML === imgArray[1]) {
        announce_p.innerHTML = "Com wins";
    } else if (userChoice.innerHTML === 'rock' && comTurn.innerHTML === imgArray[2]) {
        announce_p.innerHTML = "You win";
    } else {
        announce_p.innerHTML = "You have to shoot!";
    }

}
/*
function winnerCheck(){
    if (this.getAttribute('draw-type') === 'rock' && comTurn.innerHTML === imgArray[0]){
        console.log("Draw");
    } else if (this.getAttribute('draw-type') === 'rock' && comTurn.innerHTML === imgArray[1] ) {
        console.log("I win");
    } else  (this.getAttribute('draw-type') === 'rock' && comTurn.innerHTML === imgArray[2] );{
        console.log("You win");
    }

}
*/






