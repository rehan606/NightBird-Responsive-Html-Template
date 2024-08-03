$(function () {


	/* PRE LOADER */
	$(window).load(function(){
		$('.pre_loader').delay(1000).fadeOut(500);
	});

    // Banner slider start
    $('.banner_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        speed: 2000,
        fade: false,
    });

    // About Video start
    $('.venobox').venobox();



    // sticky menu 

    var offset = $('.main_menu').offset().top;

      $(window).scroll(function(){
          var scrolling = $(this).scrollTop();
        if(scrolling>offset){
            $('.main_menu').addClass('menu_fix');
        }
        else{
            $('.main_menu').removeClass('menu_fix');
        }
  
    });

    // scroll top
    $('.scrollTop').click(function(){
        $('html,body').animate({
            scrollTop: 0,
        },2000);
    });

    $(window).scroll(function(){
        var scrolling2 = $(this).scrollTop();

        if(scrolling2>150){
            $('.scrollTop').fadeIn();
        }
        else{
            $('.scrollTop').fadeOut();
        }
    });


    // Navbar-toggler

    $('.navbar-toggler').click(function(){
        $('.collapse').toggle(200);
    });

    // SLIDER PART 

	$('.slider_wraper').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		centerPadding:0,
		dots: true,
		centerMode: true,
		arrows:false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					autoplay:true,
					dots: false
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 1,
					autoplay:true,
					infinity:true,
					dots: true,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					autoplay:false,
					infinity:true,
					dots: true,
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					autoplay:false,
					infinity:true,
					dots: true,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 481,
				settings: {
					slidesToShow: 1,
					autoplay:false,
					infinity:true,
					dots: true,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 321,
				settings: {
					slidesToShow: 1,
					autoplay:false,
					infinity:true,
					dots: false,
					slidesToScroll: 1
				}
			}
		]
	});


    // USER FEEDBACK SLIDER js
	$('.text_slide').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: false,
	  asNavFor: '.img_slide'
	});
	$('.img_slide').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.text_slide',
		dots: true,
		autoplay:true,
		centerPadding:0,
		centerMode: true,
		arrows:false,
		centerMode:true,
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 3,
					autoplay:false,
					infinity:true,
					dots: true,
					slidesToScroll: 1
				}
			},

			{
				breakpoint: 481,
				settings: {
					slidesToShow: 3,
					autoplay:true,
					infinity:true,
					dots:true,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 321,
				settings: {
					slidesToShow: 1,
					autoplay:true,
					infinity:true,
					dots:true,
					slidesToScroll: 1
				}
			}
		]
	});

  // BLOG slider start
	$('.blog').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
    	dots: false,
    	autoplay:true,
		arrows:false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					autoplay:false,
					infinite: true,
					dots: false
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
					autoplay:false,
					infinity:true,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					autoplay:true,
					infinity:true,
					dots: true,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 2,
					autoplay:true,
					infinity:true,
					dots:false,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 481,
				settings: {
					slidesToShow: 1,
					autoplay:false,
					infinity:true,
					dots:false,
					slidesToScroll: 1
				}
			}
		]
	});

	
  // testimonial slider start
	$('.testimonial').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
    	dots: false,
    	autoplay:false,
		arrows:false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: false
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
					autoplay:true,
					infinity:true,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					autoplay:true,
					infinity:true,
					dots: true,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 2,
					autoplay:true,
					infinity:true,
					dots:false,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 481,
				settings: {
					slidesToShow: 1,
					autoplay:true,
					infinity:true,
					dots:false,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 321,
				settings: {
					slidesToShow: 1,
					autoplay:false,
					infinity:true,
					dots: false,
					slidesToScroll: 1
				}
			}
		]
	});

  //animation scroll js
  var html_body = $('html, body');
  $('nav a').on('click', function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
              html_body.animate({
                  scrollTop: target.offset().top - 70
              }, 1500,);
              return false;
          }
      }
  });

  // WOW ANIMATION
  new WOW().init();

  // FEATURE
  $('.feature_menu ul li').click(function(){
	  $('.feature_menu ul li.active').removeClass('active');
  });
  
});
