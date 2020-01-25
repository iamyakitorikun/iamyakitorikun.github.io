'use strict';
{
$(function(){
  var swiper = new Swiper('.swiper-container', {
    // ここからはオプションです。
navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
},
loop: true,
pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});

});


 $(document).ready(function(){ 
  $('.drawer-show').click(function(){
    $('#toggle').fadeIn().css('display','flex');
  });

  $('.close').click(function(){
    $('#toggle').slideUp('slower');
  })
  $('.li-close').click(function(){
    $('#toggle').slideUp('slower');
  })

  $('#top').click(function(){
    $('html, body').animate({
      'scrollTop':10
    },1500);
  })

  $(window).scroll(function() {
  if ($(this).scrollTop() > 150) {
    $('.go-top').show(500);
  } else {
    $('.go-top').hide(500);
  }
});
 
});



new WOW().init();

}
