const buttons = document.getElementsByTagName("button");
let comTurn = document.getElementById("com-choice");






document.addEventListener("DOMContentLoaded",function(){
    
    for (let button of buttons){
        button.addEventListener("click",function(){
          let userChoice = this.getAttribute("draw-type");
          computerChoice();
         
          
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
    let random = Math.floor(Math.random()*3);
    /*let randomChosenPic = imgArray[random];*/
    comTurn.appendChild(imgArray[random]);
    return comTurn;

}






