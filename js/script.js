"use strict";

window.onload = function(e) {
	var ffscreen = document.getElementById("mainScreen"),
		ffinner = document.getElementById("innerScreen"),
		canGenerate = true;
	
	ffscreen.style.width = window.innerWidth + "px";
	ffscreen.style.height = window.innerHeight + "px";
	
	innerScreen.style.width = window.innerWidth - 30 + "px";
	innerScreen.style.height = window.innerHeight - 30 + "px";
	
	generateArt();
	
	window.addEventListener("resize", function(e) {	
		ffscreen.style.width = window.innerWidth + "px";
		ffscreen.style.height = window.innerHeight + "px";
		
		innerScreen.style.width = window.innerWidth - 30 + "px";
		innerScreen.style.height = window.innerHeight - 30 + "px";
		
		generateArt();
	});
	
	window.addEventListener("click", function(e) {
		if (canGenerate) resetArt();
	});
	
	function generateArt() {
		var amountOfBlocks = (window.innerWidth * window.innerHeight) / 10;
		var rgbInset = [[Math.floor(Math.random() * 255)],[Math.floor(Math.random() * 255)],[Math.floor(Math.random() * 255)]];
		console.log(rgbInset);
		
		for (var x = 0; x < amountOfBlocks; x += 10) {
			
			var outcome = Math.floor(Math.random() * 2);
			
			switch(outcome) {
				case 0:
					rgbInset[0] <= 0 ? rgbInset[0] = 1 : rgbInset[0]--;
					rgbInset[1] <= 0 ? rgbInset[1] = 1 : rgbInset[1]--;
					rgbInset[2] <= 0 ? rgbInset[2] = 1 : rgbInset[2]--;
					break;
				case 1:
					rgbInset[0] >= 255 ? rgbInset[0] = 254 : rgbInset[0]++;
					rgbInset[1] >= 255 ? rgbInset[1] = 254 : rgbInset[1]++;
					rgbInset[2] >= 255 ? rgbInset[2] = 254 : rgbInset[2]++;
					break;
			}
			
			var oneBlock = document.createElement("div");
			
			oneBlock.style.backgroundColor = "rgb(" + rgbInset[0] + "," + rgbInset[1] + "," + rgbInset[2] + ")";
			oneBlock.style.width = "10px";
			oneBlock.style.height = "10px";
			
			ffinner.appendChild(oneBlock);
		}
	}
	
	function resetArt() {
		var innerScreen = document.getElementById("innerScreen");
		canGenerate = false;
		
		innerScreen.style.transition = "0.7s";
		innerScreen.style.opacity = 0;
		
		setTimeout(function(e) {
			innerScreen.innerHTML = "";
			generateArt();
			setTimeout(function(e) {
				innerScreen.style.transition = "0.7s";
				innerScreen.style.opacity = 1;
				canGenerate = true;
			}, 300);
		}, 0);
	}
}