$(document).ready(function() {

	var images = $('.slider-image').toArray();
	var activeImage = 0;
	var numImages = $('.slider-image').length;
	var buttonsWidth = 15;
	var buttonsMargin = 24;
	var sliderWidth = $('#slider').width();
	var buttonsLeftPos = (sliderWidth - numImages*(buttonsMargin+buttonsWidth))/2;
	
	for (var i = 0; i < numImages; i++) {
		if(images[i].classList.contains('active')) {
			$('<div class="slider-button active" position="'+i+'"></div>').appendTo($('.slider-buttons'));
			activeImage = i;
		} else {
			$('<div class="slider-button" position="'+i+'"></div>').appendTo($('.slider-buttons'));
		}
		console.log(images[i].classList.contains('active'));	
		
	};
	
	$('.slider-buttons').css({"left": buttonsLeftPos, "width": numImages*(buttonsWidth+buttonsMargin)-buttonsMargin});

	$('.slider-button:not(.active)').on('click', function() {
		alert('Sa tuka trqbva da slide-va, ma dneska nqmah vreme :D');
	});
	


});