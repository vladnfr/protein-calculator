$(document).ready(function() {
	$("#breakfast-header").click(function() {
		$("#breakfast").slideToggle(500);
	});
	$("#main-meal-header").click(function() {
		$("#main-meal").slideToggle(500);
	});
	$("#snacks-header").click(function() {
		$("#snacks").slideToggle(500);
	});

	$("#calculator-header").click(function() {
		$("#calculator").slideToggle(500);
	});

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		document.getElementById('showcase').style =  "background-color: black;";
	} 

	var result = 0;
	$("#result").text("Your protein intake is " + result + " grams.");
	$("#result").click(function() {
		updateResult();
	});

	var proteinArray = [];
	function computeProteinArray() {
		proteinArray[0] = 0.063 * $("#cereal-with-milk").val();
		proteinArray[1] = 0.12 *  $("#smoked-cheese").val();
		proteinArray[2] = 0.11 *  $("#pate").val();
		proteinArray[3] = 0.24 *  $("#salami").val();
		proteinArray[4] = 0.17 *  $("#ham").val();
		proteinArray[5] = 0.13 *  $("#eggs").val();
		proteinArray[6] = 0.047 * $("#beans").val();
		proteinArray[7] = 0.28 *  $("#turkey-breast").val();
		proteinArray[8] = 0.23 *  $("#chicken-breast").val();
		proteinArray[9] = 0.25 *  $("#sirloin-beef").val();
		proteinArray[10] = 0.24 * $("#pork-chops").val();
		proteinArray[11] = 0.23 * $("#halibut").val();
		proteinArray[12] = 0.2 *  $("#salmon").val();
		proteinArray[13] = 0.28 * $("#canned-tuna").val();
		proteinArray[14] = 0.01 * $("#carrots").val();
		proteinArray[15] = 0.01 * $("#bananas").val();
		proteinArray[16] = 0.08 * $("#houmous").val();
		proteinArray[17] = 0.1 *  $("#cottage-cheese").val();
		proteinArray[18] = 0.1 *  $("#greek-yogurt").val();
		proteinArray[19] = 0.12 * $("#skyr").val();
	}

	function updateResult() {
		computeProteinArray();
		result = Math.ceil(proteinArray.reduce(add, 0));
		updateResultOutput();
	}
	function add(a, b) {
		return a + b;
	}

	function updateResultOutput() {
		$("#result").text("Your protein intake is " + result + " grams.");
	}
});

var i = 0;
var time = 4000;

var images = [];

images[0] = './img/food1.jpg';
images[1] = './img/food2.jpg';
images[2] = './img/food3.jpg';
images[3] = './img/food4.jpg';
images[4] = './img/food5.jpg';

function nextImg() {
	if (i == 1 || i == 3) {
		document.getElementById('showcase').style =  "background: url('" + images[i] + "') no-repeat 0px -600px;"
		document.getElementById('title').style =  "color: white; text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;"
	} else if (i == 2) {
		document.getElementById('showcase').style =  "background: url('" + images[i] + "') no-repeat 0px -400px;"
	} else {
		document.getElementById('title').style =  "color: black; text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;"
		document.getElementById('showcase').style =  "background: url('" + images[i] + "') no-repeat 0px -600px;"
	}
	if (i < images.length - 1) {
		i++;
	} else {
		i = 0;
	}

  setTimeout("nextImg()", time);
}

window.onload = nextImg();
