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
  <link rel="stylesheet" href="../css/style.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
  <script src="../js/main.js"></script>
  <script src="../js/collect.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.5/js/materialize.min.js"></script>
<body>
  <nav>
  <div class="nav-wrapper black">
    <a href="#!" class="brand-logo center">LARS</a>
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
    <div id="pre-game">
      <div id="AskIsPerosn" class="container center topel">
        <h3>
          Hello, is <?php echo $_SESSION['username']?> your name?
        </h3>
        <div class="row">
          <a class="Next waves-effect waves-light btn col s5 green" style="margin-right: 4px; margin-left: 5px;">Yes</a>
          <a id="nameNo"class="waves-effect waves-light btn col s5 green">No</a>
        </div>
      </div>
      <div id="SelectRobot" class="hidden container center topel">
        <div class="row">
          <h5>Team Number:</h5>
          <input type="number" class="Writenval" title="teamNum" class="s6">
        </div>
        <div class="row">
          <h5>Match Number:</h5>
          <input type="number" class="Writenval" title="matchNum" class="s6">
        </div>
        <div class="row">
          <h5>Team Color:</h5>
          <span title="sideRed" class="checkable option red col s6 waves-effect waves-light btn">
            <h4>Red</h4>
          </span>
          <span title="sideBlue" class="checkable option blue col s6 waves-effect waves-light btn">
            <h4>Blue</h4>
          </span>
        </div>
        <a class="Next waves-effect waves-light btn col s12 green">Next</a>
      </div>
     <div id="SelectTraps" class="hidden container center topel">
        <div class="row">
          <h5>Select the Traps: (select four)</h5>
          <span title="LowBar" class="option selected disabled col s12 btn">
            <h4>Low Bar &#10003</h4>
          </span>
          <span title="Portcullis" class="option checkable goaway blue col s12 waves-effect waves-light btn">
            <h4>Portcullis</h4>
          </span>
          <span title="ChevalDF" class="option checkable goaway blue col s12 waves-effect waves-light btn">
            <h4>Cheval de Frise</h4>
          </span>
          <span title="Moat" class="option checkable goaway blue col s12 waves-effect waves-light btn">
            <h4>Moat</h4>
          </span>
          <span title="Ramparts" class="option checkable goaway blue col s12 waves-effect waves-light btn">
            <h4>Ramparts</h4>
          </span>
          <span title="Drawbridge" class="option checkable goaway blue col s12 waves-effect waves-light btn">
            <h4>Drawbridge</h4>
          </span>
          <span title="SallyPort" class="option checkable goaway blue col s12 waves-effect waves-light btn">
            <h4>Sally Port</h4>
          </span>
          <span title="RockWall" class="option checkable goaway blue col s12 waves-effect waves-light btn">
            <h4>Rock Wall</h4>
          </span>
          <span title="RoughTerrain" class="contToAuton option goaway checkable blue col s12 waves-effect waves-light btn">
            <h4>Rough Terrain</h4>
          </span>
        </div>
     </div>
 </div>
  <div id="ContToAuton">
        <div id="StartAuton" class="topAuton hidden container center topel ">
            <div class="row">
              <h4>When Autonomous mode begins, please continue</h4>
              <a class="Next startauton waves-effect waves-light btn col s12 green">Continue to autonomous mode</a>
            </div>
        </div>
        <div id="SelectTraps" class="hidden container center topel">
        <div class="row">
          <h5>Does the robot move during Autonomous mode? </h5>
          <span title="AutonMove" class="option checkable Next col s12 btn">
            <h4>Yes</h4>
          </span>
           <span title="AutonNoMove" class="option checkable waitfortele col s12 btn">
            <h4>No</h4>
          </span>
        </div>
     </div>
  </div>
  <div id="GenQR" class="hidden container center topel">
    <div class="row">
      <a class="Gen waves-effect waves-light btn col s12 green">Generate QR code</a>
   </div>
  </div>
  </content>
</body>
</html>
