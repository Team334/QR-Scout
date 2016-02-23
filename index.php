<?php
    // Call this function so your page
    // can access session variables
    if ($_SESSION['loggedin'] != 1) {
    }
    else {
      header("Location: protected/Interface.php");
    }
?>
<html>
<head>
  <title>
    Team 334 LARS
  </title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.5/css/materialize.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.5/js/materialize.min.js"></script>
</head>
<body>
  <nav class="black">
    <ul>
      <li style="padding-left: 8px;">
        <span class="grey-text text-darken-1">Look, a Robot! system (LARS)</span>
      </li>
      <li>
        <a href="#">
          Login
        </a>
      </li>
    </ul>
  </nav>
  <content>
    <div id="Weclome" class="center">
      <h1>
        The Team 334 LARS System
      </h1>
    </div>
    <div>
      <div class="container">
        <h3 class="center">Log in:</h3>
        <form action="protected/Auth.php?login=1" method="post">
          Username: <input type="text" name="username" />
          Password: <input type="password" name="password" />
          <input class="btn black" type="submit" />
        </form>
    </div>
    </div>
  </content>
</body>
</html>
