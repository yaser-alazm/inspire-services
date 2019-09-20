/*jslint browser: true*/
/*global $, jQuery, alert*/
$(document).ready(function () {
    //Nice Scroll
    'use strict';
    $("html").niceScroll();

    //Carousel slides turning Duration
    $('.carousel').carousel({interval: 5000});

    //Scroll top Button & Social SideBar FadeIn and Out
    var scrollButton = $("#scroll-top");

    $(window).scroll(function () {
        $(window).scrollTop() >= 700 ? scrollButton.fadeIn() : scrollButton.fadeOut();
        if ($(window).scrollTop() >= 2700) {
            $('#social-sidebar').css("opacity", 0);
        } else if ($(window).scrollTop() <= 300) {
            $('#social-sidebar').css("opacity", 0.5);
        } else {$('#social-sidebar').css("opacity", 1); }
    });

    //Scroll top Button click function
    scrollButton.click(function () {
        $("html,body").animate({scrollTop: 0}, 600);
    });

    // Navbar Scrolling resize
    $(window).scroll(function () {
      $(document).scrollTop() > 300 ? $('#topnavbar').addClass('shrink') : $('#topnavbar').removeClass('shrink') ;
    });
    // TopBar Show and hide
    $(window).scroll(function() {
      $(document).scrollTop() < 3600 ? $('#banner').addClass('navbar navbar-fixed-bottom'):$('#banner').removeClass('navbar navbar-fixed-bottom');
    });

   $('#our_team #team-btn').click(function() {

      if ($('#apply_section').hasClass('show-form')) { // Here, check if display value is 'none'
       $('#apply_section').removeClass('show-form').css('opacity','0');
     } else {
       $('#apply_section').addClass('show-form').css('opacity','1');
     }
    });

    // Form Validating
    var userError = true, emailError = true, livingError = true, msgError = true;

    $('.apply_section .form-name').blur(function(){
      if($(this).val().length < 4){
        $(this).css('border','2px solid rgb(162,32,44)').parent().find('.name-val').fadeIn(300);
        userError = true;
      }else{
        $(this).css('border','none').parent().find('.name-val').fadeOut(300);
        userError = false;
      }
    });
    $('.apply_section .form-email').blur(function(){
      if($(this).val().length == 0){
        $(this).css('border','2px solid rgb(162,32,44)').parent().find('.email-val').fadeIn(300);
        emailError = true;
      }else{
        $(this).css('border','none').parent().find('.email-val').fadeOut(300);
        emailError = false;
      }
    });
    $('.apply_section .form-living').blur(function(){
      if($(this).val().length == 0){
        $(this).css('border','2px solid rgb(162,32,44)').parent().find('.living-val').fadeIn(300);
        livingError = true;
      }else{
        $(this).css('border','none').parent().find('.living-val').fadeOut(300);
        livingError = false;
      }
    });
    $('.apply_section .form-msg').blur(function(){
      if($(this).val().length < 50 || $(this).val().length ==0){
        $(this).css('border','2px solid rgb(162,32,44)').parent().find('.msg-val').fadeIn(300);
        msgError = true;
      }else{
        $(this).css('border','none').parent().find('.msg-val').fadeOut(300);
        msgError = false;
      }
    });

    $('.apply_section').submit(function(e){
      if(userError === true || emailError === true || livingError === true || msgError === true){
        e.preventDefault();
        $('.apply_section .form-name, .apply_section .form-email, .apply_section .form-living, .apply_section .form-msg').blur();
      }else{

      }
    });

    // Add smooth scrolling to all links
    $(".scroll").on('click', function(event) {
      // Prevent default anchor click behavior
      event.preventDefault();
        // Using jQuery's animate() method to add smooth page scroll
        $('html, body').animate({
          scrollTop: $(this.hash).offset().top - 20 +'em'
        }, 1000);
    });

    // Start Popover
    $(document).ready(function(){
      $('[data-toggle="popover"]').popover();
    });
});

//Page Loading
$(window).ready(function ()
{
  //Loading Screen
  $(".loading-overlay,.sk-cube-grid").fadeOut(6000,function(){
      $("body").css("overflow","auto");
      $('#scroll-top').fadeIn(6000);
  });

});
$(window).ready(function () {

    // "use strict";
    //
    // // Loading Elements
    //
    // $(".loading-overlay h1,.sk-cube-grid").fadeOut(3000, function () {
    //
    //     // Show The Scroll
    //
    //     $("body").css("overflow", "auto");
    //
    //     $(this).parent().fadeOut(1000, function () {
    //
    //         $(this).remove();
    //     });
    // });
});
