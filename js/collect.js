var answerobj = {};
	var autondefsbreached = {'def1reached': '' ,'def2reached': '' ,'def3reached': '' ,'def4reached': '' ,'def5reached': ''};
	var defs = [];
	var telebreached = {'def1reached': '' ,'def2reached': '' ,'def3reached': '' ,'def4reached': '' ,'def5reached': ''};
	var autonhigh = -1;
	var autonlow = -1;
	var autonmissedh = -1;
	var autonmissedl = -1;
	var telemissedh = -1;
	var telemissedl = -1;
	var telehigh = -1;
	var telelow = -1;
	var telemissed = -1;
	var teledef1 = -1;
	var teledef2 = -1;
	var teledef3 = -1;
	var teledef4 = -1;
	var teledef5 = -1;
	var autondef1 = 0;
	var autondef2 = 0;
	var autondef3 = 0;
	var autondef4 = 0;
	var autondef5 = 0;
	var name;
	var checktraps;
	var inithtml;
	var side = '';
	// var timernum;
	// var ct;
	// var time;
	// var ths;
	var speed = -1;
	var manuver = -1;
	var defskill = -1;
	var skill = -1;
	var endreachedck = -1; 
	var endscaledck = -1;
	var endInterck = -1;
	var enddefck = -1;
	var endtowers = -1;
	var endtowerso = -1;
	var endhskills = -1;
	var endfouls = -1;
	var endtech = -1;
	var endycard = -1;
	var endrcard = -1;
	var EndFScaled = -1;
$(document).ready(ready);
	function ready() {
	//Init loading hide
	$.mobile.loading().hide();
	//Init array that holds values of multchoice
	$('.endinter').click(checkendinter);
	$('.minusred').click(minusrcard);
	$('.plusred').click(plusrcard);
	$('.minusyellow').click(minusycard);
	$('.plusyellow').click(plusycard);
	$('.minustech').click(minustech);
	$('.plustech').click(plustech);
	$('.minusfouls').click(minusfouls);
	$('.plusfouls').click(plusfouls);
	$('.minushskill').click(minushskill);
	$('.plushskill').click(plushskill);
	$('.minustower').click(minustower);
	$('.plustower').click(plustower);
	$('.minustowero').click(minustowero);
	$('.plustowero').click(plustowero);
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
	$('.minusautonlow').click(minusautonlow);
	$('.minusautonhigh').click(minusautonhigh);
	$('.minusautonmissed').click(minusautonmissed);
	$('.minustelemissed').click(minustelemissed);
	$('.minustelelow').click(minustelelow);
	$('.minustelehigh').click(minustelehigh);
	$(".Next").click(nexts);
	$(".checkable").click(select);
	$(".checkabledef").click(selectdef);
	$(".autonbreach").click(addtoautonbreached);
	$(".goaway").click(goaway);
	$(".waitfortele").click(waitfortele);
	$('.gotoAuton').click(gotoAuton);
	$('.gotoTele').click(gotoTele);
	$('.gotoEnd').click(gotoEnd);
	// $(".startauton").click({timernum: 10, ths: '#ContToAuton', tme: 0}, changetimer);
	$(".addautonhigh").click(addautonhigh);
	$(".addautonlow").click(addautonlow);
	$(".addautonmissed").click(addautonmissed);
	$(".addtelehigh").click(addtelehigh);
	$(".addtelelow").click(addtelelow);
	$(".addtelemissed").click(addtelemissed);
	$(".endscale").click(checkendscale);
	$(".endreached").click(checkendreached);
	$(".enddef").click(checkenddef);
	$("#nameNo").click(logout)
	$(".Gen").click(generate);
	$(".GenPit").click(generatepit);
	$(".reset").click(reset);
	checktraps = setInterval(function(){
	if (defs[3]) {
		clearInterval(checktraps);
		answerobj['defs'] = defs;
		$('#SelectTraps').hide();
		$('.gotoAuton').html('Auton');
		$('.gotoTele').html('Tele');
		$('.gotoEnd').html('End')
		gotoTele();
		gotoAuton();
	}}, 100);
	}
	function gotoAuton() {
		var arrnum = 0;
		$('.defbreachedtele > .options').children().each(function() {
			if ($(this).hasClass('telestbreach') && $(this).attr('title') != 'def1reached') {
				$(this).html(defs[arrnum]);
				arrnum++;
			}
		});
		$('.active').hide();
		$('.topAuton').show();
		$('.active').removeClass('active');
		$('.topAuton').addClass('active');

	}
	function gotoTele() {
		var arrnum = 0;
		$('.defbreached > .options').children().each(function() {
			if ($(this).attr('title') != 'def1reached') {
				$(this).html(defs[arrnum]);
				arrnum++;
			}
		});
		$('.topTele').show();
		$('.active').hide();
		$('.active').removeClass('active');
		$('.topTele').addClass('active');
		
	}
	function gotoEnd() {
		$('.topEnd').show();
		$('.active').hide();
		$('.active').removeClass('active');
		$('.topEnd').addClass('active');
		
	}
	function nexts() {
		if($(this).hasClass('endbeg')) {
			if($('.teamNum').val() == "" || $('.matchNum').val() == '' || side == '') {
				$('.turnred').addClass('rad');
			}
			else {
				$(this).closest('.topel').slideUp(400);
				$(this).closest('.topel').next().show(200);
				$(this).closest('.topel').removeClass('active');
				$(this).closest('#teamside').children().addClass('active');
			}
		}
		else {
			$(this).closest('.topel').slideUp(400);
			$(this).closest('.topel').next().show(200);
			$(this).closest('.topel').removeClass('active');
			$(this).closest('#teamside').children().addClass('active');
		}
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
		var thistitle = $(this).attr('title');
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
		if (autonhigh == -1) $(this).next().text("High Goals");
		else $(this).next().text(autonhigh+" High Goals");
	}
	function minusautonlow() {
		autonlow--;
		if(autonlow < -1) autonlow = -1;
		if (autonlow == -1) $(this).next().text("Low Goals");
		else $(this).next().text(autonlow+" Low Goals");
	}
	function minusautonmissed() {
		var thistitle = $(this).attr('title');
		if(thistitle == 'high'){
			autonmissedh--;
			if(autonmissedh < -1) autonmissedh = -1;
			if (autonmissedh == -1) $(this).next().text("MissedH Goals");
			else $(this).next().text(autonmissedh);
		}
		if(thistitle == 'low'){
			autonmissedl--;
			if(autonmissedl < -1) autonmissedl = -1;
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
		var thistitle = $(this).attr('title');
		if(thistitle == 'high'){
			telemissedh++;
			$(this).text(telemissedh+" MissedH Goals");
		}
		if(thistitle == 'low'){
			telemissedl++;
			$(this).text(telemissedl+" MissedL Goals");
			
		}
	}
	function minustelehigh() {
		telehigh--;
		if(telehigh < -1) telehigh = -1;
		if(telehigh == -1) $(this).next().text("High Goals");
		else $(this).next().text(telehigh+" High Goals");
	}
	function minustelelow() {
		telelow--;
		if(telelow < -1) telelow = -1;
		if(telelow == -1) $(this).next().text("Low Goals");
		else $(this).next().text(telelow+" Low Goals");
	}
	function minustelemissed() {
		var thistitle = $(this).next().attr('title');
		if(thistitle == 'high'){
			telemissedh--;
			if(telemissedh < -1) telemissedh = -1;
			if (telemissedh == -1) $(this).next().text("MissedH Goals");
			else $(this).next().text(telemissedh);
		}
		if(thistitle == 'low'){
			telemissedl--;
			if(telemissedl < -1) telemissedl = -1;
			if (telemissedl == -1) $(this).next().text("MissedL Goals");
			else $(this).next().text(telemissedl);
		}
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
				$(this).next().html("LowBar"+" "+teledef1);
			}
		}
		if(thistitle == 'def2reached'){
			if(teledef2 <= 0) {
				teledef2 = -1;
				$(this).next().html(defs[0]+" "+"N/A");
			}
			else {
				teledef2--;
				$(this).next().html(defs[0]+" "+teledef3);
			}
		}
		if(thistitle == 'def3reached'){
			if(teledef3 <= 0) {
				teledef3 = -1;
				$(this).next().html(defs[1]+" "+"N/A");
			}
			else {
				teledef3--;
				$(this).next().html(defs[1]+" "+teledef3);
			}
		}
		if(thistitle == 'def4reached'){
		 	if(teledef4 <= 0) {
				teledef4 = -1;
				$(this).next().html(defs[2]+" "+"N/A");
			}
			else {
				teledef4--;
				$(this).next().html(defs[2]+" "+teledef4);
			}
		}
		if(thistitle == 'def5reached'){
			if(teledef5 <= 0) {
				teledef5 = -1;
				$(this).next().html(defs[3]+" "+"N/A");
			}
			else {
				teledef5--;
				$(this).next().html(defs[3]+" "+teledef5);
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
		$(this).prev().html("LowBar "+teledef1);
		}
		if(thistitle == 'def2reached'){
			if(teledef2 >= 10) {
				teledef2 = 10;
			}
			else {
				teledef2++;
			}
		$(this).prev().html(defs[0]+" "+teledef2);
		}
		if(thistitle == 'def3reached'){
			if(teledef3 >= 10) {
				teledef3 = 10;
			}
			else {
				teledef3++;
			}
		$(this).prev().html(defs[1]+" "+teledef3);
		}
		if(thistitle == 'def4reached'){
		 	if(teledef4 >= 10) {
				teledef4 = 10;
			}
			else {
				teledef4++;
			}
		$(this).prev().html(defs[2]+" "+teledef4);
		}
		if(thistitle == 'def5reached'){
			if(teledef5 >= 10) {
				teledef5 = 10;
			}
			else {
				teledef5++;
			}
		$(this).prev().html(defs[3]+" "+teledef5);
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
			if(thistitle == 'def1reached' && autondef1 == 1){ autondef1 = 0; $(this).removeClass('chosen');}
			else if(thistitle == 'def1reached' && (autondef1 == 0 || autondef1 == '')){autondef1 = 1; $(this).addClass('chosen');}
			if(thistitle == 'def2reached' && autondef2 == 1){ autondef2 = 0; $(this).removeClass('chosen');}
			else if(thistitle == 'def2reached' && (autondef2 == 0 || autondef2 == '')){ autondef2 = 1; $(this).addClass('chosen');}
			if(thistitle == 'def3reached' && autondef3 == 1){ autondef3 = 0; $(this).removeClass('chosen');}
			else if(thistitle == 'def3reached' && (autondef3 == 0 || autondef3 == '')){ autondef3 = 1; $(this).addClass('chosen');}
			if(thistitle == 'def4reached' && autondef4 == 1){ autondef4 = 0; $(this).removeClass('chosen');}
			else if(thistitle == 'def4reached' && (autondef4 == 0 || autondef4 == '')){ autondef4 = 1; $(this).addClass('chosen');}
			if(thistitle == 'def5reached' && autondef5 == 1){ autondef5 = 0; $(this).removeClass('chosen');}
			else if(thistitle == 'def5reached' && (autondef5 == 0 || autondef5 == '')){ autondef5 = 1; $(this).addClass('chosen');}
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
			else if (endreachedck == -1){
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
	function checkendinter() {
			var thistitle = $(this).attr('title');
			if(endInterck == 1) {
				$(this).parent().find('.chosen').removeClass('chosen');
				if (thistitle == 'Inter') {
					answerobj['endInter'] = 1;
				}
				else if(thistitle == 'NoInter') {
					answerobj['endInter'] = 0;
				}
				$(this).addClass('chosen');
			}
			else if(endInterck == -1) {
				if (thistitle == 'Inter') {
					answerobj['endInter'] = 1;
				}
				else if(thistitle == 'NoInter') {
					answerobj['endInter'] = 0;
				}
				endInterck = 1;
				$(this).addClass('chosen');
			}
	}
	function checkendscale() {
			var thistitle = $(this).attr('title');
			if(endscaledck == 1) {
				$(this).parent().find('.chosen').removeClass('chosen');
				if (thistitle == 'BaseScaled') {
					answerobj['EndScaled'] = 1;
					EndFScaled = 0;
				}
				else if(thistitle == 'BaseNotScaled') {
					answerobj['EndScaled'] = 0;
					EndFScaled = 0;
				}
				else if(thistitle == 'BaseScaleFailed')  {
					answerobj['EndFScaled'] = 1;
					EndFScaled = 0;
				}
				// else if(thistitle == 'BaseScaleNA') {
				// 	answerobj['EndScaled'] = 3;
				// }
				$(this).addClass('chosen');
			}
			else if(endscaledck == -1) {
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
			if(enddefck == -1){
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
	function minusrcard() {
		endrcard--;
		if(endrcard < -1) endrcard = -1;
		if (endrcard == -1) $(this).next().text("(N/A)");
		else $(this).next().text("("+endrcard+")");
	}
	function plusrcard() {
		if(endrcard >= 30) {
				endrcard = 30;
			}
			else {
				endrcard++;
			}
			$(this).prev().text("("+endrcard+")");
	}
	function minusycard() {
		endycard--;
		if(endycard < -1) endycard = -1;
		if (endycard == -1) $(this).next().text("(N/A)");
		else $(this).next().text("("+endycard+")");
	}
	function plusycard() {
		if(endycard >= 30) {
				endycard = 30;
			}
			else {
				endycard++;
			}
			$(this).prev().text("("+endycard+")");
	}
	function minustech() {
		endtech--;
		if(endtech < -1) endtech = -1;
		if (endtech == -1) $(this).next().text("(N/A)");
		else $(this).next().text("("+endtech+")");
	}
	function plustech() {
		if(endtech >= 30) {
				endtech = 30;
			}
			else {
				endtech++;
			}
			$(this).prev().text("("+endtech+")");
	}
	function minusfouls() {
		endfouls--;
		if(endfouls < -1) endfouls = -1;
		if (endfouls == -1) $(this).next().text("(N/A)");
		else $(this).next().text("("+endfouls+")");
	}
	function plusfouls() {
		if(endfouls >= 30) {
				endfouls = 30;
			}
			else {
				endfouls++;
			}
			$(this).prev().text("("+endfouls+")");
	}
	function minushskill() {
		endhskills--;
		if(endhskills < -1) endhskills = -1;
		if (endhskills == -1) $(this).next().text("(N/A) Human");
		else $(this).next().text("("+endhskills+") Human");
	}
	function plushskill() {
		if(endhskills >= 10) {
				endhskills = 10;
			}
			else {
				endhskills++;
			}
			$(this).prev().text("("+endhskills+") Human");
	}
	function minustower() {
		endtowers--;
		if(endtowers < -1) endtowers = -1;
		if (endtowers == -1) $(this).next().text("(N/A)");
		else $(this).next().text("("+endtowers+")");
	}
	function plustower() {
		if(endtowers >= 20) {
				endtowers = 20;
			}
			else {
				endtowers++;
			}
			$(this).prev().text("("+endtowers+")");
	}
	function minustowero() {
		endtowerso--;
		if(endtowerso < -1) endtowerso = -1;
		if (endtowerso == -1) $(this).next().text("(N/A)");
		else $(this).next().text("("+endtowerso+")");
	}
	function plustowero() {
		if(endtowerso >= 20) {
				endtowerso = 20;
			}
			else {
				endtowerso++;
			}
			$(this).prev().text("("+endtowerso+")");
	}
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
		if (skill == -1) $(this).next().text("(N/A) Driver");
		else $(this).next().text("("+skill+") Driver");
	}
	function plusskill() {
		if(skill >= 10) {
				skill = 10;
			}
			else {
				skill++;
			}
			$(this).prev().text("("+skill+") Driver");
	}

	function logout() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
     window.location.href = "../index.html"
    });
  	}
  	function reset() {
  		answerobj = {};
		autondefsbreached = {'def1reached': '' ,'def2reached': '' ,'def3reached': '' ,'def4reached': '' ,'def5reached': ''};
		defs = [];
		telebreached = {'def1reached': '' ,'def2reached': '' ,'def3reached': '' ,'def4reached': '' ,'def5reached': ''};
		autonhigh = -1;
		autonlow = -1;
		autonmissedh = -1;
		autonmissedl = -1;
		telemissedh = -1;
		telemissedl = -1;
		telehigh = -1;
		telelow = -1;
		telemissed = -1;
		teledef1 = -1;
		teledef2 = -1;
		teledef3 = -1;
		teledef4 = -1;
		teledef5 = -1;
		autondef1 = 0;
		autondef2 = 0;
		autondef3 = 0;
		autondef4 = 0;
		autondef5 = 0;
		name;
		checktraps;
		side = '';
		// timernum;
		// ct;
		// time;
		// ths;
		speed = -1;
		manuver = -1;
		defskill = -1;
		skill = -1;
		endreachedck = -1; 
		endscaledck = -1;
		endInterck = -1;
		enddefck = -1;
		endtowers = -1;
		endtowerso = -1;
		endhskills = -1;
		endfouls = -1;
		endtech = -1;
		endycard = -1;
		endrcard = -1;
		EndFScaled = -1;
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
	function goback() {
		$('.active').closest('.newscreen').slideUp(200);
		$('.active').closest('.newscreen').prev().show(200);
	}

