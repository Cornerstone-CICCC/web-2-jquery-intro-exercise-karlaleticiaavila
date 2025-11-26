$(function() {
  $('#toggleButton').on('click', function() {
    $('#myParagraph').toggle();
  })
  })


$(function() {
  $('#colorButton').on('click', function() {
    $('#colorDiv').css('background-color', 'pink');
  })
  })
$(function() {
  $('#addClassButton').on('click', function() {
    $('#classDiv').addClass('newClass');
  });

  $('#removeClassButton').on('click', function() {
    $('#classDiv').removeClass('newClass');
  });
});


$(function() {
  $('#fadeInButton').on('click', function() {
    $('#fadeDiv').fadeIn();
  });

  $('#fadeOutButton').on('click', function() {
    $('#fadeDiv').fadeOut();
  })});


  $(function() {
    $('#slideDownButton').on('click', function() {
      $('#slideDiv').slideDown();
    });

    $('#slideUpButton').on('click', function() {
      $('#slideDiv').slideUp();
    })});