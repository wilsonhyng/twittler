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

  // var $body = $('body');
  // $body.html('');
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

  while (index >= startIndex) {
    var tweet = streams.home[index];
    // var $tweet = $('<div></div>');
    var $tweet = $('<div />', {
      'class': 'tweet'
    });

    // make another, use time div / class to style the time $time = $('<div />', {'class': 'time'});
    // appendTo row4 after the tweet

    if (tweet.user === 'shawndrost') {



      $tweet.text('@' + tweet.user + ': ' + tweet.message + '\ Time: ' + tweet.created_at);
      $tweet.appendTo('.row1').hide().fadeIn(1000);

      // append to pop up row that keeps track of all tweets
      // replace the display row with the new tweets

      // $('.row1').empty();
      // $tweet.appendTo('.row1').hide().fadeIn(1000);
      // $tweet.appendTo('#my_popup1');


    }

    if (tweet.user === 'sharksforcheap') {

      $tweet.text('@' + tweet.user + ': ' + tweet.message + '\ Time: ' + tweet.created_at);
      $tweet.appendTo('.row2').hide().fadeIn(1000);
    }

    if (tweet.user === 'mracus') {

      $tweet.text('@' + tweet.user + ': ' + tweet.message + '\ Time: ' + tweet.created_at);
      $tweet.appendTo('.row3').hide().fadeIn(1000);
    }

    if (tweet.user === 'douglascalhoun') {

      $tweet.text('@' + tweet.user + ': ' + tweet.message + '\ Time: ' + tweet.created_at);
      $tweet.appendTo('.row4').hide().fadeIn(1000);
    }


    index -= 1;


  }

  // var startIndex = streams.home.length;

  startIndex = streams.home.length;









  setTimeout(function() {
    getNewTweets(startIndex)
  }, 10000)

}