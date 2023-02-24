let result_display = document.getElementById("result");
let rock_choice = document.getElementById("rock");
let paper_choice = document.getElementById("paper");
let sci_choice = document.getElementById("sci");
let y = document.getElementById("computerScore")

var myArray = [
    "r",
    "p",
    "s"
  ];


let x = function (){
  return myArray[Math.floor(Math.random()*myArray.length)];
}


rock_choice.addEventListener("click",function (){
  let x = myArray[Math.floor(Math.random()*myArray.length)];
  if (computerScore.innerHTML === "10"){
      result_display.innerHTML =  "YOU LOST A BATTLE,BUT NOT A WAR..."
      playerScore.innerHTML = 0;
      computerScore.innerHTML = 0;
  }
  else if(playerScore.innerHTML === "10"){
    result_display.innerHTML =  "YOU'RE SMARTER THAN AI, CONGRATULATIONS"
      playerScore.innerHTML = 0;
      computerScore.innerHTML = 0;
  }
  else{
  if (x === "s"){
    result_display.innerHTML = "YOU WON, ROCK BEATS SCISSORS"
    var number = playerScore.innerHTML;
    number++;
    playerScore.innerHTML = number;
  }
  else if (x==="p") {
    result_display.innerHTML = "YOU LOST, PAPER BEATS ROCK"
    var number = computerScore.innerHTML;
    number++;
    computerScore.innerHTML = number;
  }

  else{
    result_display.innerHTML = "DRAW, ROCK VS ROCK";
  }
}
});

paper_choice.addEventListener("click",function (){
  let x = myArray[Math.floor(Math.random()*myArray.length)];
  if (computerScore.innerHTML === "10"){
    result_display.innerHTML =  "YOU LOST A BATTLE,BUT NOT A WAR..."
    playerScore.innerHTML = 0;
    computerScore.innerHTML = 0;
}
else if(playerScore.innerHTML === "10"){
  result_display.innerHTML =  "YOU'RE SMARTER THAN AI, CONGRATULATIONS"
    playerScore.innerHTML = 0;
    computerScore.innerHTML = 0;
}
else{
  if (x === "r"){
    result_display.innerHTML = "YOU WON, PAPER BEATS ROCK"
    var number = playerScore.innerHTML;
    number++;
    playerScore.innerHTML = number;
  }
  else if (x==="s") {
    result_display.innerHTML = "YOU LOST, SCISSORS BEATS PAPER"
    var number = computerScore.innerHTML;
    number++;
    computerScore.innerHTML = number;
  }

  else{
    result_display.innerHTML = "DRAW, PAPER VS PAPER"
  }
}});

sci_choice.addEventListener("click",function (){
  let x = myArray[Math.floor(Math.random()*myArray.length)]
  if (computerScore.innerHTML === "10"){
    result_display.innerHTML =  "YOU LOST A BATTLE,BUT NOT A WAR..."
    playerScore.innerHTML = 0;
    computerScore.innerHTML = 0;
}
else if(playerScore.innerHTML === "10"){
  result_display.innerHTML =  "YOU'RE SMARTER THAN AI, CONGRATULATIONS"
    playerScore.innerHTML = 0;
    computerScore.innerHTML = 0;
}
else{
  if (x === "p"){
    result_display.innerHTML = "YOU WON, SCISSORS BEATS PAPER"
    var number = playerScore.innerHTML;
    number++;
    playerScore.innerHTML = number;
  }
  else if (x==="r") {
    result_display.innerHTML = "YOU LOST, ROCK BEATS SCISSORS"
    var number = computerScore.innerHTML;
    number++;
    computerScore.innerHTML = number;
  }

  else{
    result_display.innerHTML = "DRAW, SCISSORS VS SCISSORS"
  }
}});