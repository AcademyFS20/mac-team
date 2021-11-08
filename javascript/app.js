const quizPage = document.querySelector(".s-informations");
const quizButtons = document.querySelector(".demarrer");
quizButtons.addEventListener("click" , () => {
let bts = document.querySelector(".bts");
let btp = document.querySelector(".btp");
let age;
let val;
let fievre = 0;
let FG = 0;
let FGMin = 0;
let FGMax = 0;
let gorgeAndToux = 0;
let santais;
let fatigue;
let FP = 0;
age = Number(prompt("enter votre age"));
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
                if(currentIndex < qCount){
            
               // console.log(theRightAnswer);
            }
                currentIndex++;
                qsts.innerHTML = "";
                addQuestionData(jsoNQuestions[currentIndex], qCount);
            });
            btp.addEventListener("click", () =>{
                
                currentIndex--;
                qsts.innerHTML = "";
                addQuestionData(jsoNQuestions[currentIndex] ,qCount);
            });
        }
    };
    request.open("GET", "javascript/questions.json", true);
    request.send();
}
getJson();
function addQuestionData(obj, count){
    if(currentIndex < count){
    let h1 = document.createElement("h1");
    let questionText = document.createTextNode(obj['question']);
    h1.appendChild(questionText);
    h1.setAttribute("id", "text_qsts");
    qsts.appendChild(h1);
    for(let i = 1; i < 3; i++){

        let mainDiv = document.createElement("div");
        mainDiv.setAttribute("id", "inpt");
        let radioInput = document.createElement("input");
        radioInput.name = "question";
        radioInput.type = "radio";
        radioInput.id = String(`answer_${i}`);
        radioInput.dataset.answer = obj.choice[i - 1]
        radioInput.value= obj.choice[i - 1]
        
        let label = document.createElement("label");
        label.htmlFor = `answer_${i}`;
        let labelText = document.createTextNode(obj.choice[i - 1]);
        label.appendChild(labelText);
        mainDiv.appendChild(radioInput);
        mainDiv.appendChild(label);
        qsts.appendChild(mainDiv);
           }  

      const el = document.querySelectorAll("input[type=radio]")
      el.forEach(element =>{
          
        element.addEventListener("change",(e) =>{
            

            
            if(obj.id === "fever" && e.target.value === "oui"){
                
                val = Number(prompt("enter ur fever deg"));
                if(val >= 37.8 && val <= 38.9){
                    fievre++;
                }
                else if(val >= 39){
                    fievre++;
                    FGMin++;
                    FG++;
                }
                else if(val <= 35.4){
                    fievre++;
                    FGMax++;
                    FG++;
                }
                else if(val === ""){
                    fievre++;
                }
                if(age < 50 && FG == 0 && FP == 0 && fievre > 0){
                    console.log("Nous vous conseillons de rester à votre domicile et de contacter votre médecin en cas d'apparition de nouvaeux symptomes. Vous pourrez aussi utiliser à nouveau l'application pour réévaluer vos symptomes.");
                }
                else if(age >= 50 || age <= 69 && FG == 0 && FP ==0 && fievre > 0){
                    console.log("Téléconsultation ou médecin généraliste ou visite à domicile.");
                }
                if(fievre > 0 && FP == 0 && FGMin >= 1){
                    console.log("Téléconsultation ou médecin généraliste ou visite à domicile.");
                }
                else if(fievre > 0 && FP >= 1 && FG == 0){
                    console.log("Téléconsultation ou médecin généraliste ou visite à domicile.");
                }
                else if(fievre > 0 && FP >= 1 && FGMin == 1){
                    console.log("Téléconsultation ou médecin généraliste ou visite à domicile.");
                }
                else if(fievre > 0 && FP >= 1 && FGMin >= 2){
                    console.log("appelez le 141");
                }
                else if(fievre > 0 && FP >= 0 && FGMax >= 1){
                    console.log("appelez le 141");
                }
            }
            if(obj.id === "toux"  &&  e.target.value === "oui" || obj.id==="gorge" &&  e.target.value === "oui"){

                gorgeAndToux++;
            
            }
            
            if(gorgeAndToux === 2){
                console.log("yes");
            }
            
        })
      })
}
else{
    bts.classList.add("start");
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