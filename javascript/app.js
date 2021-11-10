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
let touxFever = 0;
let courbaturesAndToux = 0;
let diarrhe = 0;
let all = 0;
let FP = 0;
let msg = "";
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
if(age < 15){
    qsts.classList.add("start");
    informations.classList.remove("start");
    msg = "Cette application n'est pour l'instant pas adaptée aux personnes de moins de 15 ans. En cas d'urgence, appeler le 15.";
    document.querySelector('.infotext').innerHTML = msg;
    document.querySelector('.titletext').innerHTML = "Score";
    document.querySelector('#hidethis').classList.add('start');
    btns.classList.add('start');
    quizButtons.classList.remove('start');
}
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
            if(obj.id === "fatigue" && e.target.value === "oui"){
                FG++;
                FGMin++;
            }
            if(obj.id === "respiratoire" && e.target.value === "oui"){
                FG++;
                FGMax++;
                FP++;
            }
            if(obj.id === "boire" && e.target.value === "oui"){
                FG++;
                FGMax++;
            }
            if(obj.id === "hypertension" && e.target.value === "oui"){
                FP++;
            }
            if(obj.id === "diabetique" && e.target.value === "oui"){
                FP++;
            }
            if(obj.id === "cancer" && e.target.value === "oui"){
                FP++;
            }
            if(obj.id === "dialyse" && e.target.value === "oui"){
                FP++;
            }
            if(obj.id === "chronique" && e.target.value === "oui"){
                FP++;
            }
            if(obj.id === "enceinte" && e.target.value === "oui"){
                FP++;
            }
            if(obj.id === "immunitaires" && e.target.value === "oui"){
                FP++;
            }
            if(obj.id === "immunosuppresseur" && e.target.value === "oui"){
                FP++;
            }
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
                    msg = "Nous vous conseillons de rester à votre domicile et de contacter votre médecin en cas d'apparition de nouvaeux symptomes. Vous pourrez aussi utiliser à nouveau l'application pour réévaluer vos symptomes.";
                }
                else if(age >= 50 || age <= 69 && FG == 0 && FP ==0 && fievre > 0){
                    msg = "Téléconsultation ou médecin généraliste ou visite à domicile.";
                }
                if(fievre > 0 && FP == 0 && FGMin >= 1){
                    msg ="Téléconsultation ou médecin généraliste ou visite à domicile.";
                }
                else if(fievre > 0 && FP >= 1 && FG == 0){
                    msg ="Téléconsultation ou médecin généraliste ou visite à domicile.";
                }
                else if(fievre > 0 && FP >= 1 && FGMin == 1){
                    cmsg ="Téléconsultation ou médecin généraliste ou visite à domicile.";
                }
                else if(fievre > 0 && FP >= 1 && FGMin >= 2){
                    msg ="appelez le 141";
                }
                else if(fievre > 0 && FP >= 0 && FGMax >= 1){
                    msg ="appelez le 141";
                }
            }
            if(obj.id === "toux"  &&  e.target.value === "oui" || obj.id==="gorge" &&  e.target.value === "oui"){

                gorgeAndToux++;
            
            }
            
            if(gorgeAndToux === 2){
                if(age < 50 && FG == 0 && FP == 0){
                    msg ="Nous vous conseillons de rester à votre domicile et de contacter votre médecin en cas d'apparition de nouvaeux symptomes. Vous pourrez aussi utiliser à nouveau l'application pour réévaluer vos symptomes.";
                }
                else if(age >= 50 || age <= 69 && FG == 0 && FP ==0){
                    msg ="Téléconsultation ou médecin généraliste ou visite à domicile.";
                }
                if(FP == 0 && FGMin >= 1){
                    msg ="Téléconsultation ou médecin généraliste ou visite à domicile.";
                }
                else if(FP >= 1 && FG == 0){
                    msg ="Téléconsultation ou médecin généraliste ou visite à domicile.";
                }
                else if(FP >= 1 && FGMin == 1){
                    msg ="Téléconsultation ou médecin généraliste ou visite à domicile.";
                }
                else if(FP >= 1 && FGMin >= 2){
                    msg ="appelez le 141";
                }
                else if(FP >= 0 && FGMax >= 1){
                    msg ="appelez le 141";
                }
            }
            if(obj.id === "toux"  &&  e.target.value === "oui" || obj.id==="courbatures" &&  e.target.value === "oui"){

                courbaturesAndToux++;
            
            }
            
            if(courbaturesAndToux === 2){
                if(age < 50 && FG == 0 && FP == 0){
                    msg ="Nous vous conseillons de rester à votre domicile et de contacter votre médecin en cas d'apparition de nouvaeux symptomes. Vous pourrez aussi utiliser à nouveau l'application pour réévaluer vos symptomes.";
                }
                else if(age >= 50 || age <= 69 && FG == 0 && FP ==0){
                    msg ="Téléconsultation ou médecin généraliste ou visite à domicile.";
                }
                if(FP == 0 && FGMin >= 1){
                    msg ="Téléconsultation ou médecin généraliste ou visite à domicile.";
                }
                else if(FP >= 1 && FG == 0){
                    msg ="Téléconsultation ou médecin généraliste ou visite à domicile.";
                }
                else if(FP >= 1 && FGMin == 1){
                    msg ="Téléconsultation ou médecin généraliste ou visite à domicile.";
                }
                else if(FP >= 1 && FGMin >= 2){
                    msg ="appelez le 141";
                }
                else if(FP >= 0 && FGMax >= 1){
                    msg ="appelez le 141";
                }
            }
            if(obj.id === "diarrhe"  &&  e.target.value === "oui" || obj.id==="fever" &&  e.target.value === "oui"){

                diarrhe++;
            
            }
            
            if(diarrhe === 2){
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
                    msg ="Nous vous conseillons de rester à votre domicile et de contacter votre médecin en cas d'apparition de nouvaeux symptomes. Vous pourrez aussi utiliser à nouveau l'application pour réévaluer vos symptomes.";
                }
                else if(age >= 50 || age <= 69 && FG == 0 && FP ==0 && fievre > 0){
                    msg ="Téléconsultation ou médecin généraliste ou visite à domicile.";
                }
                if(fievre > 0 && FP == 0 && FGMin >= 1){
                    msg ="Téléconsultation ou médecin généraliste ou visite à domicile.";
                }
                else if(fievre > 0 && FP >= 1 && FG == 0){
                    msg ="Téléconsultation ou médecin généraliste ou visite à domicile.";
                }
                else if(fievre > 0 && FP >= 1 && FGMin == 1){
                    msg ="Téléconsultation ou médecin généraliste ou visite à domicile.";
                }
                else if(fievre > 0 && FP >= 1 && FGMin >= 2){
                    msg ="appelez le 141";
                }
                else if(fievre > 0 && FP >= 0 && FGMax >= 1){
                    msg ="appelez le 141";
                }
            }

            if(obj.id === "toux"  &&  e.target.value === "oui" || obj.id==="fever" &&  e.target.value === "oui"){

                touxFever++;
            
            }
            if(touxFever === 2){

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

                if(fievre > 0 && FP ==  0 && FG == 0){

                    msg ="Téléconsultation ou médecin généraliste ou visite à domicile.";
                }
                else if(fievre > 0 && FP == 0 && FGMin >= 1 && FGMax == 0){
                    msg ="Téléconsultation ou médecin généraliste ou visite à domicile.";
                }
                else if(fievre > 0 && FP >= 1 && FG == 0){
                    msg ="Téléconsultation ou médecin généraliste ou visite à domicile.";
                }
                else if(fievre > 0 && FP >= 1 && FGMin == 1){
                    msg ="Téléconsultation ou médecin généraliste ou visite à domicile.";
                }
                else if(fievre > 0 && FP >= 1 && FGMin >= 1){
                    msg ="appelez le 141";
                }
                else if(fievre > 0 && FP == 0 && FG >= 1){
                    msg ="appelez le 141";
                }
                else if(fievre > 0 && FP >= 1 && FG >= 1){
                    msg ="appelez le 141";
                }
            }
            if(obj.id === "toux"  &&  e.target.value === "oui" || obj.id==="courbatures" &&  e.target.value === "oui"){
                all++;
            }
            else if(obj.id === "fever"  &&  e.target.value === "oui" || obj.id==="gorge" &&  e.target.value === "oui" || obj.id==="diarrhe" &&  e.target.value === "oui"){
                all++;
            }
            if(all === 5){
                if(FG == 0){
                    msg ="Votre situation ne relève probablement pas du Covid-19. Consultew votre médecin au moindre doute.";
                }
                else if(FG >= 1 || FP >=1){
                    msg ="Votre situation ne relève probablement pas du Covid-19. Un avis médical est recommandé. Au moindre doute appelez le 141";
                }
            }
            else{
                msg ="Restez chez vous au maximum en attendant que les symptomes disparaissent. Prenez votre température deux fois par jour. Rappel des medures d'hygiène.";
            }
        



            
            
        })
      })
}
else{
    qsts.classList.add("start");
    informations.classList.remove("start");
    document.querySelector('.infotext').innerHTML = msg;
    document.querySelector('.titletext').innerHTML = "Score";
    document.querySelector('#hidethis').classList.add('start');
    btns.classList.add('start');
    quizButtons.classList.remove('start');
}
}
});
