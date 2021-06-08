$(document).ready(function() {

$('wrapper').addClass('loaded');

$('.menu__icon').click(function(event){
	$(this).toggleClass('active');
	$('.menu__body').toggleClass('active');
	$('body').toggleClass('lock');
});

function ibg(){
	$.each($('.ibg'), function(index, val) {
		if($(this).find('img').length>0){
			$(this).css('background-image','url("'+$(this)
			.find('img').attr('src')+'")');
		}
	});
}
ibg();

$('.slider__body').slick({
	arrows:false,
	dots:true,
	speed:600,
	autoplay:true,
})

$('.subscribe__input').on('keyup',function(e){
    if ($(this).val() == "") $(this).removeClass('focus');
    else $(this).addClass('focus');
})

})