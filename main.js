
$(document).ready(function() {
	$('#mobileHeader span').click(function(){
		$('#mobileMenuDiv').toggle();	
	});
});
/* ================  Project Tour  =============== */
$(document).ready(function(){

	slide_number = $('#movingBg li').length;
		//alert(slide_number);	
	haymarket_slide_number = $('#movingBg li.haymarket').length;
	redington_slide_number = $('#movingBg li.redington').length;
	brilliant_slide_number = $('#movingBg li.brilliant').length;
	evon_slide_number = $('#movingBg li.evon').length;
	
	haymarket_width = (haymarket_slide_number / slide_number) * 100 +'%';
	redington_width = (redington_slide_number / slide_number) * 100 +'%';
	brillinat_width = (brilliant_slide_number / slide_number) * 100 +'%';
	evon_width = (evon_slide_number / slide_number) * 100 +'%';
	
	$('#haymarket').css('width' , haymarket_width);
	$('#redington').css('width' , redington_width);
	$('#brilliant').css('width' , brillinat_width);
	$('#evon').css('width' , evon_width);
	
	slide_width = slide_number * 960;
	
	slide_duration = slide_number * 3000;
	progress_duration = (slide_number * 3000) + 6000;
	//progress_duration = 1000;
	//slide_duration = 1000;
	slide_marginLeft = (slide_number - 1) * 960;
	
	$('#movingBg').css('width' , slide_width);
	
	$('#tourButton').bind('click',function(){	
		$('#tourButton').hide();
		warning();
	});
	function warning(){
		$('#warning').css('display' , 'block');
		$('#warningImage').animate({
			'width': '300'
		}, 1000,'linear', function() {
			$('#warningImage').animate({
				'width': '100'
			}, 1000,'linear', function() {
				    $('#warningImage').animate({
						'width': '300'
					}, 1000,'linear', function() {
				    $('#warningImage').animate({
						'width': '100'
					}, 1000,'linear', function() {
							$('#warning').css('display' , 'none');
						  	$('#movingBg li').css('opacity' , '1');
							dofirst();
							updateProgress();
					});
					});
			});
		});
			
	}
	function changeImage(){
		var image1 = $('img[rel="blank1"]');
		image1.attr('src' , 'banner/blank5.png');
		
		var image2 = $('img[rel="blank2"]');
		image2.parent('li').removeClass('redington').addClass('haymarket');
		image2.attr('src' , 'banner/blank1.png');
		
		var image3 = $('img[rel="blank3"]');
		image3.parent('li').removeClass('brilliant').addClass('redington');
		image3.attr('src' , 'banner/blank2.png');
		
		var image4 = $('img[rel="blank4"]');
		image4.parent('li').removeClass('evon').addClass('brilliant');
		image4.attr('src' , 'banner/blank3.png');
		
		var image5 = $('img[rel="blank5"]');
		image5.attr('src' , 'banner/blank4.png');
	}
	function updateProgress(){		
		$('#progressBar').animate({
			'background-position': '0'
		}, progress_duration,'linear', function() {
			
		});
	}
	function dofirst(){		
		$('#dynamicImageLeft').animate({
			'margin-left': '320'
		}, 3000,'linear', function() {
			$('#movingBg').animate({
				'margin-left': -slide_marginLeft
			}, slide_duration,'linear', function() {
				$('#dynamicImageLeft').animate({
					'margin-left': '695'
				}, 3000,'linear', function() {
					 $('#dynamicImageLeft').hide();
					 $('#movingBg li').css('opacity' , '.2');
					 $('#tourButtonBack').show();
					 $('#dynamicImageRight').fadeIn();
					 $('#dynamicImageRight').css('margin-left','695');
				});    
			});
		});
	}
	$('#tourButtonBack').bind('click',function(){	
		$('#tourButtonBack').hide();
		$('#movingBg li').css('opacity' , '1');
		doSecond();
		updateReverceProgress();
		changeImage();
	});
	function updateReverceProgress(){		
		$('#progressBar').animate({
			'background-position': '-960'
		}, progress_duration,'linear', function() {
			
		});
	}
	function doSecond(){
		$('#dynamicImageRight').animate({
			'margin-left': '330'
		}, 3000,'linear', function() {
			$('#movingBg').animate({
				'margin-left': '0'
			}, slide_duration,'linear', function() {
				$('#dynamicImageRight').animate({
					'margin-left': '0'
				}, 3000,'linear', function() {
					 $('#dynamicImageRight').hide();
					 $('#tourButton').show();
					 $('#movingBg li').css('opacity' , '.2');
					 $('#dynamicImageLeft').fadeIn(1000);
					 $('#dynamicImageLeft').css('margin-left','0');
					location.reload();
				});    
			});
		});
	}
	
});

/* ================  Homepage Accordian  =============== */
$(document).ready(function(){
	//hide message_body after the first one
	$(".message_list .message_body:gt(0)").hide();
	//toggle message_body
	$(".message_head").click(function(){
		$(this).next(".message_body").slideToggle(500)
		return false;
	});
	//collapse all messages
	$(".collpase_all_message").click(function(){
		$(".message_body").slideUp(500)
		return false;
	});
	//show all messages
	$(".show_all_message").click(function(){
		$(this).hide()
		$(".show_recent_only").show()
		$(".message_list li:gt(4)").slideDown()
		return false;
	});
});

/* ================  Gallery Light Box  =============== */
$(function() {
	$('#gallery a').lightBox();
});
/*
$(document).ready(function(){
  $('.slider1').bxSlider({
    slideWidth: 960,
    minSlides: 1,
    maxSlides: 1,
    slideMargin: 0,
    infiniteLoop: true,
    pager: false,
    auto: true
  });
});*/
