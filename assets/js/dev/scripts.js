$(document).ready(function() {
// Add a class of .mq if the browser supports Media Query and '.no-mq' if it doesn't
  if (Modernizr.mq('only all')) {
    $('html').addClass('mq');
  } else {
    $('html').addClass('no-mq');
  }
  // Mobile Menu Funcation
  $(".menu-btn").on('click touch', function() {
    $('.menu').toggleClass('show');
  });

  $('.map')
  .click(function(){
      $(this).find('iframe').addClass('clicked')})
  .mouseleave(function(){
      $(this).find('iframe').removeClass('clicked')});

$(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 140) /* .header-top height */ {
      $('.header-bottom').addClass('fixed');
      // $('.wild-title').css('margin-left', '0');
    } else {
      $('.header-bottom').removeClass('fixed');
      // $('.wild-title').css('margin-left', '-300px');
    }
  });
});


});
