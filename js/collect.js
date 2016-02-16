$(document).ready(function() {
	//Init array that holds values of multchoice
	var answerarr = [];
	var autonhigh;
	var autonlow;
	var autonmissed;
	function generate() {
		console.log(answerarr);
	}
	$(".Next").click(next);
	$(".checkable").click(select);
	$(".goaway").click(goaway);
	$(".waitfortele").click(waitfortele);
	$(".startauton").click({timernum: 15}, changetimer);
	$(".addautonhigh").click(autonhigh++);
	$(".addautonlow").click(autonlow++);
	$(".addautonmissed").click(autonmissed++);
	$(".Gen").click(generate);
	$("#nameNo").click(function(){window.location.href = 'Logout.php';})
	var checktraps = setInterval(function(){
	if (answerarr[4]) {
		contToAuton();
		clearInterval(checktraps);
	}}, 100);

	function next() {
		$(this).closest('.topel').hide(400);
		$(this).closest('.topel').next().show(200);
	}
	function contToAuton() {
		$('.lastpregame').closest('.topel').hide(400);
		$('.topAuton').show(200);
		$('#pre-game').children().find(".Writenval").each(function(){answerarr.push($(this).val())});
		//$('.defbreached > h5').find("[title='def2reached'").html(answerarr[]);
		var arrnum = 1;
		$('.defbreached > .options').children().each(function() {
			if ((arrnum < 5) && $(this).attr('title') != 'def1reached') {
				$(this).html(answerarr[arrnum]);
				arrnum++;
			}
		})
	}
	function changetimer(event) {
		var timernum = event.data.timernum;
		$(".brand-logo").html(timernum + " Seconds remaining");
		timernum = 14;
		var i =  setInterval(function() {
			var secremain = (timernum == 1 ) ? " Second remaining" : " Seconds remaining";
			$(".brand-logo").html(timernum + secremain);
			timernum--;
			if (timernum < 0) {
				clearInterval(i);
				$(this).closest('.tobeclosed').hide();
			}
		},1000);
	}
	function waitfortele () {
		$("#ContToAuton").html('<h1 class="center">Please wait for Autonomous Mode to end</h1>');
	}
	function goaway() {
		$(this).hide(400);
	}
	function select() {
			var thistitle = $(this).attr('title');
			answerarr.push(thistitle);
			console.log(answerarr);
	}

});