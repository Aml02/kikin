/***hover drop down ********/
$(".btn-group, .dropdown").hover(
                        function () {
                            $('>.dropdown-menu', this).stop(true, true).fadeIn("fast");
                            $(this).addClass('open');
                        },
                        function () {
                            $('>.dropdown-menu', this).stop(true, true).fadeOut("fast");
                            $(this).removeClass('open');
                        });

/**********************************************************/
$(document).ready(function(){
    $('#follw1').click(function(){
        $('this').css("color","red");
    });
});
/**********************************************************/
$('#featured').owlCarousel({
	nav:false,
	dots:false,
	next:false,
    loop:true,
    margin:0,
	autoplay:true,
autoplayTimeout:5000,
autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:7,
            nav:true,
            loop:false
        }
    }
})

/**********************************************************/
$('#popular').owlCarousel({
	nav:false,
	dots:false,
	next:false,
    loop:true,
    margin:0,
	autoplay:true,
autoplayTimeout:5000,
autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:7,
            nav:true,
            loop:false
        }
    }
})

/**********************************************************/
$('#collec').owlCarousel({
	nav:false,
	dots:false,
	next:false,
    loop:true,
    margin:0,
	autoplay:true,
autoplayTimeout:5000,
autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
})

/**********************************************************/
$('#trendy').owlCarousel({
	nav:false,
	dots:false,
	next:false,
    loop:true,
    margin:0,
	autoplay:true,
autoplayTimeout:5000,
autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
})
/**********************************************************/
$('#trend-store').owlCarousel({
	nav:false,
	dots:false,
	next:false,
    loop:true,
    margin:0,
	autoplay:true,
autoplayTimeout:5000,
autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
})






/**********************************************************/
/*new coll img
var imgsNumber = document.getElementByClassName('img_number');
imgsNumber.innerHTML = "+" .concat(document.images.length - 4) ;
/**********************************************************/
