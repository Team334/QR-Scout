	function next() {
		$(this).closest('.topel').hide(400);
		$(this).closest('.topel').next().show(200);
	}
	function changetimer(event) {
		console.log(event.data.timernum);
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
	$(".startauton").click({timernum: 15}, changetimer);
	$(".Gen").click(generate);
	$("#nameNo").click(function(){window.location.href = 'logout.php';})

});
//How to set item vars to collect
	//