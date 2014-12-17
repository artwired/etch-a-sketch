$(document).ready(function() {
	var div = "";
	var containerSize = 600;
	var initialDivScale = containerSize / 16;
	for (var i = 1; i < 257; i++) {
	    div += "<div class='reg'></div>";
	    if (i%16 == 0) {
	    	div += "<div class='next_line'></div>";
	    }
	}
	$("body #container").append(div);
	$("#container div.reg").css({"width" : initialDivScale, "height" : initialDivScale});
	$("#container div").hover(function() {
		$(this).addClass("some_color");
	});

	$("#resetGrid").on("click", function() {

		$("#container div").remove();
		$("#initialText").remove();
		var specNum = prompt("How many squares per side to make the new grid?");
		if (specNum > 100) {
			prompt("Sorry, that will take way too long. Please pick a number between 1 and 100");
		};
		var promptDiv = "";
			var specNumDiv = specNum;
			var specNumTotal = specNum*specNum + 1;
			var dynamicDivScale = containerSize / specNumDiv;
			var oddNum = [7, 11, 17, 19, 26, 28, 33, 34, 35, 46, 47, 49, 51, 54, 55, 56, 57, 58, 62, 64, 65, 69, 76, 77, 78, 79, 83, 84, 85, 86, 87, 91, 94, 95, 99];
			for (var i = 0; i < specNumTotal; i++) {
				promptDiv += "<div class='reg'></div>";
				if (i%specNum == 0) {
					promptDiv += "<div class='next_line'></div>";
				}
			}
			$("body #container").append(promptDiv);
			$("#container div.reg").css({"width" : dynamicDivScale, "height" : dynamicDivScale});
			var randomColor = Math.floor(Math.random()*16777215).toString(16);
			var backgroundColor = "background-color";
			$("#colorcode").text("Pen Hex Color Value Is: #" + randomColor);
			$('#container').find('div').first().remove();
			$("#container div").hover(function() {
			$(this).css({backgroundColor: '#' + randomColor});
		});
	});
});