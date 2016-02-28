var answerobj = {};
	var autonbreached = []
	var defs = []
	var telebreached = {'def1reached': '' ,'def2reached': '' ,'def3reached': '' ,'def4reached': '' ,'def5reached': ''}
	var autonhigh = 0;
	var autonlow = 0;
	var autonmissed = 0;
	var telehigh = 0;
	var telelow = 0;
	var telemissed = 0;
	var name;
$(document).ready(function() {
	//Init loading slideUp
	$.mobile.loading().slideUp();
	//Init array that holds values of multchoice
	$(".Next").click(next);
	$(".checkable").click(select);
	$(".checkabledef").click(selectdef);
	$(".autonbreach").click(addtoautonbreached);
	$(".goaway").click(goaway);
	$(".waitfortele").click(waitfortele);
	$(".startauton").click({timernum: 5, ths: '#ContToAuton', tme: 0}, changetimer);
	$(".addautonhigh").click(addautonhigh);
	$(".addautonlow").click(addautonlow);
	$(".addautonmissed").click(addautonmissed);
	$(".addtelehigh").click(addtelehigh);
	$(".addtelelow").click(addtelelow);
	$(".addtelemissed").click(addtelemissed);
	$(".endscale").click(checkendscale);
	$(".endreached").click(checkendreached);
	$(".gotopit").click(pitscouting);
	$("#nameNo").click(logout)
	$(".Gen").click(generate);
	$(".GenPit").click(generatepit);
	var checktraps = setInterval(function(){
	if (defs[3]) {
		clearInterval(checktraps);
		answerobj['defs'] = defs;
		contToAuton();
	}}, 100);
	//DefTimers
	var count = 0;
	var time = 0;

	$('.telestbreach').on('vmousedown',function(){
		var ths = $(this);
		var def = $(this).text();
	    deftimer = setInterval(function(){
	    	time = time+.1;
	    	if (decimalPlaces(time) != 1) {
	    		time = Math.round( time * 10 ) / 10;
	    	}
	        ths.text(def+" "+time);
	    }, 100);

	    return false;
	});

	$('.telestbreach').on('vmouseup',function(){
		var ths = $(this).attr('title');
	    clearInterval(deftimer);
	    telebreached[ths] = time;
	    count = 0;
	    countms = 0;
	    time = 0;
	    return false;
	});

	function decimalPlaces(num) {
	  var match = (''+num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
	  if (!match) { return 0; }
	  return Math.max(
       0,
       // Number of digits right of decimal point.
       (match[1] ? match[1].length : 0)
       // Adjust for scientific notation.
       - (match[2] ? +match[2] : 0));
	}

	//End DefTimers
	});
	function next() {
		$(this).closest('.topel').slideUp(400);
		$(this).closest('.topel').next().show(200);
	}
	function contToAuton() {
		$('.lastpregame').closest('.topel').slideUp(400);
		$('.topAuton').show(200);
		$('#pre-game').children().find(".Writenval").each(function(){
			if ($(this).attr('title') == "teamNum"){
			answerobj['teamNum'] = $(this).val();
			}
			else {
				answerobj['matchNum'] = $(this).val();
			}
		});
		//$('.defbreached > h5').find("[title='def2reached'").html(answerobj[]);
		var arrnum = 0;
		$('.defbreached > .options').children().each(function() {
			if ($(this).attr('title') != 'a') {
				$(this).html(defs[arrnum]);
				arrnum++;
			}
		})
	}
	function contToTele() {
		changetimer({data: {timernum: 30, ths: '#ContToTele', time: 1}});
		answerobj['autondefsbreached'] = autonbreached;
		answerobj['autonHighGoals'] = autonhigh;
		answerobj['autonLowGoals'] = autonlow;
		answerobj['autonMissedGoals'] = autonmissed;
		$('.topTele').show(200);
		var arrnum = 0;
		$('.defbreachedtele > .options').children().each(function() {
			if ($(this).attr('title') != 'def1reached') {
				$(this).html(defs[arrnum]);
				arrnum++;
			}
		})
	}
	function contToEnd() {
		answerobj['telebreached'] = telebreached;
		answerobj['teleHighGoals'] = telehigh;
		answerobj['teleLowGoals'] = telelow;
		answerobj['teleMissedGoals'] = telemissed;
		$('.end').slideDown(400);
	}

	function changetimer(event) {
		$('.nav-wrapper').removeClass('flash');
		var timernum = event.data.timernum;
		var ths = event.data.ths;
		var time = event.data.tme;
		$(".brand-logo").html(timernum + " Seconds remaining");
		timernum = timernum - 1;
		var i = setInterval(function() {
			var secremain = (timernum == 1 ) ? " Second remaining" : " Seconds remaining";
			$(".brand-logo").html(timernum + secremain);
			timernum--;
			if (timernum < 0 && time == 0){
				clearInterval(i);
				$(ths).slideUp();
				contToTele();
			}
			else if (timernum < 16 && time != 0) {
				$('#DefencesBreachedTele').slideUp(200);
				$('#endgameq').slideDown(400);
				if (timernum <= 5){
				$('.nav-wrapper').addClass('flash');
				}
				if (timernum < 0 && time != 0) {
					clearInterval(i);
					$(ths).slideUp();
					$(".brand-logo").html("LAR");
					$('.nav-wrapper').removeClass('flash');
					contToEnd();
				}
			}
			else if (timernum <= 5){
				$('.nav-wrapper').addClass('flash');
			}
		},1000);
	}
	function waitfortele () {
		$("#ContToTele").html('<h1 class="center">Please wait for this mode to end</h1>');
	}
	function goaway() {
		$(this).slideUp(100);
	}
	function addautonhigh() {
		autonhigh++;
		$(this).text(autonhigh+" High Goals");
	}
	function addautonlow() {
		autonlow++;
		$(this).text(autonlow+" Low Goals");
	}
	function addautonmissed() {
		autonmissed++;
		$(this).text(autonmissed+" Missed Goals");
	}
	function addtelehigh() {
		telehigh++;
		$(this).text(telehigh+" High Goals");
	}
	function addtelelow() {
		telelow++;
		$(this).text(telelow+" Low Goals");
	}
	function addtelemissed() {
		telemissed++;
		$(this).text(telemissed+" Missed Goals");
	}
	function select() {
			var thistitle = $(this).attr('title');
			answerobj[thistitle] = 1;
			if (thistitle == 'sideRed' || thistitle == 'sideBlue') {
				$('#teamside').slideUp(200);
			}
	}
	function addtoautonbreached() {
			var thistitle = $(this).attr('title');
			autonbreached.push(thistitle);
	}
	function selectdef() {
			var thistitle = $(this).attr('title');
			defs.push(thistitle);
	}
	function checkendreached() {
			var thistitle = $(this).attr('title');
			if (thistitle == 'BaseReached') {
				answerobj['EndReached'] = 1;
			}
			else {
				answerobj['EndReached'] = 0;
			}
			$(this).parent().hide(200);
	}
	function checkendscale() {
			var thistitle = $(this).attr('title');
			if (thistitle == 'BaseScaled') {
				answerobj['EndScaled'] = 1;
			}
			else {
				answerobj['EndScaled'] = 0;
			}
			$(this).parent().hide(200);
	}
	function pitscouting() {
		answerobj['teamName'] = $('#pre-game').children().find(".teamNum").val();
		$('#pre-game').hide(200);
		$('#GenQR').show(200);
		$('.Gen').hide(200);
		$('.GenPit').show(200);

	}
	function logout() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
     window.location.href = "../index.html"
    });
  }