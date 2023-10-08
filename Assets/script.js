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
let cq = 0;
let Score = 0
// for the timer
let timeRemaining = 30; // Timer duration in seconds
let gameStart = false;
console.log(gameStart);

// Event listener for button click to start 
gameCont.addEventListener('click',function (event) {
    if (event.target.classList.contains('startBtn')){
        event.stopPropagation();
        startGame();
    }
});


function startGame() {
    let gameStart = true; // Change the constant value to true
    let currentQuestion = 1
    console.log(currentQuestion)
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
        endGame();
    }
    }, 1000); // Update the timer every 
    
    question.textContent = questions[cq].title
    a1.textContent = questions[cq].answers[0]
    a2.textContent = questions[cq].answers[1]
    a3.textContent = questions[cq].answers[2]
    a4.textContent = questions[cq].answers[3]
};
console.log(questions.correctAnswer)

// event listener for the chosen answer
choices.addEventListener("click", function (event) {
    const userChoice = event.target.textContent
    console.log(userChoice);
    event.stopPropagation();

    if (userChoice !== questions[cq].correctAnswer) {
        timeRemaining -= 5;
        areYouSmart.textContent = "That's wrong!"
        nextQuestion();
    } else {
        areYouSmart.textContent = "That's Right!"
        Score ++;
        nextQuestion();
        
    }
});
console.log(Score)

function nextQuestion() {
    if (cq <= 4){
    cq ++
    question.textContent = questions[cq].title
    a1.textContent = questions[cq].answers[0]
    a2.textContent = questions[cq].answers[1]
    a3.textContent = questions[cq].answers[2]
    a4.textContent = questions[cq].answers[3]
    } else {
        endGame();
    }
};

function endGame() {
    areYouSmart.style = "none";
    choices.style = "none";
    startBtn.style = "block";
    gameCont.textContent = `Quiz over! Your final score was ${Score}!`
    let cq = 0;
    localStorage.setItem('highScore', )
}