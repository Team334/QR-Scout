function generate() {
		answerobj['fieldNotes'] = $('#notes').val();
		var zero = String(answerobj.AutonMove);
		var one = String(answerobj.EndReached);
		var two = String(answerobj.EndScaled);
		var three = String(answerobj.autonHighGoals);
		var four = String(answerobj.autonLowGoals);
		var five = String(answerobj.autonMissedGoals);
		var six = findautondefs();
		var seven = finddefs();
		var eight = answerobj.fieldNotes.replace(/,/g , ".");
		var nine = String(answerobj.matchNum);
		var ten = String(answerobj.teleHighGoals);
		var eleven = String(answerobj.teleLowGoals);
		var twelve = String(answerobj.teleMissedGoals);
		var thirteen = findtelebreached();
		var fourteen = checkside();
		var fifteen = String(answerobj.teamNum);
		var fin = String(zero+','+one+','+two+','+three+','+four+','+five+','+six+','+seven+','+eight+','+nine+','+ten+','+eleven+','+twelve+','+thirteen+','+fourteen+','+fifteen+','+name);
		new QRCode(document.getElementById("qrcode"), fin);
		console.log(answerobj);
}
	function findautondefs() {
		var obj = answerobj.autondefsbreached;
		if (obj[4]) {
			var answer = obj[0]+"_"+obj[1]+"_"+obj[2]+"_"+obj[3]+"_"+obj[4];
			return answer;
		}
		else if (obj[3]) {
			var answer = obj[0]+"_"+obj[1]+"_"+obj[2]+"_"+obj[3];
			return answer;
		}
		else if (obj[2]) {
			var answer = obj[0]+"_"+obj[1]+"_"+obj[2];
			return answer;
		}
		else if (obj[1]) {
			var answer = obj[0]+"_"+obj[1];
			return answer;
		}
		else if (obj[0]) {
			var answer = obj[0];
			return answer;
		}
		else{
			var answer = 0;
			return answer;
		}
	}
	function finddefs() {
		var string = "L";
		var obj = answerobj.defs;
		$.each( obj, function(key, value) {
			 if(value == 'Portcullis') string = string+'_P';
			 if(value == 'ChevalDF') string = string+'_C';
			 if(value == 'Moat') string = string+'_M';
			 if(value == 'Ramparts') string = string+'_R';
			 if(value == 'Drawbridge') string = string+'_D';
			 if(value == 'SallyPort') string = string+'_S';
			 if(value == 'RockWall') string = string+'_RW';
			 if(value == 'RoughTerrain') string = string+'_RT';
		});
		return string;
	}
	function findtelebreached() {
		var string;
		var def = 0;
		var obj = answerobj.telebreached;
		$.each( obj, function(key, value){
			if(def == 4){
				if(value == '') string = string + ' ';
				else string = string + value;	
			}
			else if(def == 0){
				if(value == '') string = ' _';
				else string = value +'_';	
			}
			else{
				if(value == '') string = string + " _";
				else string = string + value +'_';	
			}
			def++;
		});
		return string;
	}
	function checkside() {
		var string;
		if(answerobj.sideRed == 1) string = 'R';
		if(answerobj.sideBlue == 1) string = 'B';
		return string;
	}
