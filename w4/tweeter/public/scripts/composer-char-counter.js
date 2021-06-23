$(document).ready(function () {
  const maxCount = 140;

  //Counts down from 140 as a key is inputted in the text-area
  $('.text-area').on('keyup', function () {
    const countRemaining = maxCount - ($(this).val().length);

    //Displays the counter on the Tweeter page
    console.log($(this).closest('.new-tweet').find('.counter').text(countRemaining));

    //Changes the counter to red if input goes over the limit, removes it otherwise
    if (countRemaining < 0) {
      $(this).closest('.new-tweet').find('.counter').addClass('tooManyWords')
    } else {
      $(this).closest('.new-tweet').find('.counter').removeClass('tooManyWords')
    }
  })


});

