$(document).ready(function(){
	$('.burger-button_1, .burger-button_2, .burger-button_3, .burger-button_4, .burger-button_5, .scroll').click(function(){
	    if($(this).hasClass('burger-button_1')) {
	    	if($('.nav-bar-mobile_1').hasClass('mobile-active_1')){
		    	$('.nav-bar-mobile_1').removeClass('mobile-active_1');
		    	$('.nav-bar-mobile_1').addClass('mobile-hidden_1');
		    	$('.nav-bar-mobile_1').slideUp();
		    }else{	
		    	$('.nav-bar-mobile_1').removeClass('mobile-hidden_1');
	    		$('.nav-bar-mobile_1').addClass('mobile-active_1');
		    	$('.nav-bar-mobile_1').slideDown();
		    }	
	    }
	    if($(this).hasClass('burger-button_2')) {
	    	if($('.nav-bar-mobile_2').hasClass('mobile-active_2')){
		    	$('.nav-bar-mobile_2').removeClass('mobile-active_2');
		    	$('.nav-bar-mobile_2').addClass('mobile-hidden_2');
		    	$('.nav-bar-mobile_2').slideUp();
		    }else{	
		    	$('.nav-bar-mobile_2').removeClass('mobile-hidden_2');
	    		$('.nav-bar-mobile_2').addClass('mobile-active_2');
		    	$('.nav-bar-mobile_2').slideDown();
		    }	
	    }
	    if($(this).hasClass('burger-button_3')) {
	    	if($('.nav-bar-mobile_3').hasClass('mobile-active_3')){
		    	$('.nav-bar-mobile_3').removeClass('mobile-active_3');
		    	$('.nav-bar-mobile_3').addClass('mobile-hidden_3');
		    	$('.nav-bar-mobile_3').slideUp();
		    }else{	
		    	$('.nav-bar-mobile_3').removeClass('mobile-hidden_3');
	    		$('.nav-bar-mobile_3').addClass('mobile-active_3');
		    	$('.nav-bar-mobile_3').slideDown();
		    }	
	    }
	    if($(this).hasClass('burger-button_4')) {
	    	if($('.nav-bar-mobile_4').hasClass('mobile-active_4')){
		    	$('.nav-bar-mobile_4').removeClass('mobile-active_4');
		    	$('.nav-bar-mobile_4').addClass('mobile-hidden_4');
		    	$('.nav-bar-mobile_4').slideUp();
		    }else{	
		    	$('.nav-bar-mobile_4').removeClass('mobile-hidden_4');
	    		$('.nav-bar-mobile_4').addClass('mobile-active_4');
		    	$('.nav-bar-mobile_4').slideDown();
		    }	
	    }
	    if($(this).hasClass('burger-button_5')) {
	    	if($('.nav-bar-mobile_5').hasClass('mobile-active_5')){
		    	$('.nav-bar-mobile_5').removeClass('mobile-active_5');
		    	$('.nav-bar-mobile_5').addClass('mobile-hidden_5');
		    	$('.nav-bar-mobile_5').slideUp();
		    }else{	
		    	$('.nav-bar-mobile_5').removeClass('mobile-hidden_5');
	    		$('.nav-bar-mobile_5').addClass('mobile-active_5');
		    	$('.nav-bar-mobile_5').slideDown();
		    }	
	    }
	    if($(this).hasClass('scroll')) {
	    	var idscroll = $(this).attr('href');
			$.scrollTo(idscroll, 1000);
			return false;
	    }
    });	
	$('.services-text-wrap, .image-menu').on('inview', function(event, isInView){
		if(isInView && $(this).hasClass('services-text-wrap')) {
			$('.services-text-wrap_1').animate({
				opacity: 1
			},600, function(){
				$('.services-text-wrap_2').animate({
					opacity: 1
				},600, function(){
					$('.services-text-wrap_3').animate({
						opacity: 1
					},600, function(){
						$('.services-text-wrap_4').animate({
							opacity: 1
						},600, function(){
							$('.services-text-wrap_5').animate({
								opacity: 1
							},600, function(){
								$('.services-text-wrap_6').animate({
									opacity: 1
								},600);
							});
						});
					});
				});
			});
		}
		if(isInView && $(this).hasClass('image-menu')) {
			$('.a-menu-news').animate({
				opacity: 1
			},900, function(){
				$('.a-menu-services').animate({
					opacity: 1
				},900, function(){
					$('.a-menu-products').animate({
						opacity: 1
					},900, function(){
						$('.a-menu-faq').animate({
							opacity: 1
						},900, function(){
							$('.a-menu-contacts').animate({
								opacity: 1
							},900);
						});
					});
				});
			});
		}
	});
	$('[data-toggle="tooltip"]').tooltip();
});