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
        <title>Scanner demo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!--link href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css" rel="stylesheet"-->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.5/css/materialize.min.css">
        <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
        <style type="text/css">
        .scanner-laser{
            position: absolute;
            margin: 40px;
            height: 30px;
            width: 30px;
        }
        .laser-leftTop{
            top: 0;
            left: 0;
            border-top: solid red 5px;
            border-left: solid red 5px;
        }
        .laser-leftBottom{
            bottom: 0;
            left: 0;
            border-bottom: solid red 5px;
            border-left: solid red 5px;
        }
        .laser-rightTop{
            top: 0;
            right: 0;
            border-top: solid red 5px;
            border-right: solid red 5px;
        }
        .laser-rightBottom{
            bottom: 0;
            right: 0;
            border-bottom: solid red 5px;
            border-right: solid red 5px;
        }
        .panel-heading{
            background-color: black !important;
        }
        .btn{
            margin: 2px !important;
            width: 10em !important;
        }
        .fa{
            margin: -3px;
            padding: 0;
        }
        .scanned-QR{
            width: 100%;
        }
        </style>
    </head>
    <body>
        <div id="QR-Code" class="container" style="width:100%">
            <div class="panel panel-primary" style="border: none !important;">
                <div class="panel-heading center" style="display: inline-block;width: 100%;">
                    <h4 style="width:50%;float:left;" class="white-text" >Receive Data</h4>
                    <span style="width:50%;float:right;">
                        <button id="save"  type="button" class="btn btn-info btn-sm disabled"><i class="fa fa-picture-o"></i></button>
                        <button id="play"  type="button" class="btn btn-success btn green"><i class="fa fa-play"></i></button>
                        <button id="stop"  type="button" class="btn btn-warning btn yellow darken-1"><i class="fa fa-pause"></i></button>
                        <button id="stopAll" data-toggle="tooltip"  type="button" class="btn btn-danger btn red"><i class="fa fa-stop"></i></button>
                    </span>
                </div>
            </div>
            <div class="panel-body">
                <div class="col-md-6" style="text-align: center;">
                    <div class="well" style="position: relative;display: inline-block;">
                        <canvas id="qr-canvas" width="320" height="240"></canvas>
                        <div class="scanner-laser laser-rightBottom" style="opacity: 0.5;"></div>
                        <div class="scanner-laser laser-rightTop" style="opacity: 0.5;"></div>
                        <div class="scanner-laser laser-leftBottom" style="opacity: 0.5;"></div>
                        <div class="scanner-laser laser-leftTop" style="opacity: 0.5;"></div>
                    </div>
                    <!--This well is invisible it holds the settings for the camera-->
                    <div class="well" style="display: none;" >
                        <label id="zoom-value" width="100">Zoom: 2</label>
                        <input type="range" id="zoom" value="2.2" min="10" max="30" onchange="Page.changeZoom();"/>
                        <label id="brightness-value" width="100">Brightness: 0</label>
                        <input type="range" id="brightness" value="0" min="0" max="128" onchange="Page.changeBrightness();"/>
                        <label id="contrast-value" width="100">Contrast: 0</label>
                        <input type="range" id="contrast" value="0" min="0" max="64" onchange="Page.changeContrast();"/>
                        <label id="threshold-value" width="100">Threshold: 0</label>
                        <input type="range" id="threshold" value="0" min="0" max="512" onchange="Page.changeThreshold();"/>
                        <label id="sharpness-value" width="100">Sharpness: off</label>
                        <input type="checkbox" id="sharpness" onchange="Page.changeSharpness();"/>
                        <label id="grayscale-value" width="100">grayscale: off</label>
                        <input type="checkbox" id="grayscale" onchange="Page.changeGrayscale();"/>
                    </div>
                    <!--End invisible well-->
                </div>
                <div class="col-md-6" style="text-align: center;">
                        <div class="caption">
                            <h3>Scanned result</h3>
                            <p id="scanned-QR"></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="panel-footer">
            </div>
        </div>
    </div>
</body>
    <script type="text/javascript" src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
    <!--script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.5/js/materialize.min.js"></script-->
    <script type="text/javascript" src="../js/qrcodelib.js"></script>
    <script type="text/javascript" src="../js/WebCodeCam.min.js"></script>
    <script type="text/javascript" src="../js/mainqr.js"></script>
    <script type="text/javascript" src="../js/DecoderWorker.js"></script>
</html>