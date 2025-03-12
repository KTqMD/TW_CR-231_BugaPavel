document.getElementById("openButton").addEventListener("click", function() {
    let skinImage = document.getElementById("skinImage");
    let images = [
        "../assets/img/skin1.png",
        "../assets/img/skin2.png",
        "../assets/img/skin3.png",
        "../assets/img/skin4.png",
        "../assets/img/skin5.png",
        "../assets/img/skin6.png",
        "../assets/img/skin7.png",
        "../assets/img/skin8.png",
        "../assets/img/skin9.png"
    ];

    // Resetează imaginea și ascunde conținutul anterior
    skinImage.style.display = "none";

    let counter = 0;
    let randomStop = Math.floor(Math.random() * images.length);
    let interval = setInterval(() => {
        skinImage.src = images[counter % images.length];
        skinImage.style.display = "block";
        counter++;

        if (counter > randomStop + images.length * 2) {  // Rulăm de mai multe ori înainte să ne oprim
            clearInterval(interval);
            skinImage.src = images[randomStop];  // Se oprește la un skin aleatoriu
        }
    }, 150);
});
