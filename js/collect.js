$(document).ready(function() {
	//Init array that holds values of multchoice
	var answerobj = {};
	var autonbreached = []
	var defs = []
	var autonhigh;
	var autonlow;
	var autonmissed;
	function generate() {
		console.log(answerobj);
	}
	$(".Next").click(next);
	$(".checkable").click(select);
	$(".checkabledef").click(selectdef);
	$(".autonbreach").click(addtoautonbreached);
	$(".goaway").click(goaway);
	$(".waitfortele").click(waitfortele);
	$(".startauton").click({timernum: 15, ths: '#ContToAuton'}, changetimer);
	$(".addautonhigh").click(autonhigh++	);
	$(".addautonlow").click(autonlow++);
	$(".addautonmissed").click(autonmissed++);
	$(".Gen").click(generate);
	$("#nameNo").click(function(){window.location.href = 'Logout.php';})
	var checktraps = setInterval(function(){
	if (defs[3]) {
		clearInterval(checktraps);
		answerobj['defs'] = defs;
		contToAuton();
	}}, 100);

	function next() {
		$(this).closest('.topel').hide(400);
		$(this).closest('.topel').next().show(200);
	}
	function contToAuton() {
		$('.lastpregame').closest('.topel').hide(400);
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
		answerobj['autondefsbreached'] = autonbreached;
		console.log(answerobj);
	}
	function changetimer(event) {
		var timernum = event.data.timernum;
		var ths = event.data.ths;
		$(".brand-logo").html(timernum + " Seconds remaining");
		timernum = timernum - 1;
		var i =  setInterval(function() {
			var secremain = (timernum == 1 ) ? " Second remaining" : " Seconds remaining";
			$(".brand-logo").html(timernum + secremain);
			timernum--;
			if (timernum < 0) {
				clearInterval(i);
				$(ths).hide();
				contToTele();
			}
		},1000);
	}
	function waitfortele () {
		$("#ContToAuton").html('<h1 class="center">Please wait for Autonomous Mode to end</h1>');
	}
	function goaway() {
		$(this).hide(100);
	}
	function select() {
			var thistitle = $(this).attr('title');
			answerobj[thistitle] = 1;
			console.log(answerobj);
	}
	function addtoautonbreached() {
			var thistitle = $(this).attr('title');
			autonbreached.push(thistitle);
			console.log(autonbreached);
	}
	function selectdef() {
			var thistitle = $(this).attr('title');
			defs.push(thistitle);
			console.log(defs);
	}
});