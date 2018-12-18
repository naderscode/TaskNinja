var main = function(){
	"use strict"

//refactor using jQuery forEach loop.
$(".tabs a span").toArray().forEach(function(element){
	//create a click handler for element
	$(element).on("click", function(){

		var $element = $(element);
		$(".tabs span").removeClass("active");
		$element.addClass("active");
		$("main .content").empty();
		

		if($element.parent().is(":nth-child(1)")){
			console.log("first tab clicked");

		} else if($element.parent().is(":nth-child(2)")){
			console.log("second tab clicked");

		} else if($element.parent().is(":nth-child(3)")){
			console.log("third tab clicked");

		} 

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


};

$(document).ready(main);
