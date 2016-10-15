// $(document).ready(function() {
//   var $body = $('body');
//   // $body.html('');

//   var index = streams.home.length - 1;
//   while (index >= 0) {
//     var tweet = streams.home[index];
//     var $tweet = $('<div></div>');
//     $tweet.text('@' + tweet.user + ': ' + tweet.message + ' / Time: ' + tweet.created_at);
//     $tweet.appendTo('.container');
//     index -= 1;
//   }

// });

// if tweet.user === user1 , put in div col 1
// if tweet.user === user2 , put in div col 2




// $(document).ready(function() {

//   // var $body = $('body');
//   // $body.html('');

//   var index = streams.home.length - 1;
//   while (index >= 0) {
//     var tweet = streams.home[index];
//     // var $tweet = $('<div></div>');
//     var $tweet = $('<div />', {'class': 'tweet'});

//     // make another, use time div / class to style the time $time = $('<div />', {'class': 'time'});
//     // appendTo row4 after the tweet

//     if (tweet.user === 'shawndrost') {

//       $tweet.text('@' + tweet.user + ': ' + tweet.message + '\ Time: ' + streams.home[index].created_at);
//       $tweet.appendTo('.row1').hide().fadeIn(1000);
//     }

//     if (tweet.user === 'sharksforcheap') {

//       $tweet.text('@' + tweet.user + ': ' + tweet.message + '\ Time: ' + tweet.created_at);
//       $tweet.appendTo('.row2').hide().fadeIn(1000);
//     }

//     if (tweet.user === 'mracus') {

//       $tweet.text('@' + tweet.user + ': ' + tweet.message + '\ Time: ' + tweet.created_at);
//       $tweet.appendTo('.row3').hide().fadeIn(1000);
//     }

//     if (tweet.user === 'douglascalhoun') {

//       $tweet.text('@' + tweet.user + ': ' + tweet.message + '\ Time: ' + tweet.created_at);
//       $tweet.appendTo('.row4').hide().fadeIn(1000);
//     }


//       index -= 1;

//   }

// });




$(document).ready(function() {

  var startIndex;
  getNewTweets(startIndex);

});





function getNewTweets(startIndex) {

  var index = streams.home.length - 1;

  if (!startIndex) {
    startIndex = 0;
  }

  console.log('This is the startIndex: ',startIndex);
  console.log('This is the index: ',index);

  // it will clear each row of tweets and replace with the new ones

  $('.row1').empty();
  $('.row2').empty();
  $('.row3').empty();
  $('.row4').empty();


  while (index >= startIndex) {
    var tweet = streams.home[index];
    var $tweet = $('<div />', {
      'class': 'tweet'
    });

    // make another, use time div / class to style the time $time = $('<div />', {'class': 'time'});
    // appendTo row4 after the tweet

    if (tweet.user === 'shawndrost') {

      $tweet.text('@' + tweet.user + ': ' + tweet.message + '\n' + tweet.created_at);
      $tweet.appendTo('.row1, #my_popup1').hide().fadeIn(1000);

    }

    if (tweet.user === 'sharksforcheap') {

      $tweet.text('@' + tweet.user + ': ' + tweet.message + '\n' + tweet.created_at);
      $tweet.appendTo('.row2, #my_popup2').hide().fadeIn(1000);
    }

    if (tweet.user === 'mracus') {

      $tweet.text('@' + tweet.user + ': ' + tweet.message + '\n' + tweet.created_at);
      $tweet.appendTo('.row3, #my_popup3').hide().fadeIn(1000);
    }

    if (tweet.user === 'douglascalhoun') {

      $tweet.text('@' + tweet.user + ': ' + tweet.message + '\n' + tweet.created_at);
      $tweet.appendTo('.row4, #my_popup4').hide().fadeIn(1000);
    }


    index -= 1;


  }

  // set the startIndex to the last index

  startIndex = streams.home.length;









  setTimeout(function() {
    getNewTweets(startIndex)
  }, 20000)

}