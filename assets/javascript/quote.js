$(document).ready(function() {


    function getQuote() {
       var url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
       $.getJSON(url, function(data) {
           console.log(data);

           $('#quotation').append(" \ " + data.quoteText);
           $('#author').append("-- " + data.quoteAuthor);
       }); // end getJSON
    }; // end getQuote


    $('.tweet-icon').hide(function() {
       $('#quotation').mouseover(function() {
           $('.tweet-icon').toggle(function() {
               $('#share-quote').click(function () {
                   
                   var tweetQuote = $('#quotation').html();
                   var tweetAuthor = $('#author').html();
                   var url = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(tweetQuote + "\n" + tweetAuthor);
                   window.open(url)
               }); // end share-quote
           }); // end tweet-icon

        }); // end quotation
    }); // end tweet-icon
    
    
    getQuote();
}); // end function
