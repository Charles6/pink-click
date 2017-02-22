const mDown = (idName) => {
	document.getElementById(idName).style.backgroundColor = "darkmagenta";
}

const mUp = (idName) => {
	document.getElementById(idName).style.backgroundColor = "black";
}

const clickLog = [0];

const clickObj = {
	clickValue:1,
	autoState:false,
	multiState:false,
	autoClickValue:1,
	autoClickSpeed:1000
}

const addPoints = (arr,point) => {
	arr[arr.length] = arr[arr.length-1] + point;
	console.log(arr);
	shopCheck(arr[arr.length-1]);
	document.getElementById("display").innerHTML = "score: " + arr[arr.length-1];
	document.getElementById("ppc").innerHTML = clickObj.clickValue;
	if (clickObj.autoState == false) {
		document.getElementById("cps").innerHTML = "N/A";
	} else {
		document.getElementById("cps").innerHTML = clickObj.autoClickValue/(clickObj.autoClickSpeed/1000);
	};

}

const shopCheck = (score) => {
	if (score >= 20) {
		if (clickObj.autoState == false) {
			document.getElementById("auto").innerHTML =
				"<div id='autoBuy' onclick='autoClick(clickLog)' style='color:magenta'>Buy for 10 pts</div>";
		}
	}
	if (score >= 10){
		if (clickObj.multiState == false){
			document.getElementById("multi").innerHTML =
				"<div id='multiBuy' onclick='multiClick(clickLog)' style='color:magenta'>Buy for 10 pts</div>";
		}
	}
}

const autoClick = (arr) => {
	clickObj.autoState = true;
	arr[arr.length] = arr[arr.length-1] - 10;
	document.getElementById("display").innerHTML = "score: " + arr[arr.length-1];
	setInterval(function() {
		addPoints(clickLog,clickObj.autoClickValue);
	},clickObj.autoClickSpeed);
	document.getElementById("auto").innerHTML = "Sold Out";
}

const multiClick = (arr) => {
	clickObj.multiState = true;
	arr[arr.length] = arr[arr.length-1] - 10;
	document.getElementById("display").innerHTML = "score: " + arr[arr.length-1];
	clickObj.clickValue = 5;
	document.getElementById("multi").innerHTML = "Sold Out";
	document.getElementById("cps").innerHTML = clickObj.autoClickValue/(clickObj.autoClickSpeed/1000);
}
