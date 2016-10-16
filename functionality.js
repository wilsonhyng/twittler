$(document).ready(function() {
  var startIndex;
  getNewTweets(startIndex);

  $('#bird').spriteOnHover({fps:20,loop: true,rewind: true,repeat:true});

});




function getNewTweets(startIndex) {
  var index = streams.home.length - 1;

  if (!startIndex) {
    startIndex = 0;
  }

  console.log('This is the startIndex: ',startIndex);
  console.log('This is the index: ',index);

  // it will clear each row of tweets and replace with the new ones after each call

  $('.row1').empty();
  $('.row2').empty();
  $('.row3').empty();
  $('.row4').empty();


  while (startIndex <= index) {
    var tweet = streams.home[startIndex];
    var $tweet = $('<div />', {
      'class': 'tweet'
    });

    // make another, use time div / class to style the time $time = $('<div />', {'class': 'time'});
    // appendTo row4 after the tweet

    if (tweet.user === 'shawndrost') {

      $tweet.text('@' + tweet.user + ': ' + tweet.message + '\n' + tweet.date_format);
      $tweet.clone().prependTo('.row1').hide().fadeIn(1500);
      $tweet.clone().prependTo('#my_popup1');


    }

    if (tweet.user === 'sharksforcheap') {

      $tweet.text('@' + tweet.user + ': ' + tweet.message + '\n' + tweet.date_format);
      $tweet.clone().prependTo('.row2').hide().fadeIn(1500);
      $tweet.clone().prependTo('#my_popup2');
    }

    if (tweet.user === 'mracus') {

      $tweet.text('@' + tweet.user + ': ' + tweet.message + '\n' + tweet.date_format);
      $tweet.clone().prependTo('.row3').hide().fadeIn(1500);
      $tweet.clone().prependTo('#my_popup3');
    }

    if (tweet.user === 'douglascalhoun') {

      $tweet.text('@' + tweet.user + ': ' + tweet.message + '\n' + tweet.date_format);
      $tweet.clone().prependTo('.row4').hide().fadeIn(1500);
      $tweet.clone().prependTo('#my_popup4');
    }

    startIndex += 1;

  }

  // set the startIndex to the last index

  startIndex = streams.home.length;





  // tweet hover zoom

  $('.tweet').hoverIntent(
    function() {
        $(this).animate({ 'zoom': 1.2 }, 400);
    },
    function() {
        $(this).animate({ 'zoom': 1 }, 400);
    });







  // after x seconds, run getNewTweets again with the new startIndex WITH an alert sound
  var audio = document.getElementById('audio');

  setTimeout(function() {
    getNewTweets(startIndex);
    audio.play();
  }, 40000)

}


