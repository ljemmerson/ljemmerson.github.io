(function() {
  $('#casestudy-link').click(function() {
    $('html,body').animate({
      scrollTop: $('.footer_casestudies').offset().top
    }, 'slow');
  });

  $(function() {
    var header;
    header = $('.nav-container');
    $(window).scroll(function() {
      var scroll;
      scroll = $(window).scrollTop();
      if (scroll >= 44) {
        $('.nav-container').addClass('nav-scrolling');
      } else {
        $('.nav-container').removeClass('nav-scrolling');
      }
    });
  });

}).call(this);
