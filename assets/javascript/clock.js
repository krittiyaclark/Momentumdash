$(document).ready(function() {

    function callTime() {

        var date = new Date();
        
        var hour = date.getHours();
        var min = date.getMinutes();

        if ( hour > 12 ) {
           hour = hour - 12;
        } 

        if ( min < 10 ) {
            min = '0' + min;
        }
        var time = hour + ':' + min;
        
        $('#time').html(time);
        

        //hour = 8;
        if ( date.getHours() < 12 ) {
            $('.period').html('morning,');
        } else {
            $('.period').html('evening,');
        }
    }; // end callTime

    function load() {
        var name = localStorage.getItem('greetingName');

        if (name) {
            $('.name').html(name);
            callTime();
            setInterval(callTime, 1000);
            $('.clock').show();
            $('#greeting').show();
            $('#center-box').hide();
        } else {
            $('.clock').hide();
            $('#greeting').hide();
            $('#center-box').show();
        }
    } // end load

    $('#greeting-form').keypress(function (e) {
        if (e.which == 13) {
            e.preventDefault();
            var newName = $('#greeting-form').val();
            localStorage.setItem('greetingName', newName);
            $('#greeting-form').submit();
            // use `localStorage.clear()` to reset the name 
            //localStorage.clear();
            console.log(newName);
            load();
        }
    }); 

    load();
}); // end document.ready