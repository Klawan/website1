<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Check if the provided credentials are valid (replace with your validation logic)

    if ($username === 'klawan20' && $password === '12345') {
        $_SESSION['authenticated'] = true;
        ob_start();
        header('Location: index.html'); // Redirection to the index.html page after successful login
        exit;
    } else {
        $error = 'Invalid username or password';
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>login</title>
    <link rel="stylesheet" href="klawan.css">
</head>
<body class="kamal">
    <div>
        <h1>welcome to klawan Dashboard</h1>
        
        <form action="login.php" method="post">
            <label for="username">Username</label>
            <input type="text" id="username" name="username" placeholder="username" required>

            <label for="password">Password</label>
            <input type="password" id="password" name="password" placeholder="password" required>

            <button type="submit">Login</button>
        </form>
 
        <?php if (isset($error)) : ?>
        <p class="error"><?=$error; ?></p>
        <?php endif; ?>
    </div>
</body>
</html>