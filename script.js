const systemText = document.getElementById("systemText");
const aiBox = document.getElementById("aiBox");
const message = document.getElementById("message");
const question = document.getElementById("question");
const final = document.getElementById("final");

const yesButton = document.getElementById("yes");
const thinkButton = document.getElementById("think");


const bootLines = [
    "SYSTEM BOOTING...",
    "Loading emotional modules...",
    "Checking memories...",
    "Initializing AURA AI...",
    "Decrypting hidden file...",
    "",
    "ACCESS GRANTED ✓"
];


let bootIndex = 0;


function startBoot(){

    if(bootIndex < bootLines.length){

        systemText.innerHTML += bootLines[bootIndex] + "<br>";

        bootIndex++;

        setTimeout(startBoot,700);

    }else{

        setTimeout(startAI,1000);

    }

}



const aiLines = [
    "Hola.",
    "",
    "Este proyecto fue creado para una persona especial.",
    "",
    "No fue hecho para una empresa.",
    "No fue hecho para una tarea.",
    "",
    "Fue creado porque había algo importante que decir.",
    "",
    "Analizando recuerdos...",
    "Analizando momentos...",
    "Analizando sonrisas...",
    "",
    "Resultado encontrado:",
    "",
    "Hay personas que llegan y hacen que todo sea diferente ❤️"
];


let aiIndex = 0;


function startAI(){

    aiBox.classList.remove("hidden");

    writeAI();

}



function writeAI(){

    if(aiIndex < aiLines.length){

        message.innerHTML += aiLines[aiIndex] + "<br>";

        aiIndex++;

        setTimeout(writeAI,450);

    }else{

        setTimeout(showQuestion,1200);

    }

}



function showQuestion(){

    question.classList.remove("hidden");

    question.scrollIntoView({
        behavior:"smooth"
    });

}



yesButton.onclick = function(){

    question.classList.add("hidden");

    final.classList.remove("hidden");

    final.scrollIntoView({
        behavior:"smooth"
    });

    createHearts();

};



thinkButton.onclick = function(){

    alert(
    "Está bien ❤️\n\n" +
    "Lo importante es que sea una decisión sincera."
    );

};




function createHearts(){

    for(let i = 0; i < 80; i++){

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = Math.random()*100 + "vw";
        heart.style.top = "100vh";
        heart.style.fontSize = (15 + Math.random()*30)+"px";
        heart.style.zIndex = "9999";
        heart.style.pointerEvents = "none";

        document.body.appendChild(heart);


        setTimeout(()=>{

            heart.style.transition =
            "all 4s ease";

            heart.style.top="-10vh";

            heart.style.transform =
            `translateX(${Math.random()*300-150}px) rotate(${Math.random()*360}deg)`;

            heart.style.opacity="0";


        },100);


        setTimeout(()=>{

            heart.remove();

        },4500);

    }

}



startBoot();
