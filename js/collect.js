	function next() {
		$(this).closest('.topel').hide(400);
		$(this).closest('.topel').next().show(200);
	}
	function contToAuton() {
		$(this).closest('.topel').hide(400);
		$('.topAuton').show(200);
	}
	function changetimer(event) {
		var timernum = event.data.timernum;
		$(".brand-logo").html(timernum + " Seconds remaining");
		timernum = 14;
		var i =  setInterval(function() {
			console.log(timernum);
			var secremain = (timernum == 1 ) ? " Second remaining" : " Seconds remaining";
			$(".brand-logo").html(timernum + secremain);
			timernum--;
			if (timernum < 0) {
				clearInterval(i);
				$("#ContToAuton").hide();
			}
		},1000);
	}
	function waitfortele () {
		$("#ContToAuton").html('<h1 class="center">Please wait for Autonomous Mode to end</h1>');
	}
	function goaway() {
		$(this).hide(400);
	}
	// function select() {
		// 	var thistitle = $(this).attr('title');
		// 	answerarr.push(thistitle);
		// 	var x;
		// 	$(this).closest('.topel').value = x;
		// 	console.log(x);
	// }
$(document).ready(function() {
	//Init array that holds values of multchoice
	var answerarr = [];
	function generate() {
		console.log(answerarr);
	}
	$(".Next").click(next);
	$(".goaway").click(goaway);
	$(".contToAuton").click(contToAuton);
	$(".waitfortele").click(waitfortele);
	$(".startauton").click({timernum: 15}, changetimer);
	$(".Gen").click(generate);
	$("#nameNo").click(function(){window.location.href = 'Logout.php';})

});
//How to set item vars to collect
	//