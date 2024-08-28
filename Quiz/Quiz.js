// Array of quiz questions and answers
const questions = [
    {
        question:"Which year did the Mercedes AMG F1 Petronas team make its Formula 1 debute?",
        answers: [
            {text: "2008",correct: false},
            {text: "2010",correct: false},
            {text: "2012",correct: false},
            {text: "2014",correct: true},
        ]
    },
    {
        question:"Who is the team principal of the Mercedes AMG F1 Petronas team?",
        answers: [
            {text: "Toto Wolff",correct: true},
            {text: "Lewis Hamilton",correct: false},
            {text: "Niki Lauda",correct: false},
            {text: "Michael Schumacher",correct: false},
        ] 
    },
    {
        question:"Which driver holds the record for the most Formula 1 World Championships won with Mercedes AMG F1 Petronas?",
        answers: [
            {text: "Lewis Hamilton",correct: true},
            {text: "Nico Rosberg",correct: false},
            {text: "Valtteri Bottas",correct: false},
            {text: "Michael Schumacher",correct: false},
        ] 
    },
    {
        question:"Which German automaker provides the engines for the Mercedes AMG F1 Petronas team?",
        answers: [
            {text: "Ferrari",correct: false},
            {text: "Renault",correct: false},
            {text: "Mercedes-Benz",correct: true},
            {text: "Honda",correct: false},
        ] 
    },
    {
        question:"In which year did the Mercedes AMG F1 Petronas team win its first Constructors' Championship?",
        answers: [
            {text: "2010",correct: false},
            {text: "2012",correct: false},
            {text: "2014",correct: true},
            {text: "2016",correct: false},
        ] 
    },
    {
        question:"How many World Constructor Championships have been achieved by the Mercedes F1 team as of 2022?",
        answers: [
            {text: "6",correct: false},
            {text: "7",correct: false},
            {text: "8",correct: true},
            {text: "9",correct: false},
        ] 
    },
    {
        question:"Which driver currently holds the record for the most pole positions achieved with Mercedes AMG F1 Petronas?",
        answers: [
            {text: "Lewis Hamilton",correct: true},
            {text: "Nico Rosberg",correct: false},
            {text: "Valtteri Bottas",correct: false},
            {text: "Michael Schumacher",correct: false},
        ] 
    },
    {
        question:"Which season did the Mercedes AMG F1 Petronas team achieve a record-breaking 23 race wins out of 21 races?",
        answers: [
            {text: "2015",correct: false},
            {text: "2016",correct: true},
            {text: "2017",correct: false},
            {text: "2018",correct: false},
        ] 
    },
    {
        question:"Which iconic Formula 1 team merged with Mercedes to form the Mercedes AMG F1 Petronas team?",
        answers: [
            {text: "McLaren",correct: false},
            {text: "Williams",correct: false},
            {text: "Red Bull Racing",correct: false},
            {text: "Brawn GP",correct: true},
        ] 
    },
    {
        question:"Which driver secured Mercedes AMG F1 Petronas' 100th victory in Formula 1?",
        answers: [
            {text: "Lewis Hamilton",correct: true},
            {text: "Valtteri Bottas",correct: false},
            {text: "Nico Rosberg",correct: false},
            {text: "Sebastian Vettel",correct: false},
        ] 
    },
]

const startScreen = document.querySelector(".start-screen");
const startBtn = document.getElementById("start-button");
const displayQuiz = document.getElementById("display-container");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer");
const nextButton = document.getElementById("next");
const questioNum =document.getElementById("question-number");

// Variables to track quiz progress and score
let currentQuetionNumber = 0;
let finalQuestion = 11;
let lefttime =0;
let score = 0;
let count = 0;

// Function to initialize the quiz and start displaying questions
function initializeQuiz(){
    currentQuetionNumber=0;
    score=0;
    nextButton.innerHTML="Next";
    startBtn.style.display = "none";//hide start button
    displayQuestions();
    startTimer()
}

// Function to display the current question and its answers
function displayQuestions(){
    resetAll();
    let currentQuetion = questions[currentQuetionNumber];
    let questionNo = currentQuetionNumber + 1;
    questionElement.innerHTML = questionNo + ". "+currentQuetion.
    question;
    document.querySelector('.question-number').innerHTML=`${count} of 10 Questions`
    count++;

    currentQuetion.answers.forEach(answer =>{
        const button =  document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("ansbtn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}

// Function to reset answer buttons and styles
function resetAll(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// Function to handle user answer selection
function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if(isCorrect){
        selectBtn.classList.add("correct")
        score++
    }else{
        selectBtn.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true
    })
    nextButton.style.display = "block"
}


function displayMarks(){
    resetAll()
    questionElement.innerHTML = " "
    nextButton.innerHTML = "Play again" 
    nextButton.style.display = "block"
}

// Function to control the behavior of the next button
function controlNextButton(){
    currentQuetionNumber++
    if(currentQuetionNumber < questions.length){
        displayQuestions()
    }else{
        displayMarks()
    }
}

// Event listener for the next button
nextButton.addEventListener("click" , ()=>{
    if(currentQuetionNumber < questions.length && lefttime == 0 ){
        controlNextButton();
    }else{
        location.reload();   
    }
})
//display questions when start quiz button clicked 
startBtn.addEventListener("click", () => {
    startScreen.classList.add("hide");
    displayQuiz.classList.remove("hide");
    initializeQuiz();
});


window.onload = () => {
    startScreen.classList.remove("hide");
    displayQuiz.classList.add("hide");
};

// start quiz button (again)
startBtn.addEventListener("click", () => {
    initializeQuiz();
    startTimer();
  });

  // Function to start the timer and display time left
  function startTimer() {
    var seconds = 60;
    var countdown = document.getElementById("countdown");
    var timeTaken = document.getElementById("timeTaken");
    var excellent = document.getElementById("excellent");
    var tryHard = document.getElementById("tryHard");
    var message = document.getElementById("message");
    var marks = document.getElementById("marks");
    var head = document.getElementById("head");
    
  
    var countdownTimer = setInterval(function () {
      seconds--;
      countdown.innerHTML = seconds + " seconds";
      if (seconds < 10) {
        countdown.innerHTML = seconds + " seconds";
        countdown.style.color = "red";
      }
      if (seconds == 0 || finalQuestion == (currentQuetionNumber + 1)) {
        clearInterval(countdownTimer);
        lefttime = 60 - seconds;
        
        
        head.style.display = "none";
        marks.innerHTML = `<strong>Your Score ${score} out of ${questions.length}!</strong>`;
        timeTaken.innerHTML = `<strong>You took ${lefttime} seconds </strong>`;
        message.innerHTML = "<strong>Congratulations! The quiz is completed.</strong>";
        
  
        if (score >= 5) {
          excellent.innerHTML = "<strong>Excellent work! Keep it up.</strong>";
          excellent.style.color = "green";
        } else {
          tryHard.innerHTML = "<strong>Try harder next time.</strong>";
          tryHard.style.color = "red";
        }
        displayMarks();
      }
    }, 1000);
  }
  