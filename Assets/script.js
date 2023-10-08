/* pseudo code:
i need a bar at the top that displays time remaining, and have a button to show saved high-scores from local storage
in the main body i need a button that when pressed starts the quiz and dynamically displays the question with possible answers underneath as buttons. 
at the bottom i need a bar that displays whether the answer is right or wrong. when answered wrong it subtracts time from the timer
when finished, either all the questions or running out of time, the quiz takes the remaining time if any and saves it in local storage as the score, along with the provided initials of the test taker */

/* 
Questions skeleton array to create multiple questions quickly with copy and paste
{
    title: "",
    answers: ["","","",""],
    correctAnswer: ""
}
*/
const questions = [
    {
        title: "The condition in an if/else statement is enclosed with _____",
        answers: ["Square Brackets","Quotations","Curly Braces","Parenthesis"],
        correctAnswer: "Parenthesis"
    },
    
    {
        title: "A true/false value is known as a____ ",
        answers: ["string","boolean","null","number"],
        correctAnswer: "boolean"
    },

    {
        title: "What is 'API' an acronym for?",
        answers: ["Average Processing Interval","Annual Programmer's Invitational","Application Programming Interface","Accounted Per Index"],
        correctAnswer: "Application Programming Interface"
    },

    {
        title: "Which of the following can an object store?",
        answers: ["Arrays","Functions","Methods","All of the above"],
        correctAnswer: "All of the above"
    },

    {
        title: "How are Arrays indexed?",
        answers: ["first","last","zero","quarter"],
        correctAnswer: "zero"
    },

    {
        title:"Which of the following helps prevent event bubbling?",
        answers:["noBubbles()","stopPropagation()","quitBubble()","denyPropagation()"],
        correctAnswer:"stopPropagation()"
    }
];
console.log(questions[0])
console.log(questions[0].answers)
// setting the section parents as variables to use later
const timeBar = document.querySelector(".timeBar");
const timerEl = document.getElementById("timerEl");
const scoreEl = document.getElementById('scoreBox');
const smarties = document.getElementById('smartyList');
const gameCont = document.querySelector(".gameCont");
const question = document.querySelector(".questionHolder")
const choices = document.querySelector(".answerHolder")
const a1 = document.getElementById('a1');
const a2 = document.getElementById('a2');
const a3 = document.getElementById('a3');
const a4 = document.getElementById('a4');
const startBtn = document.querySelector(".startBtn");
const areYouSmart = document.querySelector(".areYouSmart");
// for the timer
const timeRemaining = 30; // Timer duration in seconds
let gameStart = false;
console.log(gameStart);

// Event listener for button click to start 
gameCont.addEventListener('click',function (event) {
    if (event.target.classList.contains('startBtn')){
        event.stopPropagation();
        startGame();
    }
});

// event listener for the correct answer
choices.addEventListener("click", function (event) {
    if (event.target.textContent === questions.correctAnswer)
    event.stopPropagation();
    nextQuestion();
});

function startGame() {
    let gameStart = true; // Change the constant value to true
    console.log(gameStart)
    // hides the start button when quiz begins
    startBtn.style.display = "none"
    choices.style.display = "flex"
    let remainingTime = timeRemaining;
    timerEl.textContent = `Time: ${remainingTime}`;

    // Start the timer
    const timer = setInterval(function () {
    remainingTime--;
    timerEl.textContent = remainingTime;

    // Switch statement for different time messages
    switch (remainingTime) {
        case 10:
            timerEl.textContent = 'Hurry up! Only 10 seconds left!';
            timerEl.style = "color: red"
            break;
        case 5:
            timerEl.textContent = 'Almost there! Just 5 seconds remaining!';
            break;
        case 0:
            clearInterval(timer); // Stop the timer
            isActive = true; // Reset the state to true
            timerEl.textContent = 'Timer completed';
            break;
        default:
        // Display remaining time
            timerEl.textContent = `${remainingTime} seconds remaining.`;
    }

    // Check if the timer has reached 0
    if (remainingTime <= 0) {
        clearInterval(timer); // Stop the timer
        let gameStart = false; // Reset the state to false
        console.log(gameStart);
        timerEl.textContent = 'Time expired try again.';
        timerEl.style = "color: black";
        // changes the text of the start button and shows it again
        startBtn.textContent = "Try Again!";
        startBtn.style.display = "flex";
    }
    }, 1000); // Update the timer every 
    
    question.textContent = questions[0].title
    a1.textContent = questions[0].answers[0]
    a2.textContent = questions[0].answers[1]
    a3.textContent = questions[0].answers[2]
    a4.textContent = questions[0].answers[3]
};
console.log(questions.correctAnswer)
function bigSadYouAreWrong() {
/* remainingTime -= # to remove time from timer */
};

function nextQuestion() {

};