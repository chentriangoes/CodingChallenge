
//Arrays in JavaScript can be used to store _____.
//1. numbers and strings
//2. other arrays
//3. booleans
//4. all of the above

//String values must be enclosed within _____ when being assigned to variables.
//1. commas
//2. curly brackets
//3. quotes
//4. parentheses

//A very useful tool used during development and debugging for printing content to the debugger is:
//1. JavaScript 
//2. terminal/bash
//3. for loops
//4. console.log

// fillName in form
//All done!
//Your final score is ????(number)
//Enter initals to a submission form

//Highscores
//list of scores eg. 1. YT - 30
//buttons for "Go Back" and "Clear Highscores"

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

// Each quiz as an object collecting properties of a question and four choices
var firstQuiz = {
    // Each property is made up of key-value pairs
    askedQ: "Commonly used data types DO NOT include:",
    firstChoice: "1. strings",
    secondChoice: "2. booleans",
    thirdChoice: "3. alerts",
    fourthChoice: "4. numbers",
    // isAlerts: true,
    // getScore: 5,
  };

  var secondQuiz = {
    // Each property is made up of key-value pairs
    askedQ: "The condition in an if/else statement is enclosed within _____.",
    firstChoice: "1. quotes",
    secondChoice: "2. curly brackets",
    thirdChoice: "3. parentheses",
    fourthChoice: "4. square brackets",
    // isAlerts: true,
    // getScore: 5,
  };

  var thirdQuiz = {
    // Each property is made up of key-value pairs
    askedQ: "Arrays in JavaScript can be used to store _____.",
    firstChoice: "1. numbers and strings",
    secondChoice: "2. other arrays",
    thirdChoice: "3. booleans",
    fourthChoice: "4. all of the above",
    // isAlerts: true,
    // getScore: 5,
  };

var titlequizEl = document.querySelector(".titleQuiz");
var rulechoiceEl = document.querySelector(".ruleChoice"); 
var contentEl = document.querySelector(".keyContent");
var firstliEl = document.createElement("li"); //or "ol" ?
var secondliEl = document.createElement("li");
var thirdliEl = document.createElement("li");
var fourthliEl = document.createElement("li");
var firstbtnEl = document.createElement("button"); //or "ol" ?
var secondbtnEl = document.createElement("button");
var thirdbtnEl = document.createElement("button");
var fourthbtnEl = document.createElement("button");
var chosenAnswer = document.createElement("p");


function setQuiz() {
    // Show the asked quiz
    titlequizEl.textContent = firstQuiz.askedQ;
    // Remove quiz challenge rule
    rulechoiceEl.textContent = ""; //[firstQuiz.firstChoice, firstQuiz.secondChoice,firstQuiz.thirdChoice,firstQuiz.fourthChoice,]

    // Align buttons to the left and remove bullets
    rulechoiceEl.style.textAlign = "left";
    rulechoiceEl.style.listStyle = "none";
    
    // Create unordered list with button for 4 choices
    rulechoiceEl.appendChild(firstliEl);
    firstliEl.appendChild(firstbtnEl).textContent = firstQuiz.firstChoice;
    rulechoiceEl.appendChild(secondliEl);
    secondliEl.appendChild(secondbtnEl).textContent = firstQuiz.secondChoice;
    rulechoiceEl.appendChild(thirdliEl);
    thirdliEl.appendChild(thirdbtnEl).textContent = firstQuiz.thirdChoice;
    rulechoiceEl.appendChild(fourthliEl);
    fourthliEl.appendChild(fourthbtnEl).textContent = firstQuiz.fourthChoice;

    // Choices in havor to become faded and hand
    
    // Hide the quiz start button
    startEl.style.display = "none";
    firstAnswer();
  }

  function firstAnswer()  {
  thirdbtnEl.addEventListener("click", function(){
      //c to display corrent 
      contentEl.appendChild(chosenAnswer).textContent = "Correct!";
      titlequizEl.textContent = secondQuiz.askedQ;
      firstliEl.appendChild(firstbtnEl).textContent = secondQuiz.firstChoice;
      secondliEl.appendChild(secondbtnEl).textContent = secondQuiz.secondChoice;
      thirdliEl.appendChild(thirdbtnEl).textContent = secondQuiz.thirdChoice;
      fourthliEl.appendChild(fourthbtnEl).textContent = secondQuiz.fourthChoice;
    });

    firstbtnEl.addEventListener("click", function(){
      contentEl.appendChild(chosenAnswer).textContent = "Incorrect!";
      titlequizEl.textContent = secondQuiz.askedQ;
      firstliEl.appendChild(firstbtnEl).textContent = secondQuiz.firstChoice;
      secondliEl.appendChild(secondbtnEl).textContent = secondQuiz.secondChoice;
      thirdliEl.appendChild(thirdbtnEl).textContent = secondQuiz.thirdChoice;
      fourthliEl.appendChild(fourthbtnEl).textContent = secondQuiz.fourthChoice;
    });

    secondbtnEl.addEventListener("click", function(){
      contentEl.appendChild(chosenAnswer).textContent = "Incorrect!";
      titlequizEl.textContent = secondQuiz.askedQ;
      firstliEl.appendChild(firstbtnEl).textContent = secondQuiz.firstChoice;
      secondliEl.appendChild(secondbtnEl).textContent = secondQuiz.secondChoice;
      thirdliEl.appendChild(thirdbtnEl).textContent = secondQuiz.thirdChoice;
      fourthliEl.appendChild(fourthbtnEl).textContent = secondQuiz.fourthChoice;
    });

    fourthbtnEl.addEventListener("click", function(){
      contentEl.appendChild(chosenAnswer).textContent = "Incorrect!";
      titlequizEl.textContent = secondQuiz.askedQ;
      firstliEl.appendChild(firstbtnEl).textContent = secondQuiz.firstChoice;
      secondliEl.appendChild(secondbtnEl).textContent = secondQuiz.secondChoice;
      thirdliEl.appendChild(thirdbtnEl).textContent = secondQuiz.thirdChoice;
      fourthliEl.appendChild(fourthbtnEl).textContent = secondQuiz.fourthChoice;
    });

    //if ( the anwer === firstQuiz.thirdChoice) {get score and show correct} else {show wrong and 10s penalise}
    // if (firstQuiz.thirdChoice.clicked) {
// alert('answer is correct');
//} else {
    // alert('answer is wrong');
//}
    // ___________________________________ //
    // show Correct!/Wrong! in intalic after quiz being answered  
    // var = 

}
   



// Click the quiz start button to begin the timer countdown and the quiz challenge 
startEl.addEventListener("click", function() {
  //secondsLeft = 60;
  setTime();
  setQuiz();
});

// Open the page to start the game in Java
// Coding Quiz Challenge
// Try to answer dthe following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!
// Start Quiz button