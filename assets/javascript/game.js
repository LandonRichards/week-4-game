//pseudo code first!
//random number 

//random number is made when player win or loses

//the player adds up to that score

//will need to reset itself somehow

//these add together until it hits score

// 

//I need variables first

var random_result;
var lost = 0;
var win = 0;
var previous = 0;


var resetAndStart = function() {
	//images
	var images = [
		'https://fthmb.tqn.com/9cPB37y7gLLXKnH2l3IXeTZFM5Y=/768x0/filters:no_upscale()/bluerockcandysky-56a12b2c5f9b58b7d0bcb336.jpg',
		 'https://www.crystallight.co.nz/images/library/tuxpi.com.1474844554.jpg',
		  'https://fossbytes.com/wp-content/uploads/2017/04/time-crystals-.jpg',
		   'http://cdn.shopify.com/s/files/1/0276/7495/files/the-healing-benefits-of-crystals-1200x800b.jpg?5324']

	random_result = Math.floor(Math.random() * 69) + 30;
//it cant be 99 cuz that goes too low. has to be 69 + 30

//console.log(random_result)


$("#result").html('Random Result: ' + random_result);
//for loop, needed to collect score
$(".crystals").empty();
//empties the crystals after it resets
for (var i = 0; i< 4; i++){
//gets me 4 crystals 

	var random = Math.floor(Math.random() * 11) + 1;
	//actually learned this in random result. to avoid 0
	//console.log(random)



	var crystal = $("<div>");
		crystal.attr({"class": 'crystal',
			"data-random" :random

			});
		//for css
		crystal.css({
			"background-image": "url('" + (images[i]) + "')",
			"background-size":"cover"

		})
		//crystal.html(random)
	$(".crystals").append(crystal);

	//console.log("hello world");

}
$("#previous").html("Total Score: " + previous);
}


resetAndStart(); 

//var reset = function(); {

//}

$(document).on('click', ".crystal", function () {

	//console.log($(this).attr('data-random'));
	var num = parseInt($(this).attr('data-random'));
	//converts a string into a number

	previous += num;

	$("#previous").html("Total Score: " + previous);

	console.log(previous)

	if(previous > random_result){
		lost++;
		//console.log("LOSER");
		$("#lost").html("You have lost: " + lost);

		previous = 0;

		resetAndStart();

		//$("#previous").html(previous);
	}
	else if(previous === random_result){
		win++;
		//console.log("winner winner chicken dinner");
		$("#win").html("You have won: " + win);
		//$("#previous").html(previous);
		 previous = 0; 

		resetAndStart();

	}


	//console.log(typeof num);

});



