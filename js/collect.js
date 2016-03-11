var answerobj = {};
	var autonbreached = []
	var defs = []
	var telebreached = {'def1reached': '' ,'def2reached': '' ,'def3reached': '' ,'def4reached': '' ,'def5reached': ''}
	var autonhigh = -1;
	var autonlow = -1;
	var autonmissedh = -1;
	var autonmissedl = -1;
	var telehigh = -1;
	var telelow = -1;
	var telemissed = -1;
	var teledef1 = -1;
	var teledef2 = -1;
	var teledef3 = -1;
	var teledef4 = -1;
	var teledef5 = -1;
	var name;
	var checktraps;
	var inithtml;
	var side;
	var paused = 0;
	var pausedval;
	var timernum;
	var ct;
	var time;
	var ths;
	var speed = -1;
	var manuver = -1;
	var defskill = -1;
	var skill = -1;
	var endreachedck = 0;
	var endscaledck = 0;
	var enddefck = 0;
	var spyboxyes = 0;
$(document).ready(ready);
	function ready() {
	//Init loading slideUp
	$.mobile.loading().slideUp();
	//Init array that holds values of multchoice
	$('.minusspeed').click(minusspeed);
	$('.plusspeed').click(plusspeed);
	$('.minusmanuver').click(minusmanuver);
	$('.plusmanuver').click(plusmanuver);
	$('.minusdefskill').click(minusdefskill);
	$('.plusdefskill').click(plusdefskill);
	$('.minusskill').click(minusskill);
	$('.plusskill').click(plusskill);
	$('.minusscale').click(minusdefscore);
	$('.plusscale').click(plusdefscore);
	$('.minusautonmissed').click(minusautonmissed);
	$('.minusautonlow').click(minusautonlow);
	$('.minusautonhigh').click(minusautonhigh);
	$('.minustelemissed').click(minustelemissed);
	$('.minustelelow').click(minustelelow);
	$('.minustelehigh').click(minustelehigh);
	$('.back').click(goback);
	$(".brand-logo").click(pause);
	$(".Next").click(nexts);
	$(".checkable").click(select);
	$(".checkabledef").click(selectdef);
	$(".autonbreach").click(addtoautonbreached);
	$(".goaway").click(goaway);
	$(".waitfortele").click(waitfortele);
	$(".startauton").click({timernum: 65, ths: '#ContToAuton', tme: 0}, changetimer);
	$(".addautonhigh").click(addautonhigh);
	$(".addautonlow").click(addautonlow);
	$(".addautonmissed").click(addautonmissed);
	$(".addtelehigh").click(addtelehigh);
	$(".addtelelow").click(addtelelow);
	$(".addtelemissed").click(addtelemissed);
	$(".endscale").click(checkendscale);
	$(".endreached").click(checkendreached);
	$(".enddef").click(checkenddef);
	$('.checkHPY').click(checkHPY)
	$(".gotopit").click(pitscouting);
	$("#nameNo").click(logout)
	$(".Gen").click(generate);
	$(".GenPit").click(generatepit);
	$(".reset").click(reset);
	checktraps = setInterval(function(){
	if (defs[3]) {
		clearInterval(checktraps);
		answerobj['defs'] = defs;
		$('.back').hide();
		contToAuton();
	}}, 100);
	}
	function nexts() {
		$(this).closest('.topel').slideUp(400);
		$(this).closest('.topel').next().show(200);
		$(this).closest('.topel').removeClass('active');
		$(this).closest('.topel').next().addClass('active');
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
		changetimer({data: {timernum: 15, ths: '#ContToTele', time: 1}});
		answerobj['autondefsbreached'] = autonbreached;
		answerobj['autonHighGoals'] = autonhigh;
		answerobj['autonLowGoals'] = autonlow;
		answerobj['autonMissedGoals'] = autonmissed;
		$('.topTele').show(200);
		var arrnum = 0;
		$('.defbreachedtele > .options').children().each(function() {
			if ($(this).hasClass('telestbreach') && $(this).attr('title') != 'def1reached') {
				$(this).html(defs[arrnum]);
				arrnum++;
			}
		})
	}
	function contToEnd() {
		telebreached['def1reached'] = teledef1;
		telebreached['def2reached'] = teledef2;
		telebreached['def3reached'] = teledef3;
		telebreached['def4reached'] = teledef4;
		telebreached['def5reached'] = teledef5;
		answerobj['telebreached'] = telebreached;
		answerobj['teleHighGoals'] = telehigh;
		answerobj['teleLowGoals'] = telelow;
		answerobj['teleMissedGoals'] = telemissed;
		$('#EndGameQ').slideDown(400);
	}

	function changetimer(event) {
		$('.nav-wrapper').removeClass('flash');
		timernum = event.data.timernum;
		ths = event.data.ths;
		time = event.data.tme;
		$(".brand-logo").html(timernum + " Seconds remaining");
		timernum = timernum - 1;
		 ct = setInterval(function() {
			var secremain = (timernum == 1 ) ? " Second remaining" : " Seconds remaining";
			$(".brand-logo").html(timernum + secremain);
			timernum--;
			if (timernum < 0 && time == 0){
				clearInterval(ct);
				$(ths).slideUp();
				contToTele();
			}
			else if (timernum < 16 && time != 0) {
				if (timernum <= 5){
				$('.nav-wrapper').addClass('flash');
				}
				if (timernum < 0 && time != 0) {
					$('#endgameq').slideDown(400);
					clearInterval(ct);
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
		var thistitle = $(this).next().attr('title');
		if(thistitle == 'high'){
			autonmissedh++;
			$(this).text(autonmissedh+" MissedH Goals");
		}
		if(thistitle == 'low'){
			autonmissedl++;
			$(this).text(autonmissedl+" MissedL Goals");
			
		}
	}
	function minusautonhigh() {
		autonhigh--;
		if(autonhigh < -1) autonhigh = -1;
		if (autonhigh == -1) $(this).next().text("No High Goals");
		else $(this).next().text(autonhigh+" High Goals");
	}
	function minusautonlow() {
		autonlow--;
		if(autonlow < -1) autonlow = -1;
		if (autonlow == -1) $(this).next().text("No Low Goals");
		else $(this).next().text(autonlow+" Low Goals");
	}
	function minusautonmissed() {
		var thistitle = $(this).next().attr('title');
		if(thistitle == 'high'){
			autonmissedh--;
			if(autonmissedh < -1) autonmissedh = -1;
			if (autonmissedh == -1) $(this).next().text("MissedH Goals");
			else $(this).next().text(autonmissedh);
		}
		if(thistitle == 'low'){
			autonmissedl--;
			if(autonmissedh < -1) autonmissedl = -1;
			if (autonmissedl == -1) $(this).next().text("MissedL Goals");
			else $(this).next().text(autonmissedl);
		}
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
	function minustelehigh() {
		telehigh--;
		if(telehigh < -1) telehigh = -1;
		if(telehigh == -1) $(this).prev().text("No High Goals");
		else $(this).prev().text(telehigh+" High Goals");
	}
	function minustelelow() {
		telelow--;
		if(telelow < -1) telelow = -1;
		if(telelow == -1) $(this).prev().text("No Low Goals");
		else $(this).prev().text(telelow+" Low Goals");
	}
	function minustelemissed() {
		telemissed--;
		if(telemissed < -1) telemissed = -1;
		if(telemissed == -1) $(this).prev().text("No Missed Goals");
		else $(this).prev().text(telemissed+" Missed Goals");
	}
	function minusdefscore(){
		var thistitle = $(this).next().attr('title');
		if(thistitle == 'def1reached'){
			if(teledef1 <= 0) {
				teledef1 = -1;
				$(this).next().html("LowBar"+"N/A");
			}
			else {
				teledef1--;
				$(this).next().html("LowBar"+teledef1);
			}
		}
		if(thistitle == 'def2reached'){
			if(teledef2 <= 0) {
				teledef2 = -1;
				$(this).next().html(defs[0]+"N/A");
			}
			else {
				teledef2--;
				$(this).next().html(defs[0]+teledef3);
			}
		}
		if(thistitle == 'def3reached'){
			if(teledef3 <= 0) {
				teledef3 = -1;
				$(this).next().html(defs[1]+"N/A");
			}
			else {
				teledef3--;
				$(this).next().html(defs[1]+teledef3);
			}
		}
		if(thistitle == 'def4reached'){
		 	if(teledef4 <= 0) {
				teledef4 = -1;
				$(this).next().html(defs[2]+"N/A");
			}
			else {
				teledef4--;
				$(this).next().html(defs[2]+teledef4);
			}
		}
		if(thistitle == 'def5reached'){
			if(teledef5 <= 0) {
				teledef5 = -1;
				$(this).next().html(defs[3]+"N/A");
			}
			else {
				teledef5--;
				$(this).next().html(defs[3]+teledef5);
			}
		}
	}
	function plusdefscore() {
		var thistitle = $(this).prev().attr('title');
		if(thistitle == 'def1reached'){
			if(teledef1 >= 10) {
				teledef1 = 10;
			}
			else {
				teledef1++;
			}
		$(this).prev().html("LowBar"+teledef1);
		}
		if(thistitle == 'def2reached'){
			if(teledef2 >= 10) {
				teledef2 = 10;
			}
			else {
				teledef2++;
			}
		$(this).prev().html(defs[0]+teledef2);
		}
		if(thistitle == 'def3reached'){
			if(teledef3 >= 10) {
				teledef3 = 10;
			}
			else {
				teledef3++;
			}
		$(this).prev().html(defs[1]+teledef3);
		}
		if(thistitle == 'def4reached'){
		 	if(teledef4 >= 10) {
				teledef4 = 10;
			}
			else {
				teledef4++;
			}
		$(this).prev().html(defs[2]+teledef4);
		}
		if(thistitle == 'def5reached'){
			if(teledef5 >= 10) {
				teledef5 = 10;
			}
			else {
				teledef5++;
			}
		$(this).prev().html(defs[3]+teledef5);
		}
	}
	function select() {
			var thistitle = $(this).attr('title');
			$(this).html($(this).html()+'&#10003')
			$(this).addClass('chosen');
			if (side == 1) {
				if (thistitle == 'sideRed'){
					$('#sideBlue').removeClass('chosen');
					$('#sideBlue').html($('#sideBlue').attr('data'));
					answerobj['side'] = thistitle;
				}
				if (thistitle == 'sideBlue'){
					$('#sideRed').removeClass('chosen');
					$('#sideRed').html($('#sideRed').attr('data'));
					answerobj['side'] = thistitle;
				}
				else {
				answerobj[thistitle] = 1;
				}
			}
			else if (thistitle == 'sideRed' || thistitle == 'sideBlue') {
				answerobj['side'] = thistitle;
				side = 1;
			}
			else {
				answerobj[thistitle] = 1;
			}
	}
	function addtoautonbreached() {
			var thistitle = $(this).attr('title');
			autonbreached.push(thistitle);
	}
	function selectdef() {
			if ($(this).hasClass('chosendef')) {
				$(this).removeClass('chosendef');
				$(this).html($(this).attr('data'));
				var newarr = removeA(defs, $(this).attr('title'));
				defs = newarr;
			}
			else {
				var thistitle = $(this).attr('title');
				defs.push(thistitle);
				$(this).addClass('chosendef');
				$(this).html($(this).html()+'&#10003');
			}
	}
	function checkendreached() {
		var thistitle = $(this).attr('title');
			if(endreachedck == 1) {
				$(this).parent().find('.chosen').removeClass('chosen');
				if (thistitle == 'BaseReached') {
					answerobj['EndReached'] = 1;
				}
				else if(thistitle == 'BaseNotReached') {
					answerobj['EndReached'] = 0;
				}
				// else if(thistitle == 'BaseReachFailed')  {
				// 	answerobj['EndReached'] = 2;
				// }
				// else if(thistitle == 'BaseReachNA') {
				// 	answerobj['EndReached'] = 3;
				// }
				$(this).addClass('chosen');
			}
			else if (endreachedck == 0){
				if (thistitle == 'BaseReached') {
					answerobj['EndReached'] = 1;
				}
				else if(thistitle == 'BaseNotReached') {
					answerobj['EndReached'] = 0;
				}
				else if(thistitle == 'BaseReachFailed')  {
					answerobj['EndReached'] = 2;
				}
				else if(thistitle == 'BaseScaleNA') {
					answerobj['EndReached'] = 3;
				}
				endreachedck = 1;
				$(this).addClass('chosen');
			}
	}
	function checkendscale() {
			var thistitle = $(this).attr('title');
			if(endscaledck == 1) {
				$(this).parent().find('.chosen').removeClass('chosen');
				if (thistitle == 'BaseScaled') {
					answerobj['EndScaled'] = 1;
					answerobj['EndFScaled'] = 0;
				}
				else if(thistitle == 'BaseNotScaled') {
					answerobj['EndScaled'] = 0;
					answerobj['EndFScaled'] = 0;
				}
				else if(thistitle == 'BaseScaleFailed')  {
					answerobj['EndFScaled'] = 1;
					answerobj['EndScaled'] = 0;
				}
				// else if(thistitle == 'BaseScaleNA') {
				// 	answerobj['EndScaled'] = 3;
				// }
				$(this).addClass('chosen');
			}
			else if(endscaledck == 0) {
				if (thistitle == 'BaseScaled') {
					answerobj['EndScaled'] = 1;
				}
				else if(thistitle == 'BaseNotScaled') {
					answerobj['EndScaled'] = 0;
				}
				else if(thistitle == 'BaseScaleFailed')  {
					answerobj['EndScaled'] = 2;
				}
				else if(thistitle == 'BaseScaleNA') {
					answerobj['EndScaled'] = 3;
				}
				endscaledck = 1;
				$(this).addClass('chosen');
			}
	}
	function checkenddef() {
			var thistitle = $(this).attr('title');
			if(enddefck == 0){
				$(this).parent().find('.chosen').removeClass('chosen');
				if (thistitle == 'AllTimes') answerobj['EndDef'] = 3;
				if (thistitle == 'Sometimes') answerobj['EndDef'] = 2;
				if (thistitle == 'Never') answerobj['EndDef'] = 0;
				$(this).addClass('chosen');
			}
			else if(enddefck == 1){
				if (thistitle == 'AllTimes') answerobj['EndDef'] = 3;
				if (thistitle == 'Sometimes') answerobj['EndDef'] = 2;
				if (thistitle == 'Never') answerobj['EndDef'] = 0;
				$(this).addClass('chosen');
			enddefck = 1;
			}
	}
	// var speed;
	// var manuver;
	// var defskill;
	// var skill;
	function minusspeed() {
		speed--;
		if(speed < -1) speed = -1;
		if (speed == -1) $(this).next().text("(N/A) Speed");
		else $(this).next().text("("+speed+") Speed");
	}
	function plusspeed() {
		if(speed >= 10) {
				speed = 10;
			}
			else {
				speed++;
			}
			$(this).prev().text("("+speed+") Speed");
	}
	function minusmanuver() {
		manuver--;
		if(manuver < -1) manuver = -1;
		if (manuver == -1) $(this).next().text("(N/A) Maneuverability");
		else $(this).next().text("("+manuver+") Maneuver");
	}
	function plusmanuver() {
		if(manuver >= 10) {
				manuver = 10;
			}
			else {
				manuver++;
			}
			$(this).prev().text("("+manuver+") Maneuver");
	}
	function minusdefskill() {
		defskill--;
		if(defskill < -1) defskill = -1;
		if (defskill == -1) $(this).next().text("(N/A) Defense");
		else $(this).next().text("("+defskill+") Defense");
	}
	function plusdefskill() {
		if(defskill >= 10) {
				defskill = 10;
			}
			else {
				defskill++;
			}
			$(this).prev().text("("+defskill+") Defense");
	}
	function minusskill() {
		skill--;
		if(skill < -1) skill = -1;
		if (skill == -1) $(this).next().text("(N/A) Skill");
		else $(this).next().text("("+skill+") Skill");
	}
	function plusskill() {
		if(skill >= 10) {
				skill = 10;
			}
			else {
				skill++;
			}
			$(this).prev().text("("+skill+") Skill");
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
  	function reset() {
  		answerobj = {};
		autonbreached = []
		defs = []
		telebreached = {'def1reached': '' ,'def2reached': '' ,'def3reached': '' ,'def4reached': '' ,'def5reached': ''}
		var autonhigh = -1;
		var autonlow = -1;
		var autonmissed = -1;
		var telehigh = -1;
		var telelow = -1;
		var telemissed = -1;
		var teledef1 = -1;
		var teledef2 = -1;
		var teledef3 = -1;
		var teledef4 = -1;
		var teledef5 = -1;
		var checktraps;
		var inithtml;
		var side;
		var paused = 0;
		var pausedval;
		var timernum;
		var ct;
		var time;
		var ths;
		var speed = -1;
		var manuver = -1;
		var defskill = -1;
		var skill = -1;
		var endreachedck = 0;
		var endscaledck = 0;
		var enddefck = 0;
		$('#body').html(inithtml);	
		ready();
  	}
  	function removeA(arr) {
    var what, a = arguments, L = a.length, ax;
    while (L > 1 && arr.length) {
        what = a[--L];
        while ((ax= arr.indexOf(what)) !== -1) {
            arr.splice(ax, 1);
        }
    }
    return arr;
	}
	function pause() {
		if(paused) {
			$(this).removeClass('ispaused');
			timernum = timernum - 1;
			var secremain = (timernum == 1 ) ? " Second remaining" : " Seconds remaining";
			$(".brand-logo").html(timernum + secremain);
			paused = 0;
			 ct = setInterval(function() {
			$(".brand-logo").html(timernum + secremain);
			timernum--;
			if (timernum < 0 && time == 0){
				clearInterval(ct);
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
					clearInterval(ct);
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
		// if(paused == 1) ct = changetimer({timernum: 10, ths: '#ContToAuton', tme: 0});
		else if(ct) {
			$(this).addClass('ispaused')
			clearInterval(ct);
			paused = 1;
		}
	}
	function goback() {
		$('.active').closest('.newscreen').slideUp(200);
		$('.active').closest('.newscreen').prev().show(200);
	}
	function checkHPY() {
		if(spyboxyes == 1){
		 $(this).removeClass('chosen');
		 spyboxyes = 0;
		}
		else {
			$(this).addClass('chosen');
			spyboxyes = 1;
		}
	}

