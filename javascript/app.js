const quizPage = document.querySelector(".s-informations");
const quizButtons = document.querySelector(".demarrer");
quizButtons.addEventListener("click" , () => {
let bts = document.querySelector(".bts");
let quizstart = document.querySelector("#infos");
let currentIndex = 0;
let point = document.querySelector("#les_infos");
quizstart.classList.add("dispalyit");
let quiz = document.querySelector(".start");
quiz.classList.remove("start");
point.classList.add("left");
let btn = document.querySelector(".begin");
btn.classList.add("start");
let btns = document.querySelector(".questions");
btns.classList.remove("questions");
let informations = document.querySelector(".informations");
informations.classList.add("start");
let qsts = document.querySelector(".les_qsts");
qsts.classList.remove("start");

function getJson(){
    let request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            let jsoNQuestions = JSON.parse(this.responseText);
            let qCount = jsoNQuestions.length;
            addQuestionData(jsoNQuestions[currentIndex], qCount);
            bts.addEventListener("click", () =>{
                let theRightAnswer = jsoNQuestions[currentIndex].ranswer;
                console.log(theRightAnswer);
                currentIndex++;
                qsts.innerHTML = "";
                addQuestionData(jsoNQuestions[currentIndex], qCount);
            });
        }
    };
    request.open("GET", "javascript/questions.json", true);
    request.send();
}
getJson();
function addQuestionData(obj, count){
    let h1 = document.createElement("h1");
    let questionText = document.createTextNode(obj['question']);
    h1.appendChild(questionText);
    h1.setAttribute("id", "text_qsts");
    qsts.appendChild(h1);
    for(let i = 1; i <= 2; i++){
        let mainDiv = document.createElement("div");
        mainDiv.setAttribute("id", "inpt");
        let radioInput = document.createElement("input");
        radioInput.name = "question";
        radioInput.type = "radio";
        radioInput.id = `answer_${i}`;
        radioInput.dataset.answer = obj[`answer_${i}`];
        let label = document.createElement("label");
        label.htmlFor = `answer_${i}`;
        let labelText = document.createTextNode(obj[`choice${i}`]);
        label.appendChild(labelText);
        mainDiv.appendChild(radioInput);
        mainDiv.appendChild(label);
        qsts.appendChild(mainDiv);
}
}
});
/*
qsts.innerHTML=`<h1 id="text_qsts">${obj['question']}</h1>
    <div id="inpt">
    <label>oui</label>
    <input type="radio" name="question" id="answer_${i}"><br>
    <label>non</label>
    <input type="radio" name="question" id="answer_${i}">
    <div>
    `;
    */