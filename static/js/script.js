$(function() {
  if(!/Android|webOS|iPhone|BlackBerry/i.test(navigator.userAgent)) {
    $('#phone').addClass('skype').find('a').attr('href', 'skype:w3b_monk3y?call');
  }
})