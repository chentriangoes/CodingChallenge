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
  if (iQuestion >= questions.length) {
    document.getElementsByClassName('question')[0].outerHTML = '';
    document.getElementsByClassName('answer')[3].outerHTML = '';
    document.getElementsByClassName('answer')[2].outerHTML = '';
    document.getElementsByClassName('answer')[1].outerHTML = '';
    document.getElementsByClassName('answer')[0].outerHTML = '';
    return;
  }
  document.getElementsByClassName('score')[0].innerHTML = score;  
  document.getElementsByClassName('question')[0].innerHTML = questions[iQuestion].question;
  var answers = document.getElementsByClassName('answer');
  for (let i = 0; i < answers.length; i++) {
    answers[i].innerHTML = questions[iQuestion].answers[i].text;
  }
}

document.addEventListener("DOMContentLoaded", function(event) { 
  var answers = document.getElementsByClassName('answer');
  for (let i = 0; i < answers.length; i++) {
    answers[i].onclick = function() {
      if (questions[iQuestion].answers[i].isCorrect) {
        score++;
      }
      iQuestion++;
      updateQuestionAndScore();
    }
  }
  updateQuestionAndScore();
});


// Selects element by class
var countEl = document.querySelector(".secondsCount");
var startEl = document.querySelector(".quizStart")

var secondsLeft = 4;

function setTime() {
// Sets interval in variable
secondsLeft = 4;
var timerInterval = setInterval(function() {
  secondsLeft--;
  countEl.textContent = secondsLeft;
  if(secondsLeft === 0) {
    // Stops execution of action at set interval
    clearInterval(timerInterval);
    // Calls function to fill name in form
    // fillName()
    // correctEl.textContent++;
  } 
}, 1000)
}

var titlequizEl = document.querySelector(".titleQuiz");
var rulechoiceEl = document.querySelector(".ruleChoice"); 
var quizEL = document.querySelector(".quiz");
//var contentEl = document.querySelector(".keyContent");
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