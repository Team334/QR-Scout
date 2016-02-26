

$(document).ready(function() {
	//Init loading slideUp
	$.mobile.loading().slideUp();
	//Init array that holds values of multchoice
	var answerobj = {};
	var autonbreached = []
	var defs = []
	var telebreached = {}
	var autonhigh = 0;
	var autonlow = 0;
	var autonmissed = 0;
	var telehigh = 0;
	var telelow = 0;
	var telemissed = 0;
	function generate() {
		console.log(answerobj);
	}
	$(".Next").click(next);
	$(".checkable").click(select);
	$(".checkabledef").click(selectdef);
	$(".autonbreach").click(addtoautonbreached);
	$(".goaway").click(goaway);
	$(".waitfortele").click(waitfortele);
	$(".startauton").click({timernum: 15, ths: '#ContToAuton', tme: 0}, changetimer);
	$(".addautonhigh").click(addautonhigh);
	$(".addautonlow").click(addautonlow);
	$(".addautonmissed").click(addautonmissed);
	$(".addtelehigh").click(addtelehigh);
	$(".addtelelow").click(addtelelow);
	$(".addtelemissed").click(addtelemissed);
	$(".Gen").click(generate);
	$("#nameNo").click(function(){window.location.href = 'Logout.html';})
	var checktraps = setInterval(function(){
	if (defs[3]) {
		clearInterval(checktraps);
		answerobj['defs'] = defs;
		contToAuton();
	}}, 100);

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
			if ($(this).attr('title') != 'def1reached') {
				$(this).html(defs[arrnum]);
				arrnum++;
			}
		})
	}
	function contToTele() {
		changetimer({data: {timernum: 135, ths: '#ContToTele', time: 1}});
		answerobj['autondefsbreached'] = autonbreached;
		answerobj['autonHighGoals'] = autonhigh;
		answerobj['autonLowGoals'] = autonlow;
		answerobj['autonMissedGoals'] = autonmissed;
		console.log(answerobj);
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
			else if (timernum < 0 && time != 0) {
				clearInterval(i);
				$(ths).slideUp();
				$(".brand-logo").html("LAR");
				contToEnd();
			}
			else if (timernum <= 5){
				$('.nav-wrapper').addClass('flash');
			}
		},1000);
	}
	//DefTimers
	var count = 0;
	var countms = 0;
	var time = 0;

	$('.telestbreach').on('vmousedown',function(){
		var ths = $(this);
		var def = $(this).text();
	    deftimer = setInterval(function(){
	    	countms++
	    	if (countms == 10){
	    		countms = 0;
	    		count++;
	    	}
	    	time = count+"."+countms;
	        ths.text(def+" "+time);
	    }, 100);

	    return false;
	});

	$('.telestbreach').on('vmouseup',function(){
		var ths = $(this).attr('title');
	    clearInterval(deftimer);
	    telebreached[ths] = time;
	    console.log(telebreached);
	    count = 0;
	    countms = 0;
	    time = 0;
	    return false;
	});

	//End DefTimers
	function waitfortele () {
		$("#ContToAuton").html('<h1 class="center">Please wait for this mode to end</h1>');
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
			console.log(answerobj);
	}
	function addtoautonbreached() {
			var thistitle = $(this).attr('title');
			autonbreached.push(thistitle);
			console.log(autonbreached);
	}
	function starttelebreached() {
			$(this).removeClass('telestbreach');
			startdeftimer($(this));
			// var thistitle = $(this).attr('title');
			// autonbreached.push(thistitle);
			// console.log(autonbreached);
	}
	function selectdef() {
			var thistitle = $(this).attr('title');
			defs.push(thistitle);
			console.log(defs);
	}
});