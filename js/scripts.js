
const questions = [
   {
     text: "what is string?",
     answers: [
       'A) a number',
       'B) a text character or word',
       'C) a variable',
       'D) a way to store objects',
     ],
     correct: "B",
   },
   {
     text:
       "What is a variable?",
     answers: [
       'A) a number',
       'B) a text character',
       'C) a countainer that holds a value',
       'D) a question',
     ],
     correct: "C",
   },
   {
     text:
       "What is an Array used for in coding?",
     answers: [
      'A) Space staion energy storage', 
      'B) A way to design draw multiple copies of a pattern',
      'C) A way to store a list or colllection of items in a sing variable name',
      'D) A way to store primative data types or values'],
     correct: "C",
   }];


// my html element references
var timerQz = document.getElementById("timer-count")
var startBtn = document.getElementById('start-quiz')
var quizParts = {
   testName: document.getElementById('test-name'),
   theQuestion: document.getElementById('theQuestion'),
   yourScore: document.getElementById('yourScore'),
   scores: document.getElementById('scores')
}

var nextBtn = document.getElementById('nextbtn')

quizParts.theQuestion.style.setProperty('display', 'none');
quizParts.yourScore.style.setProperty('display', 'none');
quizParts.scores.style.setProperty('display', 'none');

let questionNo;
let questionAnswer;
let timeLeft;
let scores;




function startQuiz() {
 
// when I press start the quiz begins
// the timer starts 
// the main screen is hidden
quizParts.testName.style.setProperty('display', 'none');
// switching to the question screen
quizParts.theQuestion.style.setProperty('display', 'block');
}
startBtn.addEventListener('click', startQuiz);


 