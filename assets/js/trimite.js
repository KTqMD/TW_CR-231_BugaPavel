document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Previne trimiterea implicită a formularului

    let formData = new FormData(this);

    fetch("trimite.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("responseMessage").textContent = data.message;
    })
    .catch(error => {
        console.error("Eroare:", error);
    });
});
