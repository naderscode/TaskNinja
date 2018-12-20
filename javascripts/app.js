var main = function(){
	"use strict";

var toDos = [ "Buy groceries",
	"Car wash",
	"Haircut",
	"Order office supplies",
	"meeting with client",
	"New app design" ];

//using jQuery forEach loop.
$(".tabs a span").toArray().forEach(function(element){
	
	//create a click handler for element
	var $element = $(element);
	$element.on("click", function(){

		
		var $content, $input, $button;

		$(".tabs span").removeClass("active");
		$element.addClass("active");
		$("main .content").empty();
		

		if($element.parent().is(":nth-child(1)")){
			//newest todos first
			$content = $("<ul>");
			for (var i = toDos.length-1; i >= 0; i--){
				$content.append($("<li>").text(toDos[i]));
				
			}

		} else if($element.parent().is(":nth-child(2)")){
				//oldest todos first
				$content = $("<ul>");
				toDos.forEach(function(todo){
					$content.append($("<li>").text(todo));
					
				});	

		} else if($element.parent().is(":nth-child(3)")){
				// input a new todo
				$input = $("<input>");
				$button = $("<button>").text("+");


				$button.on("click", function(){
					if ($input.val() !== 0){
						toDos.push($input.val());
						$input.val("");
					}

				});

				$content = $("<div>");
				$content.append($input).append($button);

		} 

		$("main .content").append($content);

		return false;

	});
});

/*
//Refactoring using a for loop
for (var i = 1 ; i <= 3; i++){

	var tabSelector = ".tabs a:nth-child(" + i + ") span";

	$(tabSelector).on("click", function(event){
		$(".tabs span").removeClass("active");
		$(event.target).addClass("active");
		$("main .content").empty();
		return false;

	});
}
*/
/*
//Refactoring using a function
function makeActive(i){

	var tabSelector = ".tabs a:nth-child(" + i + ") span";
		$(".tabs span").removeClass("active");
		$(tabSelector).addClass("active");
		$("main .content").empty();
		

};

$(".tabs a:nth-child(1)").on("click", function(){
		makeActive(1);
		return false;

});

$(".tabs a:nth-child(2)").on("click", function(){
		makeActive(2);
		return false;

});

$(".tabs a:nth-child(3)").on("click", function(){
		makeActive(3);
		return false;
});
	
*/
$(".tabs a:first-child span").trigger("click");

};

$(document).ready(main);
