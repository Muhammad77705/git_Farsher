$(function(){

  /* Slick-slider */
  $('.banner_carousel_items').slick({
    dots: true, 
    autoplay: true, 
    autoplaySpeed: 5000,
    speed: 1200,
    fade: true,
    // waitForAnimate:false,
    appendArrows:'.nav_banner',
    appendDots:'.nav_banner'
  });

  $('.popup_slider_main').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: '.popup_slider_items',
    arrows: false
  });
  $('.popup_slider_items').slick({
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.popup_slider_main',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          arrows: false
        }
      }
    ]
    
  });

  // Текст в баннере
  var len_fit = 7;

  if ($(this).width() <= 1200) {
    var len_fit = 9;
  }

  if ($(this).width() <= 769) {
    var len_fit = 6;
  }

  if ($(this).width() <= 480) {
    var len_fit = 10;
  }

  $(".banner_title").each(function () {
    if ($(this).html().length > len_fit) {
      var size_now = parseInt($(this).css("font-size"));
      var size_new = size_now * len_fit / $(this).html().length;
      $(this).css("font-size", size_new)
    }
  });

  // Выпадающее меню
  $('.menu_mobile').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('menu_mobile_active');
    $('body').toggleClass('body_hidden');
    $('.header_items').toggleClass('header_items_active');
  });

  var $col = $('.submenu_block'),
    $plus = $('.submenu_toggle'),
    $sub = $('.submenu_item');

    $plus.click(function () {
      var subHeight = $(this).parent().siblings($sub).height();

      $(this).parent().parent().toggleClass('submenu_block_active');

      if ($(this).parent().parent().hasClass('submenu_block_active')) {
        $(this).addClass('submenu_toggle_active')
          .parent().parent().css('max-height', (60 + subHeight) + 'px')
          .siblings($col).removeClass('submenu_block_active').css('max-height', 30 + 'px')
          .find($plus).removeClass('submenu_toggle_active');
      } else {
        $(this).removeClass('submenu_toggle_active').parent().parent().css('max-height', 30 + 'px');
      }
    });

  // Переключатель с блока "Килограммы" на "Штуки"
  $('.popup_block').click(function () {
    $(this).children('.radio').prop("checked", true);
    $(this).siblings().removeClass("popup_block_active");
    $(this).addClass("popup_block_active").children('input');
  });

  $('.popup_block:last').click(function () {
    $('.popup_footer_text').addClass('popup_text_active');
  });

  // Переключатель кнопок маринада
  $('.popup_marinades .marinades_btn').click(function () {
    $(this).siblings().removeClass("marinade_checked");
    $(this).addClass("marinade_checked");
    var data_btn = $(this).attr('data-marinade');
    $(this).parent().siblings('.popup_info').children('.product_price').children().text(data_btn);
  });	

  $('.popup_close_btn').click(function () {
    $('.product_popup').removeClass('product_popup_active'); 
    $('body').removeClass('body_hidden');
  });

  $('.popup_add_cart').click(function () {
    $(this).hide();
    $('.popup_hidden_btn').show();
    $('.popup_close_btn').show();
    $('.popup_footer_text').hide();
  });


// Табы на главное странице
  $('.product_kind_blocks div').click(function () {
    var myId = ".products_" + $(this).attr("id");
    $('.product_kind_blocks div').removeClass("kind_block_active");
    $(this).addClass("kind_block_active");
    $(".hide_products").hide();
    $(myId).css('display', 'flex');
    $('.nav_banner').removeAttr('style');
  });

  $('.product_btn').click(function () {
    $('.product_popup').addClass('product_popup_active');
    $('body').addClass('body_hidden');
  });

  $('.popup_close').click(function () {
    $('.product_popup').removeClass('product_popup_active');
    $('body').removeClass('body_hidden');
  });

  $('.social_callback').click(function () {
    $('.modal').addClass('modal_active');
  });

  $('.modal_close').click(function () {
    $('.modal').removeClass('modal_active');
  });

  $('.catalog_kind_flex').click(function () {
    $('.catalog_kind_menu').toggleClass('catalog_kind_active');
    $('.catalog_kind_links').toggleClass('catalog_links_active');
  });

  $('.catalog_kind_title').click(function (e) {
    e.preventDefault();
  });

  linkActive();
  mySticky();

  $(window).scroll(function () {
    linkActive();
    mySticky();
  });

  function linkActive() {
    if ($('.catalog_nav_link').hasClass('mPS2id-highlight')) {
      $('.catalog_nav_link').removeClass('catalog_nav_active')
    }
    else {
      $('.catalog_nav_link:first').addClass('catalog_nav_active')
    }
  }
  
  function mySticky() {
    if ($(this).width() > 1550) {
      if ($(this).scrollTop() > 169) {
        $('.catalog_nav').addClass('sticky');
      }
      else if ($(this).scrollTop() < 169) {
        $('.catalog_nav').removeClass('sticky');
    }}

    // При ширине окна браузера больше 1200px
    else if ($(this).width() > 1200) {
      if ($(this).scrollTop() > 160) {
        $('.catalog_nav').addClass('sticky');
      }
      else if ($(this).scrollTop() < 160) {
        $('.catalog_nav').removeClass('sticky');
      }}

    // При ширине окна браузера больше 992x
    else if ($(this).width() > 992) {
      if ($(this).scrollTop() > 152) {
        $('.catalog_nav').addClass('sticky');
      }
      else if ($(this).scrollTop() < 152) {
        $('.catalog_nav').removeClass('sticky');
      }}

    // При ширине окна браузера больше 768px
    else if ($(this).width() > 769) {
      if ($(this).scrollTop() > 82) {
        $('.catalog_nav').addClass('sticky');
      }
      else if ($(this).scrollTop() < 82) {
        $('.catalog_nav').removeClass('sticky');
      }}

    // При ширине окна браузера больше 0px
    else if ($(this).width() > 0) {
      if ($(this).scrollTop() > 65) {
        $('.catalog_nav').addClass('sticky');
      }
      else if ($(this).scrollTop() < 65) {
        $('.catalog_nav').removeClass('sticky');
      }}
  };

  $('#phone, .modal_number').mask("+7(999) 999-99-99");

});