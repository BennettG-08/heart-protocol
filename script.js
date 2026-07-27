const systemText = document.getElementById("systemText");
const aiBox = document.getElementById("aiBox");
const message = document.getElementById("message");
const question = document.getElementById("question");
const final = document.getElementById("final");

const boot = [
    "SYSTEM BOOTING...",
    "Loading modules...",
    "Initializing AURA AI...",
    "Access Granted ✓"
];

let i = 0;

function startBoot(){

    if(i < boot.length){

        systemText.innerHTML += boot[i] + "<br>";

        i++;

        setTimeout(startBoot,800);

    } else {

        setTimeout(showAI,1000);

    }

}


function showAI(){

    aiBox.classList.remove("hidden");

    message.innerHTML = `
    Hola.<br><br>
    Este proyecto fue creado para una persona especial.<br><br>
    Hay cosas que ningún código puede explicar.<br>
    Y esta es una de ellas. ❤️
    `;

    setTimeout(()=>{

        question.classList.remove("hidden");

        question.scrollIntoView({
            behavior:"smooth"
        });

    },2000);

}



document.getElementById("yes").onclick=function(){

    question.classList.add("hidden");

    final.classList.remove("hidden");

    final.scrollIntoView({
        behavior:"smooth"
    });

};


document.getElementById("think").onclick=function(){

    alert("Está bien ❤️. Tómate tu tiempo.");

};


startBoot();
