<?php
session_start();

// Unset all session variable
$_SESSION = array();

// Desrtroy the session
session_destroy();

// Redirect to the login page
header('Location: login.php');
exit;
?>