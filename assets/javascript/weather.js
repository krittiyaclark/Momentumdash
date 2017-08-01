window.onload = function() {

    var latitude;
    var longitude;
    var url;

    if (navigator.geolocation) {
    
        navigator.geolocation.getCurrentPosition(function(position) {    
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;    
            var url = "https://fcc-weather-api.glitch.me/api/current?lat="+latitude+"&lon="+longitude;
    
            $.getJSON(url, function(data) {
                var city = data.name;
                var temperatureK = data.main.temp;
                document.getElementById("cityselector").innerHTML = city;
            })    
        }); 
      
    } 

}