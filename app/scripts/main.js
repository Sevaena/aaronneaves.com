// Show phone number when contact button is clicked, and track event
$('#contact').on('click', function() {
  var phone = '(08) 8267 5466';

  if ($(this).html() != phone) {
    $(this).html(phone);
    $(this).removeClass('animated fadeInUp delay150ms');
    ga('send', 'event', 'button', 'click', 'contact');
  } else {
    console.log('animated bounce');
    $(this).addClass('animated bounce');
    $(this).bind('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
      $(this).removeClass('animated bounce');
    });
  }
});

