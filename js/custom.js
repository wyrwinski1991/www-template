// Sticky navigation start 

$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 32) {
            $('.main-nav').addClass('sticky');
			   $(".content").css({display: 'block'});
			  
        } else {
            $('.main-nav').removeClass('sticky');
			  $(".content").css({display: 'none'});
			  
        }
    });
});

// Sticky navigation stop 

// Scroll  page start

    $(document).ready(function () {

        $('.slide').click(function (e) {

            var link = $(this).attr('href');
            var sticky = $('.main-nav').outerHeight();


            $('html, body').animate({
                scrollTop: $(link).offset().top - sticky

            }, 1000);

            e.preventDefault();
        });


    });

// Scroll  page stop


// To top button

$(document).ready(function(){
	
	//Click event to scroll to top
	$('#scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},1000);
		return false;
	});
	
});
// To top button


