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
    };

    function load() {
        var name = localStorage.getItem('greetingName');

        if (name) {
            $('.name').html(name);
            callTime();
            setInterval(callTime, 1000);
            $('.clock').show();
            $('#greeting').show();
            $('#greeting-form').hide();
        } else {
            $('.clock').hide();
            $('#greeting').hide();
            $('#greeting-form').show();
        }
    }

    $('#submit-button').on('click', function () {
        var newName = $('#greeting-form').val();
        localStorage.setItem('greetingName', newName);
        // use `localStorage.clear()` to reset the name 
        load();
    });

    load();
});