// selected element
const againBtn = document.getElementsByClassName("again-Btn")[0];
const checkBtn = document.getElementsByClassName("check-Btn")[0];
const numberInput = document.getElementsByClassName("number-Input")[0];
const TitleText = document.getElementsByClassName("Title-Text")[0];
const startGussingText = document.getElementsByClassName("score-1-Text")[0];
const mainScore = document.getElementsByClassName("main-Score")[0];
const highScore = document.getElementsByClassName("high-Score")[0];
const TitleWrap = document.getElementsByClassName("Title-Wrap")[0];
const decorationBox = document.getElementsByClassName("decoration-Box")[0];
const decorationLine = document.getElementsByClassName("decoration-Line")[0];
const decorationText = document.getElementsByClassName("decoration-Text")[0];

// gelobal varibales
let scoreVal = 20;
let highScoreVal = 0;
let randomNum;

// functions
const checkNum = () => {
  const numberVal = numberInput.value;
  if (numberVal < 21 && numberVal > 0) {
    checkGuess(numberVal);
  } else {
    setValDefualt();
  }
};

// checkGuss function
const checkGuess = (numberVal) => {
  // first create random number

  // check if score is less then 0 if its restart the game.

  if (numberVal > randomNum) {
    // check if random num is lower then input
    startGussingText.textContent = "LOWER";
    scoreVal--;
    mainScore.textContent = `score: ${scoreVal}`;
    //// lower the score
    checkPoints();
    // check points
  } else if (numberVal < randomNum) {
    // check if random num is higher then input
    startGussingText.textContent = "HIGHER";
    scoreVal--;
    mainScore.textContent = `score: ${scoreVal}`;
    //// lower the score
    checkPoints();
    // check points
  } else {
    // change text / color / and disable the button
    startGussingText.textContent = "GOOD JOB";
    TitleText.textContent = "YOU GOT IT";
    TitleWrap.style.backgroundColor = "green";
    TitleText.style.color = "white";
    decorationLine.style.backgroundColor = "green";
    decorationBox.style.backgroundColor = "green";
    decorationLine.style.color = "white";
    decorationBox.style.color = "white";
    decorationText.textContent = `${randomNum}`;
    decorationText.style.color = "white";
    checkBtn.disabled = true;

    // if else lader for higher score
    if (highScoreVal > scoreVal) {
      //// if highscore is higher
      highScoreVal = highScoreVal;
      console.log("before higher");
      highScore.textContent = `highscore: ${highScoreVal}`;
    } else if (highScoreVal < scoreVal) {
      //// if highscore lower
      highScoreVal = scoreVal;
      console.log("higher then before");
      highScore.textContent = `highscore: ${highScoreVal}`;
    } else {
      //// if highscore same
      highScoreVal = highScoreVal;
      console.log("both are same");
      highScore.textContent = `highscore: ${highScoreVal}`;
    }
  }
};

// check if having more score points or not functions
const checkPoints = () => {
  if (0 >= scoreVal) {
    console.log("please restart the game you lost");
    TitleText.textContent = "please click on again! button.";
    startGussingText.textContent = "YOU LOST! please click on again! button.";
    checkBtn.disabled = true;
    mainScore.textContent = `score: ${scoreVal}`;
  } else {
    console.log("good to go");
  }
};

// create random number  function
const createRandNum = () => {
  randomNum = Math.floor(Math.random() * 20) + 1;
  console.log(randomNum);
};

// setValue to defualt function
const setValDefualt = () => {
  numberInput.value = 1;
  TitleText.textContent = `please enter something between 1 and 20`;
  console.log("less then 20 and more then 0");
};

// restarting game function
const restartGame = () => {
  // create new randomNumber function
  createRandNum();
  // set everything to normal function
  setEveryThingToNormal();
};

// this  is set Every Thing To Normal function
const setEveryThingToNormal = () => {
  scoreVal = 20;
  mainScore.textContent = `score: ${scoreVal}`;
  TitleText.textContent = "GUESS MY NUMBER!";
  startGussingText.textContent = "Start gussing...";
  checkBtn.disabled = false;
  decorationLine.style.backgroundColor = "white";
  decorationBox.style.backgroundColor = "white";
  TitleWrap.style.backgroundColor = "white";
  TitleText.style.color = "rgb(99, 91, 91)";
  decorationText.style.color = "rgb(99, 91, 91)";
  decorationText.textContent = `?`;
  numberInput.value = 1;
};

// event listner
createRandNum();
checkBtn.addEventListener("click", checkNum);
againBtn.addEventListener("click", restartGame);
