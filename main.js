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

$('body a').click(function(){
  var id = $(this).attr("href");
  var position = $(id).offset().top-50;
  $('html,body').animate({
    scrollTop:position,
  },1500);
});

$('.infolist').click(function(){
  $('.infolist').removeClass('active');
  $(this).addClass('active');
});



$('.faq-list-item').click(
  function() {
    var $answer = $(this).find('.answer');
    var change = $(this).find('.purase');
   if($answer.hasClass('open')){
    $($answer).removeClass('open');
    $(change).text("+");
   }else{
    $($answer).addClass('open');
    $(change).text("-").css('font-size','32px');
   } 
  }
);

$('#privace').click(function(){
$('.mordalwrapper').addClass('mordal-open');
});

$('.close-m').click(function(){
$('.mordalwrapper').removeClass('mordal-open');
});

  
 

 
});



new WOW().init();

}
