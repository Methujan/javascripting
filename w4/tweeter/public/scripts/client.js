/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {

  //Blocks users from writing scripts into input
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  //Creates tweet from input
  const createTweetElement = function (tweet) {
    const $tweet = $('<article>');
    $tweet.addClass('tweet');
    const html = $(
      `<header>
            <h4 class="tweet-name"><i class="fas fa-user-ninja"></i> ${tweet.user.name}</h4>
            <h4 class='tweet-handle'>${tweet.user.handle}</h4>
          </header>
          <p>${escape(tweet.content.text)}
          </p>
          <footer>
            <p >
              Posted <time id="post1" class="timeago">${$.timeago(tweet.created_at)} </time>
            </p>
            <p class="icons">
              <button class="icon-btn">
                <i class="fas fa-flag"></i>
              </button>
              <button class="icon-btn">
                <i class="fas fa-retweet"></i>
              </button>
              <button class="icon-btn">
                <i class="fas fa-heart"></i>
              </button>
            </p>
          </footer>
  `);
    $tweet.append(html);
    return $tweet;
  }


  const renderTweets = function (tweets) {
    tweets.forEach(tweet => {
      $('.old-tweets-container').prepend(createTweetElement(tweet));
    })

  }


  // Post to server
  $(".form").submit(function (event) {
    event.preventDefault();
    $('.error-container').slideUp();

    if (($(".text-area").val().length) > 140) {
      $('.error-container').slideDown('fast').addClass('error fas fa-exclamation-triangle').text('Characters have exceeded the limit.');

    } else if (($(".text-area").val().length) === 0) {
      $('.error-container').slideDown('fast').addClass('error fas fa-exclamation-triangle').text('Please enter a tweet.');

    } else {
      $.ajax({
        url: "/tweets/",
        method: 'POST',
        data: $(this).serialize()
      })

        .done(function () {
          $('.text-area').val('');
          loadTweets();
        })
    }

  })


  const loadTweets = function () {
    console.log('Button clicked, performing ajax call...');
    $.ajax({
      url: "/tweets",
      method: "GET",
      success: function (tweets) {
        renderTweets(tweets);
      }
    })

  }
  loadTweets();

})



