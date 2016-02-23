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

        header("Location: index.php");
        exit;
    }
?>≈
<html>
<head>
<title>QRCODE</title>

<style type="text/css">
</style>


<script type="text/javascript" src="../Js/QRreader/grid.js"></script>
<script type="text/javascript" src="../Js/QRreader/version.js"></script>
<script type="text/javascript" src="../Js/QRreader/detector.js"></script>
<script type="text/javascript" src="../Js/QRreader/formatinf.js"></script>
<script type="text/javascript" src="../Js/QRreader/errorlevel.js"></script>
<script type="text/javascript" src="../Js/QRreader/bitmat.js"></script>
<script type="text/javascript" src="../Js/QRreader/datablock.js"></script>
<script type="text/javascript" src="../Js/QRreader/bmparser.js"></script>
<script type="text/javascript" src="../Js/QRreader/datamask.js"></script>
<script type="text/javascript" src="../Js/QRreader/rsdecoder.js"></script>
<script type="text/javascript" src="../Js/QRreader/gf256poly.js"></script>
<script type="text/javascript" src="../Js/QRreader/gf256.js"></script>
<script type="text/javascript" src="../Js/QRreader/decoder.js"></script>
<script type="text/javascript" src="../Js/QRreader/qrcode.js"></script>
<script type="text/javascript" src="../Js/QRreader/findpat.js"></script>
<script type="text/javascript" src="../Js/QRreader/alignpat.js"></script>
<script type="text/javascript" src="../Js/QRreader/databr.js"></script>

<script type="text/javascript">
var gCtx = null;
	var gCanvas = null;

	var imageData = null;
	var ii=0;
	var jj=0;
	var c=0;


function dragenter(e) {
  e.stopPropagation();
  e.preventDefault();
}

function dragover(e) {
  e.stopPropagation();
  e.preventDefault();
}
function drop(e) {
  e.stopPropagation();
  e.preventDefault();

  var dt = e.dataTransfer;
  var files = dt.files;

  handleFiles(files);
}

function handleFiles(f)
{
	var o=[];
	for(var i =0;i<f.length;i++)
	{
	  var reader = new FileReader();

      reader.onload = (function(theFile) {
        return function(e) {
          qrcode.decode(e.target.result);
        };
      })(f[i]);

      // Read in the image file as a data URL.
      reader.readAsDataURL(f[i]);	}
}

function read(a)
{
	alert(a);
}

function load()
{
	initCanvas(640,480);
	qrcode.callback = read;
	qrcode.decode("meqrthumb.png");
}

function initCanvas(ww,hh)
	{
		gCanvas = document.getElementById("qr-canvas");
		gCanvas.addEventListener("dragenter", dragenter, false);
		gCanvas.addEventListener("dragover", dragover, false);
		gCanvas.addEventListener("drop", drop, false);
		var w = ww;
		var h = hh;
		gCanvas.style.width = w + "px";
		gCanvas.style.height = h + "px";
		gCanvas.width = w;
		gCanvas.height = h;
		gCtx = gCanvas.getContext("2d");
		gCtx.clearRect(0, 0, w, h);
		imageData = gCtx.getImageData( 0,0,320,240);
	}

	function passLine(stringPixels) {
		//a = (intVal >> 24) & 0xff;

		var coll = stringPixels.split("-");

		for(var i=0;i<320;i++) {
			var intVal = parseInt(coll[i]);
			r = (intVal >> 16) & 0xff;
			g = (intVal >> 8) & 0xff;
			b = (intVal ) & 0xff;
			imageData.data[c+0]=r;
			imageData.data[c+1]=g;
			imageData.data[c+2]=b;
			imageData.data[c+3]=255;
			c+=4;
		}

		if(c>=320*240*4) {
			c=0;
      			gCtx.putImageData(imageData, 0,0);
		}
 	}

        function captureToCanvas() {
		flash = document.getElementById("embedflash");
		flash.ccCapture();
		qrcode.decode();
        }
</script>

</head>

<body onload="load()">
    <div class="container">

  	<object  id="iembedflash" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" width="320" height="240">
  		<param name="movie" value="camcanvas.swf" />
  		<param name="quality" value="high" />
		<param name="allowScriptAccess" value="always" />
  		<embed  allowScriptAccess="always"  id="embedflash" src="camcanvas.swf" quality="high" width="320" height="240" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" mayscript="true"  />
    </object>

    </div>
<button onclick="captureToCanvas()">Capture</button><br>
<canvas id="qr-canvas" width="640" height="480"></canvas>
</body>

</html>
