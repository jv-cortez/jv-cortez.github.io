$(function() {
  
  $("header.dropdown").hover(function() {

    $(this).addClass("hover");
    $('table',this).css('visibility', 'visible').css('position', 'absolute');

  }, function() {

    $(this).removeClass("hover");
    $('table',this).css('visibility', 'hidden').css('position','absolute');

  });  
});