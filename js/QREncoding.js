//FOR QR CODE GENERATION
function generatepit() {
	answerobj['fieldNotes'] = $('#notes').val();
	$('#qrcode').html("");
	$('#qrcode').qrcode({
    "text": String(answerobj.teamName)+','+String(answerobj.fieldNotes),
	});
}

function generate() {
	//Pre-game vars
	$('#pre-game').children().find(".Writenval").each(function(){
			if ($(this).attr('title') == "teamNum"){
			answerobj['teamNum'] = $(this).val();
			}
			else {
				answerobj['matchNum'] = $(this).val();
			}
	});
	//End Pre-game vars
	//Auton vars
	answerobj['autondefsbreached'] = autonbreached;
	answerobj['autonHighGoals'] = autonhigh;
	answerobj['autonLowGoals'] = autonlow;
	//End Auton vars
	//Tele vars
	telebreached['def1reached'] = teledef1;
	telebreached['def2reached'] = teledef2;
	telebreached['def3reached'] = teledef3;
	telebreached['def4reached'] = teledef4;
	telebreached['def5reached'] = teledef5;
	answerobj['telebreached'] = telebreached;
	answerobj['teleHighGoals'] = telehigh;
	answerobj['teleLowGoals'] = telelow;
	//End Tele vars
	answerobj['fieldNotes'] = $('#notes').val();
	var MID = String(answerobj.matchNum); //Match ID
	var ALLI = checkside(); //Side (R/B)
	var SNAME = name; //Scouts Name
	var TID = String(answerobj.teamNum); //Team ID
	var ASB = String(spyboxyes); //If has spybox player
	var AA = '1'; //Auton Aproach
	var AI = '0'; //Auton Interfered 
	var AB = findautondefs(); //Auton Defenses Breached
	var AHG = String(answerobj.autonHighGoals);
	var AHGM = String(autonmissedh); //Auton High goals missed
	var ALG = String(answerobj.autonLowGoals);
	var ALGM = String(autonmissedl); //Auton Low goals missed
	var TB = findtelebreached(); //Tele Breached scores
	var THG = String(answerobj.teleHighGoals); //Tele High Goals
	var THGM = String(telemissedh); //Tele high goals missed
	var TLG = String(answerobj.teleLowGoals);
	var TLGM = String(telemissedl); //Tele low missed goals
	var EDC = String(answerobj.EndDef); //End defend courtyard 
	var ETS = String(endtowers);//End friendly tower strength
	var ES = String(answerobj.EndScaled); //End scaling bool
	var ESF = String(EndFScaled); //End failed scaling bool
	var ECF = String(answerobj.EndReached); //End reached fail bool
	var ESP = String(speed); //End Speed
	var EM = String(manuver); //End Manuver
	var ED = String(defskill); //End defense
	var ESK = String(skill); //End Driver Skill
	var EHP = String(endhskills);//HUMANPLAYERSKILL
	var EF = String(endfouls);//ENDFOULS
	var ETF = String(endtech); //ENDTECHFOULS
	var EYC = String(endycard);//ENDYELOWCARDS
	var ERC = String(endrcard);//ENDREDCARDS
	var EN = answerobj.fieldNotes.replace(/,/g , "."); // END NOTES
	var fin = String(MID+","+'"'+ALLI+'"'+","+'"'+SNAME+'"'+","+TID+","+ASB+","+AA+","+AI+","+AB+","+AHG+","+AHGM+","+ALG+","+ALGM+","+TB+","+THG+","+THGM+","+EDC+","+ETS+","+ES+","+ESF+","+ECF+","+ESP+","+EM+","+ED+","+ESK+","+EHP+","+EF+","+ETF+","+EYC+","+ERC+","+'"'+EN+'"');
	fin = fin.replace(/-1/g , "")
	console.log(fin);
	$('#qrcode').html("");
	$('#qrcode').qrcode({
    "text": String(fin),
	});
}
function findautondefs() {
	var obj = answerobj.autondefsbreached;
	var defs = answerobj.defs;
	var port = 0;
	var draw = 0;
	var cheval = 0;
	var rock = 0;
	var moat = 0;
	var ramp = 0;
	var sally = 0;
	var rough = 0;
	var low = 0;
	$.each(obj, function(key, value){
		if(key == 'def2reached'){
			if(defs[0] == 'Portcullis') port = value; 
			if(defs[0] == 'ChevalDF') cheval = value;
			if(defs[0] == 'Moat') moat = value; 
			if(defs[0] == 'Ramparts') ramp = value; 
			if(defs[0] == 'Drawbridge') draw = value; 
			if(defs[0] == 'SallyPort') sally = value;
			if(defs[0] == 'RockWall') rock = value; 
			if(defs[0] == 'RoughTerrain') rough = value; 
		}
		if(key == 'def3reached'){
			if(defs[1] == 'Portcullis') port = value; 
			if(defs[1] == 'ChevalDF') cheval = value;
			if(defs[1] == 'Moat') moat = value; 
			if(defs[1] == 'Ramparts') ramp = value; 
			if(defs[1] == 'Drawbridge') draw = value; 
			if(defs[1] == 'SallyPort') sally = value;
			if(defs[1] == 'RockWall') rock = value; 
			if(defs[1] == 'RoughTerrain') rough = value; 
		}
		if(key == 'def4reached'){
			if(defs[2] == 'Portcullis') port = value; 
			if(defs[2] == 'ChevalDF') cheval = value;
			if(defs[2] == 'Moat') moat = value; 
			if(defs[2] == 'Ramparts') ramp = value; 
			if(defs[2] == 'Drawbridge') draw = value; 
			if(defs[2] == 'SallyPort') sally = value;
			if(defs[2] == 'RockWall') rock = value; 
			if(defs[2] == 'RoughTerrain') rough = value; 
		}
		if(key == 'def5reached'){
			if(defs[3] == 'Portcullis') port = value; 
			if(defs[3] == 'ChevalDF') cheval = value;
			if(defs[3] == 'Moat') moat = value; 
			if(defs[3] == 'Ramparts') ramp = value; 
			if(defs[3] == 'Drawbridge') draw = value; 
			if(defs[3] == 'SallyPort') sally = value;
			if(defs[3] == 'RockWall') rock = value; 
			if(defs[3] == 'RoughTerrain') rough = value; 
		}
		if(key == 'def1reached'){
			low = value; 
		}

	});
	return String(port+","+draw+","+cheval+","+rock+","+moat+","+ramp+","+sally+","+rough+","+low);
}
function finddefs() {
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
	var port = "";
	var draw = "";
	var cheval = "";
	var rock = "";
	var moat = "";
	var ramp = "";
	var sally = "";
	var rough = "";
	var low = "";
	var obj = answerobj.telebreached;
	var defs = answerobj.defs;
	$.each(obj, function(key, value){
		if(key == 'def2reached'){
			if(defs[0] == 'Portcullis') port = value; 
			if(defs[0] == 'ChevalDF') cheval = value;
			if(defs[0] == 'Moat') moat = value; 
			if(defs[0] == 'Ramparts') ramp = value; 
			if(defs[0] == 'Drawbridge') draw = value; 
			if(defs[0] == 'SallyPort') sally = value;
			if(defs[0] == 'RockWall') rock = value; 
			if(defs[0] == 'RoughTerrain') rough = value; 
		}
		if(key == 'def3reached'){
			if(defs[1] == 'Portcullis') port = value; 
			if(defs[1] == 'ChevalDF') cheval = value;
			if(defs[1] == 'Moat') moat = value; 
			if(defs[1] == 'Ramparts') ramp = value; 
			if(defs[1] == 'Drawbridge') draw = value; 
			if(defs[1] == 'SallyPort') sally = value;
			if(defs[1] == 'RockWall') rock = value; 
			if(defs[1] == 'RoughTerrain') rough = value; 
		}
		if(key == 'def4reached'){
			if(defs[2] == 'Portcullis') port = value; 
			if(defs[2] == 'ChevalDF') cheval = value;
			if(defs[2] == 'Moat') moat = value; 
			if(defs[2] == 'Ramparts') ramp = value; 
			if(defs[2] == 'Drawbridge') draw = value; 
			if(defs[2] == 'SallyPort') sally = value;
			if(defs[2] == 'RockWall') rock = value; 
			if(defs[2] == 'RoughTerrain') rough = value; 
		}
		if(key == 'def5reached'){
			if(defs[3] == 'Portcullis') port = value; 
			if(defs[3] == 'ChevalDF') cheval = value;
			if(defs[3] == 'Moat') moat = value; 
			if(defs[3] == 'Ramparts') ramp = value; 
			if(defs[3] == 'Drawbridge') draw = value; 
			if(defs[3] == 'SallyPort') sally = value;
			if(defs[3] == 'RockWall') rock = value; 
			if(defs[3] == 'RoughTerrain') rough = value; 
		}
		if(key == 'def1reached'){
			low = value; 
		}

	});
	return String(port+","+draw+","+cheval+","+rock+","+moat+","+ramp+","+sally+","+rough+","+low);
}
function checkside() {
	var string;
	if(answerobj.side == "sideRed") string = 'R';
	if(answerobj.side == "sideBlue") string = 'B';
	return string;
}
// END QR CODE GENERATION
// QR CODE DATA INTO JSON OBJECT
function QrToJson(incomming) {
	alert(incomming);

}
// END QR DATA TO JSON