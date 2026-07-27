function createHearts(){

    for(let i = 0; i < 60; i++){

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "100vh";
        heart.style.fontSize = (20 + Math.random() * 25) + "px";
        heart.style.zIndex = "9999";
        heart.style.pointerEvents = "none";

        document.body.appendChild(heart);


        setTimeout(() => {

            heart.style.transition = "transform 4s ease, top 4s ease, opacity 4s ease";

            heart.style.top = "-10vh";

            heart.style.transform =
            `translateX(${Math.random()*200-100}px) rotate(${Math.random()*360}deg)`;

            heart.style.opacity = "0";

        },100);


        setTimeout(() => {

            heart.remove();

        },4500);

    }

}
