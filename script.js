const systemText = document.getElementById("systemText");
const aiBox = document.getElementById("aiBox");
const message = document.getElementById("message");
const question = document.getElementById("question");
const final = document.getElementById("final");

const bootLines = [
    "SYSTEM BOOTING...",
    "",
    "Loading emotional modules...",
    "Checking memories...",
    "Initializing AURA AI...",
    "Decrypting hidden file...",
    "",
    "ACCESS GRANTED ✓"
];

let index = 0;


function writeBoot(){

    if(index < bootLines.length){

        systemText.innerHTML += bootLines[index] + "<br>";

        index++;

        setTimeout(writeBoot,700);

    }else{

        setTimeout(startAI,1000);

    }

}


const aiText = [
"Hola.",
"",
"Si estás viendo este proyecto significa que fue creado para una persona especial.",
"",
"No fue hecho para una empresa.",
"No fue hecho para una tarea.",
"",
"Fue creado porque había algo que quería decirte de una forma diferente.",
"",
"Analicé recuerdos...",
"Analicé momentos...",
"Analicé sonrisas...",
"",
"Y descubrí algo que ningún código puede explicar:",
"",
"Hay personas que llegan y hacen que todo sea diferente."
];


let aiIndex = 0;


function startAI(){

    aiBox.classList.remove("hidden");

    writeAI();

}


function writeAI(){

    if(aiIndex < aiText.length){

        message.innerHTML += aiText[aiIndex] + "<br>";

        aiIndex++;

        setTimeout(writeAI,500);

    }else{

        setTimeout(showQuestion,1500);

    }

}


function showQuestion(){

    question.classList.remove("hidden");

}


document.getElementById("yes").onclick=function(){

    question.classList.add("hidden");

    final.classList.remove("hidden");

    createHearts();

};


document.getElementById("think").onclick=function(){

    alert(
    "Está bien ❤️\n\n" +
    "Tómate el tiempo que necesites. " +
    "Lo importante es que sea una decisión sincera."
    );

};



function createHearts(){

    for(let i=0;i<40;i++){

        let heart=document.createElement("div");

        heart.innerHTML="❤️";

        heart.style.position="fixed";

        heart.style.left=Math.random()*100+"vw";

        heart.style.top="100vh";

        heart.style.fontSize=
        (Math.random()*20+15)+"px";

        heart.style.transition="4s";

        document.body.appendChild(heart);


        setTimeout(()=>{

            heart.style.top="-10vh";

            heart.style.transform=
            `translateX(${Math.random()*200-100}px)`;

        },100);


        setTimeout(()=>{

            heart.remove();

        },4000);

    }

}


writeBoot();
