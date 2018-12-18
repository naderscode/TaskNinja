var main = function(){
	"use strict"


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


	/*

	$(".tabs a:nth-child(1)").on("click", function(){
		$(".tabs span").removeClass("active");
		$(".tabs a:nth-child(1) span").addClass("active");
		$("main .content").empty();
		return false;

	});

	$(".tabs a:nth-child(2)").on("click", function(){
		$(".tabs span").removeClass("active");
		$(".tabs a:nth-child(2) span").addClass("active");
		$("main .content").empty();
		return false;

	});

	$(".tabs a:nth-child(3)").on("click", function(){
		$(".tabs span").removeClass("active");
		$(".tabs a:nth-child(3) span").addClass("active");
		$("main .content").empty();
		return false;

	});
*/

};

$(document).ready(main);
