$(function() {
  
  $("header").click(function() {

    $(this).toggleClass("dropdown");
    $("table").toggleClass("dropdown");
    $("ul.projectsBullet").toggleClass("dropdown");

  })
});