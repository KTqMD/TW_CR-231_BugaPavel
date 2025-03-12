function openCase() {
    const items = document.querySelectorAll(".case-item"); // Selectăm imaginile din HTML
    let index = 0;

    // Facem toate imaginile invizibile
    items.forEach(img => img.style.display = "none");

    // 1️⃣ Animația ruletei
    const interval = setInterval(() => {
        items.forEach(img => img.style.display = "none"); // Ascundem toate
        items[index].style.display = "block"; // Afișăm imaginea curentă
        index = (index + 1) % items.length;
    }, 100); // Schimbare rapidă a imaginilor

    // 2️⃣ Se oprește pe un element aleatoriu
    setTimeout(() => {
        clearInterval(interval);
        const finalIndex = Math.floor(Math.random() * items.length);
        items.forEach(img => img.style.display = "none");
        items[finalIndex].style.display = "block";
    }, 3000); // Se oprește după 3 secunde
}
