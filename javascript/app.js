/* DOM JS */

const quizPage = document.querySelector(".s-informations");

const question = document.querySelector('#question')


const quizBar = document.querySelector(".barre");

const quizButtons = document.querySelector(".demarrer");

const quizBtn = document.querySelector(".button");

const quizProgress = "";




/* QUESTIONS QUIZZ */

let questions = [{
        id: "1",
        question: "",
        choice1: "OUI",
        choice2: "NON",
        choice3: "Ne sait pas",
        answer: "1",
    },
    {
        id: "2",
        question: "",
        choice1: "OUI",
        choice2: "NON",
        choice3: "",
        choice4: "Ne sait pas",
        answer: "1",
    }, {
        id: "3",
        question: "",
        choice1: "OUI",
        choice2: "NON",
        answer: "1",
    },
    {
        id: "4",
        question: "",
        choice1: "OUI",
        choice2: "NON",
        answer: "1",
    }, {
        id: "5",
        question: "",
        choice1: "OUI",
        choice2: "NON",
        answer: "1",
    }, {
        id: "6",
        question: "",
        choice1: "OUI",
        choice2: "NON",
        answer: "1",
    }, {
        id: "7",
        question: "",
        choice1: "OUI",
        choice2: "NON",
        answer: "1",
    }, {
        id: "8",
        question: "",
        choice1: "OUI",
        choice2: "NON",
        answer: "1",
    }, {
        id: "9",
        question: "",
        choice1: "OUI",
        choice2: "NON",
        answer: "1",
    }, {
        id: "10",
        question: "",
        choice1: "OUI",
        choice2: "NON",
        answer: "1",
    }, {
        id: "11",
        question: "",
        choice1: "Bien",
        choice2: "Assez Bien",
        choice3: "Mal",
        choice4: "Très mal",
        answer: "1",
    }, {
        id: "12",
        question: "",
        choice1: "CHAMP LIBRE",
        answer: "1",
    }, {
        id: "13",
        question: "",
        choice1: "< 50 ans",
        choice2: "50-69 ans",
        choice3: ">= 70 ans",
        choice4: "< 15 ans",
        answer: "1",
    }, {
        id: "14",
        question: "",
        choice1: "poids",
        choice2: "taille",
        answer: "1",
    }, {
        id: "15",
        question: "",
        choice1: "OUI",
        choice2: "NON",
        answer: "1",
    }, {
        id: "16",
        question: "",
        choice1: "OUI",
        choice2: "NON",
        answer: "1",
    }, {
        id: "17",
        question: "",
        choice1: "OUI",
        choice2: "NON",
        answer: "1",
    }, {
        id: "18",
        question: "",
        choice1: "OUI",
        choice2: "NON",
        answer: "1",
    }, {
        id: "19",
        question: "",
        choice1: "OUI",
        choice2: "NON",
        answer: "1",
    }, {
        id: "20",
        question: "",
        choice1: "OUI",
        choice2: "NON",
        answer: "1",
    }, {
        id: "21",
        question: "",
        choice1: "OUI",
        choice2: "NON",
        answer: "1",
    }, {
        id: "22",
        question: "",
        choice1: "OUI",
        choice2: "NON",
        answer: "1",
    }, {
        id: "23",
        question: "",
        choice1: "OUI",
        choice2: "NON",
        choice3: "Ne sait pas",
        answer: "1",
    },



]

console.log(questions);



let currentQuestion = {}
let acceptingAnswers = true
let questionCounter = 0
let availableQuestions = []

const MAX_QUESTIONS = 23


startQuiz = () => {
    questionCounter = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

quizButtons.addEventListener("click", () => {
    

    let quitClass = quizPage.classList.remove(".informations");
    let addClass = quizPage.classList.add(".informationsV2");

    questionCounter++
    quizPage.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`


    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.questions

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true


    

    

});

