var choices = ['Dwayne Johnson', 'Paper', 'Scissors']
var random_choice;
var user_input;

function selRock(){
  user_input = 'Dwayne Johnson';
  random_num();
}

function selPaper(){
  user_input = 'Paper';
  random_num();
}

function selScissor(){
  user_input = 'Scissors';
  random_num();
}




function winnerIs() {
  var draw =  "You choose: " + user_input + " <br> Computer chooses: " + random_choice + " <br> It's a draw!";
  var loser = "You choose: " + user_input + " <br> Computer chooses: " + random_choice + " <br> You lose!";
  var winner  = "You choose: " + user_input + " <br> Computer chooses: " + random_choice + " <br> You win!";



  if (user_input === "Dwayne Johnson" && random_choice === choices[0]){
    document.getElementById('result').innerHTML = draw;
  } else if (user_input === "Dwayne Johnson" && random_choice === choices[1]) {
    document.getElementById('result').innerHTML = loser;
  } else if (user_input === "Dwayne Johnson" && random_choice === choices[2]) {
    document.getElementById('result').innerHTML = winner;
  } else if (user_input === "Paper" && random_choice === choices[1]) {
    document.getElementById('result').innerHTML = draw;
  } else if (user_input === "Paper" && random_choice === choices[2]) {
    document.getElementById('result').innerHTML = loser;
  } else if (user_input === "Paper" && random_choice === choices[0]) {
    document.getElementById('result').innerHTML = winner;
  } else if (user_input === "Scissors" && random_choice === choices[2]) {
    document.getElementById('result').innerHTML = winner;
  } else if (user_input === "Scissors" && random_choice === choices[1]) {
    document.getElementById('result').innerHTML = winner;
  } else if (user_input === "Scissors" && random_choice === choices[0]) {
    document.getElementById('result').innerHTML = loser;
  }
}

function random_num(){
  var i = Math.random();
  if (i < 0.33) {
    i = 0
  } else if (i < 0.66) {
    i = 1
  } else if (i < 1) {
    i = 2
  }
  random_choice = choices[i];
  winnerIs()
}
