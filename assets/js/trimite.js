$(document).ready(function () {
    $("#contactForm").on("submit", function (e) {
        e.preventDefault();
        console.log("Form submitted via AJAX");

        $.ajax({
            url: "trimite.php",
            type: "POST",
            data: $(this).serialize(),
            dataType: "json",
            success: function (response) {
                $("#responseMessage").text(response.message);
            },
            error: function (xhr, status, error) {
                $("#responseMessage").text("Eroare la trimitere.");
                console.error("AJAX error:", xhr.responseText);
            }
        });
    });
});
