// my html element references
var timerQz = document.getElementById("timer-count")
var startBtn = document.getElementById('start-quiz')
var quizParts = {
   testName: document.getElementById('test-name'),
   theQuestion: document.getElementById('theQuestion'),
   yourScore: document.getElementById('yourScore'),
   scores: document.getElementById('scores')
}

quizParts.theQuestion.style.setProperty('display', 'none');
quizParts.yourScore.style.setProperty('display', 'none');
quizParts.scores.style.setProperty('display', 'none');

function startQuiz() {
 
// when I press start the quiz begins
// the timer starts 
// the main screen is hidden
quizParts.testName.style.setProperty('display', 'none');
// switching to the question screen
quizParts.theQuestion.style.setProperty('display', 'block');
}
startBtn.addEventListener('click', startQuiz);

 