<!DOCTYPE html>
<html lang="ro">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact</title>
    <link rel="stylesheet" href="../assets/css/styles.css">
</head>
<body>
    <header> 
        <h1>CS2 Skin Lover</h1>
        <nav>
            <ul>
                <li><a href="../index.php">Acasă</a></li>
                <li><a href="skins.php">Skin-uri</a></li>
                <li><a href="history.php">Istorie</a></li>
                <li><a href="about.php">Despre</a></li> 
                <li><a href="contact.php">Contact</a></li>
                <li><a href="case-opener.php">Cutii</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section class="contact-section">
            <h2>Contactează-ne</h2>
            <p>Completează formularul și te vom contacta în cel mai scurt timp.</p>
            
            <form id="contactForm" class="contact-form">
                <label for="name">Nume:</label>
                <input type="text" id="name" name="name" required placeholder="Introdu numele tău">
        
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required placeholder="Introdu adresa de email">
        
                <label for="message">Mesaj:</label>
                <textarea id="message" name="message" rows="5" required placeholder="Scrie mesajul tău aici"></textarea>
        
                <button type="submit">Trimite Mesajul</button>
            </form>
        
            <p id="responseMessage" style="margin-top: 15px; font-weight: bold;"></p>
        </section>
        
    </main>

    <footer>
        <p>&copy; CR-231 Buga Pavel</p>
    </footer>

    <script src="../assets/js/trimite.js"></script>
</body>
</html>
