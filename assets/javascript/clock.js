$(document).ready(function() {

    $(function callTime() {

        var date = new Date();
        //time = date.toLocaleTimeString();
        var hour = date.getHours() +12;
        var min = date.getMinutes();
        
        // min = (min 12) ? hour - 12 : hour;
        // hour = (hour == 0) ? 12 : hour;

        // var currentTime = hour + ':' + min + '' + timeOfDay;

        time = date.toLocaleTimeString();
        $('#time').html(time);
        console.log(hour);
    });

    setInterval(1000);
});