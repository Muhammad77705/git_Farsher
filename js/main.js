$(function(){

    $('.banner_carousel_items').slick({
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots:true,
    arrows: true,
    appendArrows:'.nav_banner',
    appendDots:'.nav_banner'
  });

	$('.product_kind_blocks div').click(function (){
  		var myId = ".products_"+$(this).attr("id");
  		$('.product_kind_blocks div').removeClass("kind_block_active");
  		$(this).addClass("kind_block_active");
      $('.product_kind_blocks div').removeClass('kind_border_left kind_border_right');
      $(this).prev().addClass('kind_border_left');
      $(this).next().addClass('kind_border_right');
  		$(".hide_products").hide();
  		$(myId).css('display','flex');
      $('.nav_banner').removeAttr('style');
 	});

	$('.product_marinades div').click(function (){
  		$(this).siblings().removeClass("marinade_active");
  		$(this).addClass("marinade_active");
 	});

  $(window).scroll(function(){
    if($(this).scrollTop()>162){
      $('.catalog_nav').addClass('fixed');
    }
    else if ($(this).scrollTop()<162){
      $('.catalog_nav').removeClass('fixed');
    }
  });

 	$('.catalog_nav_link ').click(function (e){
 		e.preventDefault();
    $('.catalog_nav_link').removeClass('catalog_link_active');
    $(this).addClass('catalog_link_active');
 	});

	$('.catalog_kind_flex').click(function (){
    $('.catalog_kind_menu').toggleClass('catalog_kind_active');
		$('.catalog_kind_links').slideToggle();
	});

  $('#phone').mask("+7(999) 999-99-99");
 	
});