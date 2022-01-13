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
  
var score = 0;
var iQuestion = 0;

function updateQuestionAndScore() {
  if (iQuestion > questions.length) {
    return endGame();
  }
  document.getElementsByClassName('finalscore')[0].innerHTML = score;  
  document.getElementsByClassName('question')[0].innerHTML = questions[iQuestion].question;
  var answers = document.getElementsByClassName('answer');
  for (let i = 0; i < answers.length; i++) {
    answers[i].innerHTML = questions[iQuestion].answers[i].text;
  }
}

//Game ended when quiz are all answered or time is exhausted
//Submission form for user name and score is followed

function endGame() {
  var getscoreEl = document.querySelector('.getScore');
  getscoreEl.style.visibility ="visible";
  quizEL.remove();
}

//Highscores board is displayed after the form for score and username is submitted
var submitEl = document.querySelector(".submit");

submitEl.addEventListener("click", function() {
  //secondsLeft = 60 // remove it pls;
var scoresEl = document.querySelector(".highScores");
contentEl.remove();
scoresEl.style.visibility = "visible";
});

//go back and clear highscores function


document.addEventListener("DOMContentLoaded", function(event) { 
  var answers = document.getElementsByClassName('answer');
  for (let i = 0; i < answers.length; i++) {
    answers[i].onclick = function() {
      if (questions[iQuestion].answers[i].isCorrect) {
        score = score + 5;
        //show answer is corret 
      } else {secondsLeft = secondsLeft - 10;
      //show answer is wrong
      } //not quite sure
      iQuestion++;
      updateQuestionAndScore();
    }
  }
  updateQuestionAndScore();
});


// Selects element by class
var countEl = document.querySelector(".secondsCount");
var startEl = document.querySelector(".quizStart");

var secondsLeft = 5;

//pls add something for timer not counting down to negative
function setTime() {
// Sets interval in variable
secondsLeft = 5; //double check this and change it to 76 or 75
var timerInterval = setInterval(function() {
  secondsLeft--;
  countEl.textContent = secondsLeft;
  //Stop timer while no time or question is left
  if(secondsLeft === 0 || iQuestion >= questions.length) {
    // Stops execution of action at set interval
    clearInterval(timerInterval);
    return endGame();
    // Calls function to fill name in form
    // fillName()
    // correctEl.textContent++;
  } 
}, 1000)
}

var titlequizEl = document.querySelector(".titleQuiz");
var rulechoiceEl = document.querySelector(".ruleChoice"); 
var quizEL = document.querySelector(".quiz");
var contentEl = document.querySelector(".keyContent");
//var firstliEl = document.createElement("li"); //or "ol" ?
//var secondliEl = document.createElement("li");
//var thirdliEl = document.createElement("li");
//var fourthliEl = document.createElement("li");
//var firstbtnEl = document.createElement("button"); //or "ol" ?
//var secondbtnEl = document.createElement("button");
//var thirdbtnEl = document.createElement("button");
//var fourthbtnEl = document.createElement("button");
//var chosenAnswer = document.createElement("p");


function setQuiz() {
  // remove title and game rule
  titlequizEl.remove();
  rulechoiceEl.remove();
  startEl.remove();
  quizEL.style.visibility = "visible";
}


startEl.addEventListener("click", function() {
  //secondsLeft = 60;
  setTime();
  setQuiz();
});


//function displayItems() {
//  var l, i;
//  document.getElementById("demo").innerHTML = "";
//  for (i = 0; i < localStorage.length; i++) {
//  x = localStorage.key(i);
//  document.getElementById("demo").innerHTML += x + "<br>";
//  }
//}

var leadersEl = document.querySelector(".leaders");
var leadersLi = document.createElement("li")

submitEl.addEventListener("click", function() {
  var initial = document.getElementById("initials"); //is null at the moment .value shows not connecting
  var sentScore = document.querySelector(".finalscore"); //isnull at the mement .value shows not connecting
  leadersEl.appendChild(leadersLi).textContent = localStorage.getItem("name") + " -- " + localStorage.getItem("score");
  //Save the initial and the score to localStorage and render the last registered user
  localStorage.setItem("name", initial);
  localStorage.setItem("score", sentScore);
});


//clear local storage and remove learders board
var clearEl = document.querySelector(".clearscore"); 

clearEl.addEventListener("click", function() {
  localStorage.clear();
  leadersEl.remove();
});

//onclick function for returning back to the home page
var backEl = document.querySelector(".backgame");

backEl.onclick = function() {
location.href ="file:///Users/yitsun/Desktop/BC/02_Assignments/04_CodingQuiz/CodingChallenge/index.html";
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


//var counter = document.querySelector(".highScores li[]");
//var count = localStorage.getItem("score or name");

///counter.textContent = count;
