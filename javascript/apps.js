
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



















