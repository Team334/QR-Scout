<?php

session_start();

if ($_GET['login']) {
     // Only load the code below if the GET
     // variable 'login' is set. You will
     // set this when you submit the form

     if (($_POST['username'] == 'Admin' && $_POST['password'] == 'robatics') || ($_POST['username'] == 'Kev'
         && $_POST['password'] == 'blahblah'))
         // Load code below if both username
         // and password submitted are correct

         $_SESSION['loggedin'] = 1;
         $_SESSION['username'] = $_POST['username'];
          // Set session variable

         header("Location: Interface.php?");
         exit;
         // Redirect to a protected page

     } else { echo "Wrong details";}
     // Otherwise, echo the error message



?>
