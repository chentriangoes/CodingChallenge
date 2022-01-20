//set the variable "questions" as an array holding objests of 5 questions
var questions = [
  {
    question: "Commonly used data types DO NOT include:",
    answers: [
      {text: "1. strings"},
      {text: "2. booleans"},
      {text: "3. alerts", isCorrect: true},
      {text: "4. numbers"},
    ]
  },
  {
    question: "The condition in an if/else statement is enclosed within _____.",
    answers: [
      {text: "1. quotes"},
      {text: "2. curly brackets"},
      {text: "3. parentheses", isCorrect: true},
      {text: "4. square brackets"},
    ]
  },
  {
    question: "Arrays in JavaScript can be used to store _____.",
    answers: [
      {text: "1. numbers and strings"},
      {text: "2. other arrays"},
      {text: "3. booleans"},
      {text: "4. all of the above", isCorrect: true},
    ]
  },
  {
    question: "String values must be enclosed within _____ when being assigned to variables.",
    answers: [
      {text: "1. commas"},
      {text: "2. curly brackets"},
      {text: "3. quotes", isCorrect: true},
      {text: "4. parentheses"},
    ]
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: [
      {text: "1. JavaScript"},
      {text: "2. terminal/bash"},
      {text: "3. for loops"},
      {text: "4. console.log", isCorrect: true}
    ]
  }]

//Question and Score Update
var score = 0;
var iQuestion = 0;
var recentScore = document.getElementsByClassName("finalscore");
var choiceEl = document.getElementsByClassName('choices');

function updateQuestionAndScore() {
  //Game ended when the number of questions is over 5
  if (iQuestion > questions.length) {
    return endGame();
  }
  recentScore[0].innerHTML = score;  
  choiceEl[0].innerHTML = questions[iQuestion].question;
  var answers = document.getElementsByClassName('answer');
  for (let i = 0; i < answers.length; i++) {
    answers[i].innerHTML = questions[iQuestion].answers[i].text;
  }
}

document.addEventListener("DOMContentLoaded", function(event) { 
  var answers = document.getElementsByClassName('answer');
  for (let i = 0; i < answers.length; i++) {
    answers[i].onclick = function() {
      //show correct answer responses including get 5 point and its message 
      if (questions[iQuestion].answers[i].isCorrect) {
        score = score + 5;
        outCome.style.visibility ="visible";
        outCome.textContent  = "Correct!";
      //show incorrect answer responses including get the penalty of 10 seconds deduction and its message 
      } else {secondsLeft = secondsLeft - 10;
      outCome.style.visibility ="visible";
      outCome.textContent  = "Incorrect!";
      }
      iQuestion++;
      updateQuestionAndScore();
    }
  }
  updateQuestionAndScore();
});

//Game ended when quiz are all answered or time is exhausted
//Submission form for user name and score is followed
var getscoreEl = document.querySelector('.getScore');
var outCome = document.querySelector(".outcome"); 

function endGame() {
  getscoreEl.style.visibility ="visible";
  outCome.style.visibility ="visible";
  outCome.style.top = "155px";
  outCome.style.left = "95px";
  quizEL.remove();
}

//Highscores board is displayed after the form for score and username is submitted
var submitEl = document.querySelector(".submit");

submitEl.addEventListener("click", function() {
var scoresEl = document.querySelector(".highScores");
contentEl.remove();
scoresEl.style.visibility = "visible";
});

//Set Timer
var countEl = document.querySelector(".secondsCount");
var startEl = document.querySelector(".quizStart");
var secondsLeft;

function setTime() {
 secondsLeft = "75"; //double check this and change it to 76 or 75
var timerInterval = setInterval(function() {
  secondsLeft--;
  countEl.textContent = secondsLeft;
  //Stop timer while no time or question is left
  if(secondsLeft === 0 || iQuestion >= questions.length) {
  //Stop execution of action at set interval
    clearInterval(timerInterval);
    return endGame();
  //Timer displays as "0" when the deducted timer would become nagive 
  } else if (secondsLeft < 0) {
    countEl.textContent = "0";
    return endGame();
  }
}, 1000)
}

//Start quiz and timer function
var titlequizEl = document.querySelector(".titleQuiz");
var rulechoiceEl = document.querySelector(".ruleChoice"); 
var quizEL = document.querySelector(".quiz");
var contentEl = document.querySelector(".keyContent");

function setQuiz() {
  // remove game introduction page and start quiz button
  titlequizEl.remove();
  rulechoiceEl.remove();
  startEl.remove();
  quizEL.style.visibility = "visible";
}

startEl.addEventListener("click", function() {
  setTime();
  setQuiz();
});

//Enter intitals function for local storage of scores and initials
var leadersEl = document.querySelector(".leaders");
var initialEl = document.getElementById("initials");
var test = document.querySelector(".finalscore");
var mostRecentScore = localStorage.getItem("mostRecentScore");

var savedHighscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
var Max_High_SCORES = 5;

submitEl.addEventListener("click", function() {
  mostRecentScore = test.innerText;
    
    var currentUser = initialEl.value.trim();
    
    var currentHighscore = {
      name: currentUser,
      score: mostRecentScore
    };

    savedHighscores.push(currentHighscore);
    savedHighscores.sort(function(a, b) {
      return b.score - a.score;
    });
    savedHighscores.splice(5);

    localStorage.setItem("savedHighscores", JSON.stringify(savedHighscores));
    printHighscores();
  });

function printHighscores(){
  // create li tag for 5 top scores
  var firstPlace = document.createElement("li");
  var secondPlace = document.createElement("li");
  var thirdPlace = document.createElement("li");
  var fourthPlace = document.createElement("li");
  var fifthPlace = document.createElement("li");
  //append child to the highscores
  leadersEl.appendChild(firstPlace);
  leadersEl.appendChild(secondPlace);
  leadersEl.appendChild(thirdPlace);
  leadersEl.appendChild(fourthPlace);
  leadersEl.appendChild(fifthPlace);
  // display available top 5 scores with names on the page
  firstPlace.textContent = savedHighscores[0].name + " -- " + savedHighscores[0].score;
  secondPlace.textContent = savedHighscores[1].name + " -- " + savedHighscores[1].score;
  thirdPlace.textContent = savedHighscores[2].name + " -- " + savedHighscores[2].score;
  fourthPlace.textContent = savedHighscores[3].name + " -- " + savedHighscores[3].score;
  fifthPlace.textContent = savedHighscores[4].name + " -- " + savedHighscores[4].score;
};

//Highscores
//Clear local storage and remove learders board
var clearEl = document.querySelector(".clearscore"); 

clearEl.addEventListener("click", function() {
  localStorage.clear();
  leadersEl.remove();
});

//onclick function for returning back to the home page
var backEl = document.querySelector(".backgame");

backEl.onclick = function() {
location.href ="file:///Users/yitsun/Desktop/BC/02_Assignments/04_CodingQuiz/CodingChallenge/index.html"; //change this please
};

//view highscores
var headerEl = document.querySelector(".timedScore")
var highEl = document.querySelector(".highScores")
var boardEl = document.querySelector(".scoreBoard")

boardEl.onclick = function() {
  highEl.style.visibility = "visible";
  headerEl.remove();
  contentEl.remove();
  };