/* DOM JS */

const quizPage = document.querySelector("#s-informations");

const question = document.querySelector('.questionv2');

console.log(question)

const quizBar = document.querySelector(".barre");

const quizButtons = document.querySelector(".demarrer");

const quizBtn = document.querySelector(".button");

const quizProgress = "";


let currentQuestion = 'hello world'
let acceptingAnswers = true
let questionCounter = 0
let availableQuestions = []


/* QUESTIONS QUIZZ */

const Questions = [{
        id: "1",
        question: "Pensez-vous avoir eu de la fièvre ces derniers jours (frissons, sueurs) ?",
        choice1: "OUI",
        choice2: "NON",
        choice3: "Ne sait pas",
        answer: "1",
    },
    {
        id: "2",
        question: "Quelle est votre température ?",
        choice1: "OUI",
        choice2: "NON",
        choice3: "",
        choice4: "Ne sait pas",
        answer: "1",
    }, {
        id: "3",
        question: "Avez-vous une toux ou une augmentation de votre toux habituelle ces derniers jours ?",
        choice1: "OUI",
        choice2: "NON",
        answer: "1",
    },
    {
        id: "4",
        question: "Avez-vous des douleurs musculaires ou des courbatures inhabituelles ces derniers jours?",
        choice1: "OUI",
        choice2: "NON",
        answer: "1",
    }, {
        id: "5",
        question: "Avez-vous un mal de gorge apparu ces derniers jours ?",
        choice1: "OUI",
        choice2: "NON",
        answer: "1",
    }, {
        id: "6",
        question: "Avez-vous de la diarrhée ces dernières 24 heures (au moins 3 selles molles) ?",
        choice1: "OUI",
        choice2: "NON",
        answer: "1",
    }, {
        id: "7",
        question: "Avez-vous une fatigue inhabituelle ces derniers jours ?",
        choice1: "OUI",
        choice2: "NON",
        answer: "1",
    }, {
        id: "8",
        question: "Cette fatigue vous oblige-t-elle à vous reposer plus de la moitié de la journée ?",
        choice1: "OUI",
        choice2: "NON",
        answer: "1",
    }, {
        id: "9",
        question: "Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h? ",
        choice1: "OUI",
        choice2: "NON",
        answer: "1",
    }, {
        id: "10",
        question: "Avez-vous vu apparaître une gêne respiratoire ou une augmentation de votre gêne respiratoire habituelle ?",
        choice1: "OUI",
        choice2: "NON",
        answer: "1",
    }, {
        id: "11",
        question: "Comment vous sentez-vous ? ",
        choice1: "Bien",
        choice2: "Assez Bien",
        choice3: "Mal",
        choice4: "Très mal",
        answer: "1",
    }, {
        id: "12",
        question: "Avez-vous d’autre symptôme ? ",
        choice1: "CHAMP LIBRE",
        answer: "1",
    }, {
        id: "13",
        question: "Quel est votre âge ?",
        choice1: "< 50 ans",
        choice2: "50-69 ans",
        choice3: ">= 70 ans",
        choice4: "< 15 ans",
        answer: "1",
    }, {
        id: "14",
        question: "Quel est votre poids ? Quelle est votre taille ?",
        choice1: "poids",
        choice2: "taille",
        answer: "1",
    }, {
        id: "15",
        question: "Avez-vous de l’hypertension artérielle ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez vous un traitement à visée cardiologique ? ",
        choice1: "OUI",
        choice2: "NON",
        answer: "1",
    }, {
        id: "16",
        question: "Êtes-vous diabétique ?",
        choice1: "OUI",
        choice2: "NON",
        answer: "1",
    }, {
        id: "17",
        question: "Avez-vous ou avez-vous eu un cancer ?",
        choice1: "OUI",
        choice2: "NON",
        answer: "1",
    }, {
        id: "18",
        question: "Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ? ",
        choice1: "OUI",
        choice2: "NON",
        answer: "1",
    }, {
        id: "19",
        question: "Avez-vous une insuffisance rénale chronique dialysée ?",
        choice1: "OUI",
        choice2: "NON",
        answer: "1",
    }, {
        id: "20",
        question: "Avez-vous une maladie chronique du foie ?",
        choice1: "OUI",
        choice2: "NON",
        answer: "1",
    }, {
        id: "21",
        question: "Êtes-vous enceinte ?",
        choice1: "OUI",
        choice2: "NON",
        answer: "1",
    }, {
        id: "22",
        question: "Avez-vous une maladie connue pour diminuer vos défenses immunitaires?",
        choice1: "OUI",
        choice2: "NON",
        answer: "1",
    }, {
        id: "23",
        question: "Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive). ",
        choice1: "OUI",
        choice2: "NON",
        choice3: "Ne sait pas",
        answer: "1",
    },



]


const MAX_QUESTIONS = 23

function startQuiz() {
    questionCounter = 0
    availableQuestions = [...Questions]
    getNewQuestion()
}

if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {

}



function getNewQuestion() {

    let quitClass = quizPage.classList.remove(".informations");

    let addClass = quizPage.classList.add(".informationsV2");

    questionCounter++
    quizPage.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`


    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true

}


quizButtons.addEventListener("click", () => {
    let informations = document.querySelector(".informations");
    informations.classList.add("start");
    quizButtons.classList.add("start");
    let btns = document.querySelector(".questions");
    btns.classList.remove("questions");
    let bts = document.querySelector(".bts");
    let currentIndex = 0;
    let qsts = document.querySelector(".les_qsts");
    qsts.classList.remove("start");


    bts.addEventListener("click", () => {

        console.log(currentIndex);
        //quizPage.classList.remove("informations");
        //quizPage.replaceChildren(".questionv2")
        //questionCounter++;
        const div = document.querySelector('.questionv2');

        div.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
        const newTest = document.createElement("p");
        questionCounter++;
        Questions.forEach((item, index) => {

            if (currentIndex === index) {
                let element = document.createElement("h1");
                element.innerHTML = `<span>${item.question}</span>`
                element.setAttribute("id", "text_qsts");

                const el = document.querySelector('.infotext');

                qsts.replaceChild(el, element);

                console.log('byn');

            }

        })


        currentIndex++;

    });


    //availableQuestions.splice(index, 1)











    //const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    //console.log(currentQuestion)
    //console.log(question)
    //question.innerText = currentQuestion
    //console.log(currentQuestion);





    //acceptingAnswers = true



});