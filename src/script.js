// selected element
const againBtn = document.getElementsByClassName("again-Btn")[0];
const checkBtn = document.getElementsByClassName("check-Btn")[0];
const numberInput = document.getElementsByClassName("number-Input")[0];
const TitleText = document.getElementsByClassName("Title-Text")[0];
const startGussingText = document.getElementsByClassName("score-1-Text")[0];
const mainScore = document.getElementsByClassName("main-Score")[0];
const highScore = document.getElementsByClassName("high-Score")[0];
const decorationText = document.getElementsByClassName("decoration-Text")[0];

// gelobal varibales
let scoreVal = 20;
let highScoreVal = 0;
// functions
const checkNum = () => {
  const numberVal = numberInput.value;
  if (numberVal < 21 && numberVal > 0) {
    checkGuess();
  } else {
    setValDefualt();
  }
};

// checkGuss function
const checkGuess = () => {
  // first create random number
  // check if random num is higher then input
  //// lower the score
  // check if random num is lower then input
  //// lower the score
  // check if the input is same
  //// if highscore is higher
  //// if highscore lower
  //// if highscore same
};

// setValue to defualt function
const setValDefualt = () => {
  numberInput.value = 1;
  TitleText.textContent = `please enter something between 1 and 20`;
  console.log("less then 20 and more then 0");
};

// event listner
checkBtn.addEventListener("click", checkNum);
