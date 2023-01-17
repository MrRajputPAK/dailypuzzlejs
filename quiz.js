// const instruction = document.querySelector('.instructions-text')
//     const startDis = document.querySelector('.main')
//     startDis.style.display = "none";
//     setTimeout(() => {
//         startDis.style.display = "block"
//         instruction.style.display = "none"
//     }, 5000);

const quizData = [
    {
        question: 'https://goodfrontdesk.theskillsleader.com/audio/3.mp3',
        a: "Friday",
        b: "Saturday",
        c: "Thursday",
        d: "Sunday",
        correct: "Sunday",
    },
    {
        question: "https://goodfrontdesk.theskillsleader.com/audio/4.mp3",
        a: "Upper Right",
        b: "Upper Left",
        c: "Lower Right",
        d: "Lower Left",
        correct: "Upper Right",
    },
    {
        question: "https://goodfrontdesk.theskillsleader.com/audio/8.mp3",
        a: "25",
        b: "27",
        c: "30",
        d: "29",
        correct: "27",
    },
    {
        question: "https://goodfrontdesk.theskillsleader.com/audio/1.mp3",
        a: "2",
        b: "3",
        c: "4",
        d: "5",
        correct: "4",
    },
    {
        question: "https://goodfrontdesk.theskillsleader.com/audio/2.mp3",
        a: "Nurse",
        b: "Mechanic",
        c: "Teacher",
        d: "Firefighter",
        correct: "Teacher",
    },
    {
        question: "https://goodfrontdesk.theskillsleader.com/audio/5.mp3",
        a: "200",
        b: "400",
        c: "600",
        d: "800",
        correct: "200",
    },
    {
        question: "https://goodfrontdesk.theskillsleader.com/audio/7.mp3",
        a: "2:00pm",
        b: "3:00pm",
        c: "3:30pm",
        d: "4:30pm",
        correct: "3:30pm",
    },
    {
        question: "https://goodfrontdesk.theskillsleader.com/audio/6.mp3",
        a: "One",
        b: "Two",
        c: "Three",
        d: "Four",
        correct: "Three",
    }
]

let quiz = document.querySelector('.question-area');
let answerEls = document.querySelectorAll('.ans-btn');
const audio = document.getElementById('audio');
const aText = document.getElementById('a');
const bText = document.getElementById('b');
const cText = document.getElementById('c');
const dText = document.getElementById('d');
const nextBtn = document.querySelector('.next');
const KeyStrokes = document.querySelector('.getKeyStrokes');

const CorrectAns = document.querySelector('.CorrectAns')
const scoreUp = document.querySelector('.SpeedWords')
const correctWords = document.querySelector('.getC-Words')
const wrongWords = document.querySelector('.getR-Words')


let currentQuestion = {};
let acceptingAnswers = true;
let currentQuiz = 0;
let score = 0;
let score2 = 0;
let questionCounter = 0;
let availableQuestion = [];

const correctBonus = 1;
const maxQuestion = 8;


loadQuiz()

function loadQuiz() {
    questionCounter = 0;
    getNewQuestion();
}

function getNewQuestion() {
    document.querySelector('.next').disabled = true;
    if(quizData.length === 0 || questionCounter >= maxQuestion)
        {
            const startDis = document.querySelector('.main')
            const resultShow = document.querySelector('.back')
                resultShow.style.display = "block"
                startDis.style.display = "none"
            
        }
    questionCounter++;
    let availableQuestion = [...quizData];
    const questionIndex = Math.floor(Math.random() * quizData.length);
    currentQuestion = quizData[questionIndex];

    audio.src = currentQuestion.question;
    aText.innerText = currentQuestion.a;
    bText.innerText = currentQuestion.b;
    cText.innerText = currentQuestion.c;
    dText.innerText = currentQuestion.d;
    quizData.splice(questionIndex, 1);
        console.log(availableQuestion);
        
    acceptingAnswers = true;
}




answerEls.forEach(btn => {
    
    btn.addEventListener('click',(e)=>{
        if (!acceptingAnswers) return;
        
        acceptingAnswers = false;
        const selectedbtn = e.target;
        const selectedAnswer = selectedbtn.innerText;
        if (selectedAnswer != currentQuestion.correct) {
            selectedbtn.style.backgroundColor = 'red';
            decrtScore(correctBonus)
            document.querySelector('.next').disabled = false;
        }
        else{
            selectedbtn.style.backgroundColor = 'green';
            incrtScore(correctBonus)
            document.querySelector('.next').disabled = false;
        }
        console.log(currentQuestion.correct);
        console.log(selectedbtn);
    
    })
});




incrtScore = num =>{
    
    score +=num;
    CorrectAns.innerText="Score:" + " " + score;
    scoreUp.innerText=score
    correctWords.innerText=score
    // console.log(score);
    
}

decrtScore = num2 =>{
    score2 +=num2;
    wrongWords.innerText=score2
}

nextBtn.addEventListener('click', (e)=>{
    document.getElementById("a").removeAttribute("style");
    document.getElementById("b").removeAttribute("style");
    document.getElementById("c").removeAttribute("style");
    document.getElementById("d").removeAttribute("style");
    getNewQuestion()
})



var typing_next_page = document.getElementById('typing_next_page')
typing_next_page.addEventListener('click', function(event) {
        event.preventDefault()
                window.location.href="puzzle.html";
    })

    console.log(answerEls);