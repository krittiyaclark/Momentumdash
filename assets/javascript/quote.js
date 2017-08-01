$(document).ready(function() {

    function getQuote() {
       $.ajax({
           url: "https://api.forismatic.com/api/1.0/?",
           dataType: "jsonp",
           data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
           type: 'GET',
           success: function(data) {
               console.log(data);
           },
        }); // end ajax
    } // end getQuote
}); // end function