$(function(){

  $('.banner_carousel_items').slick({
    dots: true,
    appendArrows:'.nav_banner',
    appendDots:'.nav_banner'
  });

  $('.menu_mobile').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('menu_mobile_active');
    $('.header_items').slideToggle();
  });

  $('.submenu_toggle').click(function () {
    $(this).toggleClass('submenu_toggle_active');
    $(this).parent().siblings().slideToggle();
  });

	$('.product_kind_blocks div').click(function (){
  	var myId = ".products_"+$(this).attr("id");
  	$('.product_kind_blocks div').removeClass("kind_block_active");
  	$(this).addClass("kind_block_active");
  	$(".hide_products").hide();
  	$(myId).css('display','flex');
    $('.nav_banner').removeAttr('style');
   });
   
  $(window).scroll(function () {
    if ($('.catalog_nav_link').hasClass('mPS2id-highlight')) {
         $('.catalog_nav_link').removeClass('catalog_nav_active')
    }
    else {
      $('.catalog_nav_link:first').addClass('catalog_nav_active')
    }
  });

	$('.product_marinades div').click(function (){
  	$(this).siblings().removeClass("marinade_checked");
  	$(this).addClass("marinade_checked");
 	});

  $(window).scroll(function(){
    if($(this).scrollTop()>169){
      $('.catalog_nav').addClass('sticky');
    }
    else if ($(this).scrollTop()<169){
      $('.catalog_nav').removeClass('sticky');
    }
  });

	$('.catalog_kind_flex').click(function (){
    $('.catalog_kind_menu').toggleClass('catalog_kind_active');
    $('.catalog_kind_links').toggleClass('catalog_links_active');
	});

  $('#phone').mask("+7(999) 999-99-99");

});