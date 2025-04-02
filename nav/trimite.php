<?php
header("Content-Type: application/json");

// Conectare la MySQL
$servername = "localhost";
$username = "root"; // Schimbă dacă ai alt utilizator
$password = ""; // Schimbă dacă ai parolă
$database = "contact_db";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die(json_encode(["success" => false, "message" => "Conexiune eșuată: " . $conn->connect_error]));
}

// Verificăm dacă este cerere POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    if (empty($name) || empty($email) || empty($message)) {
        echo json_encode(["success" => false, "message" => "Toate câmpurile sunt obligatorii!"]);
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(["success" => false, "message" => "Adresă de email invalidă!"]);
        exit;
    }

    $stmt = $conn->prepare("INSERT INTO messages (name, email, message) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $name, $email, $message);

    if ($stmt->execute()) {
        echo json_encode(["success" => true, "message" => "Mesaj salvat cu succes!"]);
    } else {
        echo json_encode(["success" => false, "message" => "Eroare la salvare!"]);
    }

    $stmt->close();
    $conn->close();
}
?>
