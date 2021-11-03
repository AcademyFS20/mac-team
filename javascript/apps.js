
const quizPage = document.querySelector(".s-informations");
const quizButtons = document.querySelector(".demarrer");

let classActive = document.querySelector(".second")
let classNon = document.getElementById("active")
let progBar = document.getElementById("myProgress");


quizButtons.addEventListener("click" , () => {
    classActive.classList.add("activated");
    classNon.className += "second";
    progBar.classList.remove("myProgress");

});


/* QUESTIONS */



[{
    "question": "Pensez-vous avoir eu de la fièvre ces derniers jours ?",
    "choice1": "oui",
    "choice2": "non",
    "answer": "oui"
},
{
    "question": "Avez-vous une toux ou une augmentation de votre toux habituelle ces derniers jours ?",
    "choice1": "oui",
    "choice2": "non",
    "answer": "oui"
},
{
    "question": "Avez-vous des douleurs musculaires ou des courbatures inhabituelles ces derniers jours ?",
    "choice1": "oui",
    "choice2": "non",
    "answer": "oui"
},
{
    "question": "Avez-vous un mal de gorge apparu ces derniers jours ?",
    "choice1": "oui",
    "choice2": "non",
    "answer": "oui"
},
{
    "question": "Avez-vous de la diarrhée ces dernières 24 heures (au moins 3 selles molles) ?",
    "choice1": "oui",
    "choice2": "non",
    "answer": "oui"
},
{
    "question": "Avez-vous une fatigue inhabituelle ces derniers jours ?",
    "choice1": "oui",
    "choice2": "non",
    "answer": "oui"
},
{
    "question": "Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h ?",
    "choice1": "oui",
    "choice2": "non",
    "answer": "oui"
},


{ 
    "question": "Avez-vous vu apparaître une gêne respiratoire ou une augmentation de votre gêne respiratoire habituelle ?",
    "choice1": "oui",
    "choice2": "non",
    "answer": "oui"
},

{
    "question": "Comment vous sentez-vous ?",
    "choice1": "Bien",
    "choice2": "Assez bien",
    "choice3": "Mal",
    "choice4": "Très mal",
    "answer": ""
},
 
{
    "question": "Avez-vous d'autres symptomes ?",
    "answer": "",
},

{
    "question": "Quel est votre âge ?",
    "choice1": "<50 ans",
    "choice2": "50-69 ans",
    "choice3": ">= 70 ans",
    "choice4": "-15 ans",
    "answer": ""
},

{
    "question": "Quel est votre poids ? Quelle est votre taille ? ",
    "anwer":""
},

{
    "question": "Avez-vous de l'hypertension artérielle ?Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez vous un traitement à visée cardiologique ? ",
    "choice1": "oui",
    "choice2": "non",
    "choice3": "Ne sait pas",
    "answer": ""
},

{
    "question": "Êtes-vous diabétique ? ",
    "choice1": "oui",
    "choice2": "non",
    "answer": ""
},

{
    "question":"Avez-vous une maladie respiratoire ? Ou etes-vous suivi par un pneumologue ?"
    "choice1": "oui",
    "choice2": "non",
    "answer": ""

},

{
    "question": "Avez-vous une insuffisance rénale chronique dialysée ?",
    "choice1": "oui",
    "choice2": "non",
    "answer": ""
},

{
    "question": "Avez-vous une maladie chronique du foie ? ",
    "choice1": "oui",
    "choice2": "non",
    "answer": ""
},

{
    "question": "Êtes-vous enceinte ?",
    "choice1": "oui",
    "choice2": "non",
    "choice3": "Non applicable",
    "answer": ""
},

{
   "question": "Avez-vous une maladie connue pour diminuer vos défenses immunitaires ?",
   "choice1": "oui",
   "choice2": "non",
   "choice3": "Ne sait pas",
   "answer": ""
},

{
    "question": "Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive).",
    "choice1": "oui",
    "choice2": "non",
    "choice3": "Ne sait pas"
},

{   
    
    "question": "Facteurs de gravité mineurs",
    "choice1": "Fièvre > ou = 39°C",
    "choice2": "Fatigue : alitement > 50% du temps diurne",
    "choice3": "Sensation de malaise"

},

{
    "question": "Facteurs de gravité majeurs",
    "choice1": "Gene respiratoire",
    "choice2": "Difficultés importantes pour s’alimenter ou boire depuis plus de 24h",
    "choice3": "Fièvre <= 35,4°"
}

]












