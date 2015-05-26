$(document).on("ready", start);

function start(e){
	var $btn = $("#loadButton");

	$btn.click("#loadButton", function(){
		var clicked = this; //Set clicked as this to prevent undefined.
		clicked.disabled = true; //Sets to true so when it's clicked it disbales the button.
		if(clicked.disabled === true){
			$btn.html("Loading..."); //Changes html to say Loading during disabled status if its true.
		}
		setTimeout(function(){
			clicked.disabled = false; 
			$btn.html("Submit");
		}, 4000); // Sets disabled to go back to false after 4 seconds and say submit again as well.	
	});
}