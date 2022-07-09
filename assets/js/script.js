const buttons = document.getElementsByTagName("button");




document.addEventListener("DOMContentLoaded",function(){
    
    for (let button of buttons){
        button.addEventListener("click",function(){
          let userChoice = this.getAttribute("draw-type");
          console.log(userChoice);
        })
    }
})





