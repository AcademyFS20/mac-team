const quizPage = document.querySelector(".s-informations");
const quizButtons = document.querySelector(".demarrer");


quizButtons.addEventListener("click" , () => {
let quizstart = document.querySelector("#infos");
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
qsts.innerHTML=`<h1 id="text_qsts">شحال درجة الحرارة عندك ؟</h1>
<div id="inpt">
<label>درجة</label>
<input type="number" id ="deg">
<div>`;
});
