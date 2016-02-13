<?php
    session_start();
    $_SESSION['loggedin'] = 0;
    unset($_SESSION['loggedin']);
    header("Location: ../index.php");
    exit();
?>