document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".items-container");

    const items = [
        { name: "Common Knife", img: "../assets/img/skin1.png", rarity: "common" },
        { name: "Rare Pistol", img: "../assets/img/skin2.png", rarity: "rare" },
        { name: "Epic Sniper", img: "../assets/img/skin3.png", rarity: "epic" },
        { name: "Legendary Rifle", img: "../assets/img/skin4.png", rarity: "legendary" }
    ];

    items.forEach((item, index) => {
        const itemElement = document.createElement("div");
        itemElement.classList.add("item", item.rarity);
        
        itemElement.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <p>${item.name}</p>
        `;

        container.appendChild(itemElement);

        // Adăugăm efectul de animație cu întârziere
        setTimeout(() => {
            itemElement.classList.add("show");
        }, index * 300);
    });
});
