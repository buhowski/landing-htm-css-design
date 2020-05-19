
// // ------ banner parallax effect
// 
// $(window).scroll(function() {

// 	var scrolled = $(window).scrollTop();
// 	$('#main-header').css(
// 		'backgroundPositionY',+(scrolled*.049999) +'%');
// });

// // -------drag box

// $(function() {
// 	$( ".box" ).draggable();
// });


// ************** simple accordion menu
		
		// $(document).ready(function() {
		// 	$('.accordion .link').on('click', f_acc);
		// });
		// function f_acc(){
		//   $('.accordion .link-hover').not($(this).next()).slideUp(400);
		//     $(this).next().slideToggle(400);
		// }



// ------------when scroll reach the choosen block-top do smth

 // $(document).scroll(function(){
 //        if($(this).scrollTop() >= $('.block-top').offset().top - 550) {
 //            $('.elem').addClass("line-animate");
 //        }
 //    });


// ---------------code which is working when the scroll bar reaches the botttom,

// if($(window).scrollTop() == $(document).height() - $(window).height()){

// if ($(window).scrollTop() >= ($(document).height() - $(window).height())*0.7){
//                                           //where 0.7 corresponds to 70% --^

// ------------- function set time out for element
// setTimeout(function() {  $('.blok[data-id="' + item + '"]').removeClass('active'); }, 3000)


// ------deactivate link address

$('a.disable-link').click(function() { return false; });

// mobile menu

$(".toggle-icon").click(function() {

	$('#nav-container').toggleClass("pushed");
	
});

// fixed header

jQuery(document).ready(function() {

	var $win = jQuery(window);

	$win.on("scroll", function () {
		var top = $win.scrollTop();
		
		if (top < 200) {
			jQuery(".header-fixed").css('top','-95px');
		} else {
			jQuery(".header-fixed").css('top','0px');
		}	
	});


	// for mobile version script

	var xWidth = window.matchMedia("(max-width: 768px)");
	if (xWidth.matches) { 
		var $win = jQuery(window);

		$win.on("scroll", function () {
			var top = $win.scrollTop();
			
			if (top > 100) {
				jQuery(".mobile-header").css('background','none');
			} else {
				jQuery(".header-fixed").css('background','#000');
			}	
		});
	};


});
	
	// add clas when writing in input area

$("input[name='name']").keyup(function() {

	if ( ($("input[name='name']").val()) ) {

	    $("input[name='name']").addClass("with-text");

	} else {

	    $("input[name='name']").removeClass("with-text");

	}   
});
$("input[name='mail']").keyup(function() {

	if ( ($("input[name='mail']").val()) ) {

	    $("input[name='mail']").addClass("with-text");

	} else {

	    $("input[name='mail']").removeClass("with-text");

	}   
});

// preloader
 
$(window).one("load", function() {

   $(".preloader").fadeOut(1700, function() {
      // $('body').removeClass('stop-scrolling');
  });

});

	// Smooth Scroll on anchor links
function slowScroll(id) {
	var offset = 0;
	$('html, body').animate ({ scrollTop: $(id).offset ().top - offset - 93 }, 800);
	return false;
};

$('.go-down').click(function() {
    $('.about-me').toggleClass('goDown');
    $('.go-down').toggleClass('chevron-up');
    $('.button-down').toggleClass('button-up');
    $('.my-skills img').addClass('opacity-pic');

});
$('.cv-btn').click(function() {
	$('.resume-cv iframe').toggleClass('cv-frame');
	$('.cv-btn').toggleClass('cv-btn_close');
});

	// scroll top btn
$(window).scroll(function(){
	if($(window).scrollTop() > 150){
		$('.top-btn').addClass('active');
	}
	else {
		$('.top-btn').removeClass('active');
	}

});

// 3d effect for main title
jQuery(document).ready(function(){
	$('.text-shadow-title').mousemove(function(e){
		var rXP = (e.pageX - this.offsetLeft-$(this).width()/2);
		var rYP = (e.pageY - this.offsetTop-$(this).height()/2);
	$('.text-shadow-title').css('text-shadow', +rYP/10+'px '+rXP/80+'px rgba(227,6,19,.8), '+rYP/8+'px '+rXP/60+'px rgba(255,237,0,1), '+rXP/70+'px '+rYP/12+'px rgba(0,159,227,.7)');
   });
});

	// customize map
// function initMap() {
//     var coordinates = {lat: 49.839945, lng: 24.027355},
    
//         map = new google.maps.Map(document.getElementById('map'), {
//             center: coordinates
//         });
// }