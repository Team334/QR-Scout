<?php

    session_start();
    // Call this function so your page
    // can access session variables

    if ($_SESSION['loggedin'] != 1) {
        // If the 'loggedin' session variable
        // is not equal to 1, then you must
        // not let the user see the page.
        // So, we'll redirect them to the
        // login page (login.php).

        header("Location: ../index.php");
        exit;
    }
?>
<!DOCTYPE html>
<html>
<head>
  <title>
    Team 334 LARS
  </title>
</head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.5/css/materialize.min.css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="../Css/style.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
  <script src="../Js/main.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.5/js/materialize.min.js"></script>
<body>
  <nav>
  <div class="nav-wrapper black">
    <a href="#!" class="brand-logo center">LARS</a>
    <a href="#" data-activates="mobile" class="button-collapse"><i style="margin-left: 3px;" class="fa fa-bars"></i></a>
    <ul class="left hide-on-med-and-down">
      <li><a href="Interface.php">Home</a></li>
      <li><a href="Recieve.php">Recieve</a></li>
      <li><a href="Collect.php">Collect</a></li>
    </ul>
    <ul class="side-nav" id="mobile">
      <li><a href="Interface.php">Home</a></li>
      <li><a href="Recieve.php">Recieve</a></li>
      <li><a href="Collect.php">Collects</a></li>
    </ul>
    </div>
  </nav>
  <content>
    <div id="Weclome" class="center">
      <h1>
        Welcome <?php echo $_SESSION['username']?> to the Team 334 LARS system
      </h1>
      <h3 class="name">
      </h3>
    </div>
    <div id="Selection" class="center container">
        <div class='row option'>
            <a href="Recieve.php">
             <span class="option green recieve col s6 alignv">
                 Recieve <h3><i class="fa fa-qrcode"></i></h3>
             </span>
            </a>
            <a href="Colllect.php">
                <span class="option red collect col s6 alignv">
                         Collect <h3><i class="fa fa-pencil"></i></h3>
                </span>
            </a>
        </div>
    </div>    
  </content>
</body>
</html>
