//TODO win or loss screen
//TODO update after click

var userCount = 0,
  compCount = 0;
const userScore = document.querySelector(".userScore");
const compScore = document.querySelector(".computerScore");
const comboResult = document.querySelector(".result");

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

//Start game
const startBtn = document.querySelector(".btn");
const startCover = document.querySelector(".start-screen");
startBtn.addEventListener("click", function (e) {
  //Ask for the player his/her name and fill in playfield
  askAndSetName();
  userScore.textContent = 0;
  compScore.textContent = 0;
  startCover.classList.toggle("hide");
});

function askAndSetName() {
  //Ask for player his/her name
  var userInput = prompt("Please enter your name");
  var playerName = document.querySelector(".playername");

  //Check if text field is NOT empty &
  if (userInput) {
    //Set first letter in CAP, the rest in lower
    const cleanInput =
      userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
    playerName.textContent = cleanInput;
  }
}

// --------------------------------------
const weapons = document.querySelectorAll(".weapons__item");
weapons.forEach((weapon) => {
  weapon.addEventListener("click", checkMove);
});

function checkMove(e) {
  const array1 = ["unicorn", "donut", "rock"];
  const rndmComp = Math.floor(Math.random() * 3); //Get random number for computers choice
  const userAnswer = e.target.getAttribute("data-weapon"); //Get users choice
  const compAnswer = array1[rndmComp]; //Set computers choice

  const result = comboCheck(userAnswer, compAnswer);
  counter(result);
  comboResult.textContent = result;
}

function comboCheck(a, b) {
  if (
    (a == "unicorn" && b == "rock") ||
    (a == "donut" && b == "unicorn") ||
    (a == "rock" && b == "donut")
  ) {
    //end of first if "declaration"
    return "You won";
  } else if (
    (a == "unicorn" && b == "donut") ||
    (a == "donut" && b == "rock") ||
    (a == "rock" && b == "unicorn")
  ) {
    //end of second if "declaration"
    return "You lost";
  } else {
    return "It's a draw";
  }
}

function counter(result) {
  if (result == "You won") {
    userCount++;
    userScore.textContent = userCount;
  } else if (result == "You lost") {
    compCount++;
    compScore.textContent = compCount;
  }

  if (userCount >= 5) {
    alert("you won");
    userCount = 0;
    compCount = 0;
    startCover.classList.toggle("hide");
  }

  if (compCount >= 5) {
    alert("comp won");
    userCount = 0;
    compCount = 0;
    startCover.classList.toggle("hide");
  }
}
