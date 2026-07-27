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

    } else {

        setTimeout(startAI,1000);

    }

}



const aiLines = [
    "Hola.",
    "",
    "Este proyecto fue creado para una persona especial.",
    "",
    "No es una página común.",
    "Cada línea de código tiene un propósito.",
    "",
    "Analizando recuerdos...",
    "Analizando momentos...",
    "Analizando emociones...",
    "",
    "Resultado encontrado:",
    "",
    "Hay alguien que hace que todo sea diferente ❤️"
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

    } else {

        setTimeout(()=>{
            question.classList.remove("hidden");
            question.scrollIntoView({behavior:"smooth"});
        },1500);

    }

}



yesButton.addEventListener("click",()=>{

    question.style.display="none";

    final.classList.remove("hidden");

    createHearts();

});



thinkButton.addEventListener("click",()=>{

    alert(
        "Está bien ❤️\n\n" +
        "Lo importante es que tu respuesta sea sincera."
    );

});




function createHearts(){

    for(let i = 0; i < 120; i++){

        const heart = document.createElement("div");

        heart.innerHTML="❤️";

        heart.style.position="fixed";
        heart.style.bottom="-50px";
        heart.style.left=Math.random()*100+"vw";
        heart.style.fontSize=(20+Math.random()*30)+"px";
        heart.style.zIndex="99999";
        heart.style.pointerEvents="none";

        document.body.appendChild(heart);


        const animation = heart.animate(
            [
                {
                    transform:"translateY(0) rotate(0deg)",
                    opacity:1
                },
                {
                    transform:
                    `translateY(-110vh) rotate(${Math.random()*720}deg)`,
                    opacity:0
                }
            ],
            {
                duration:4000 + Math.random()*2000,
                easing:"ease-out"
            }
        );


        animation.onfinish=()=>{

            heart.remove();

        };

    }

}



startBoot();
