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
		var i =  setInterval(function() {
			console.log(timernum);
			var secremain = (timernum == 1 ) ? " Second remaining" : " Seconds remaining";
			$(".brand-logo").html(timernum + secremain);
			timernum--;
			if (timernum < 0) {
				clearInterval(i);
			}
		},1000);
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
	$(".startauton").click({timernum: 15}, changetimer);
	$(".Gen").click(generate);
	$("#nameNo").click(function(){window.location.href = 'logout.php';})

});
//How to set item vars to collect
	//