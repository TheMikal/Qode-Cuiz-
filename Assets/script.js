/* pseudo code:
i need a bar at the top that displays time remaining, and have a button to show saved high-scores from local storage
in the main body i need a button that when pressed starts the quiz and dynamically displays the question with possible answers underneath as buttons. 
at the bottom i need a bar that displays whether the answer is right or wrong. when answered wrong it subtracts time from the timer
when finished, either all the questions or running out of time, the quiz takes the remaining time if any and saves it in local storage as the score, along with the provided initials of the test taker */

// setting the section parents as variables to use later
const timeBar = document.querySelector(".timeBar");
const timerEl = document.getElementById("timerEl");
const gameCont = document.querySelector(".gameCont");
const areYouSmart = document.querySelector(".areYouSmart");
// for the timer
const timeRemaining = 60; // Timer duration in seconds
const gameStart = false;

/*
gameCont.addEventListener("click",function(event){
    event.preventDefault();
    console.log(gameStart);
    if (gameStart === false) {
        let gameStart = true;
        console.log(gameStart);
    }
    console.log(gameStart);
    
});
*/


// Event listener for button click
gameCont.addEventListener('click', function () {
    let gameStart = true; // Change the constant value to true
    let remainingTime = timeRemaining;
    timerEl.textContent = remainingTime;

  // Start the timer
    const timer = setInterval(function () {
    remainingTime--;
    timerEl.textContent = remainingTime;

    // Switch statement for different time messages
    switch (remainingTime) {
        case 10:
            timerEl.textContent = 'Hurry up! Only 10 seconds left!';
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
            timerEl.textContent = remainingTime + " seconds remaining.";
    }

    // Check if the timer has reached 0
    if (remainingTime === 0) {
        clearInterval(timer); // Stop the timer
        gameStart = false; // Reset the state to false
        timerEl.textContent = 'Timer completed';
    }
    }, 1000); // Update the timer every second
});