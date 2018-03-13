$(function() {

  $("header").click(function() {

    $(this).toggleClass("dropdownHeader");
    $("table").toggleClass("dropdown");
    $("ul.projectsBullet").toggleClass("dropdown");

  })
});