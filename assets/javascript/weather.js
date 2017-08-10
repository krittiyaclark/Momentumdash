window.onload = function() {

    var tempD;
    var tempC;
    var tempF;

    if (navigator.geolocation) {
    
        navigator.geolocation.getCurrentPosition(function(position) {    
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;    
            var url = "https://fcc-weather-api.glitch.me/api/current?lat="+latitude+"&lon="+longitude;
    
            $.getJSON(url, function(data) {
                var city = data.name;
                tempD = data.main.temp;
                tempC = Math.round(tempD) + "&#176;";
                tempF = Math.round(tempD * 1.8 + 32) + "&#176;";
                var mainDescrip = data.weather[0].main;

                document.getElementById("cityId").innerHTML = city;

                document.getElementById("tempId").innerHTML = tempF;   
                               
                switch (mainDescrip) {
                    case "Clear":
                    document.getElementById("weatherIcon").src = "https://res.cloudinary.com/t3unfxn28/image/upload/v1501813445/Momentum/simple_weather_icon_01.png";
                    break;
                    case "Clouds":
                    document.getElementById("weatherIcon").src = "https://res.cloudinary.com/t3unfxn28/image/upload/v1501813445/Momentum/simple_weather_icon_06.png";
                    break;
                    case "Atmosphere":
                    document.getElementById("weatherIcon").src = "https://res.cloudinary.com/t3unfxn28/image/upload/v1501813445/Momentum/simple_weather_icon_10.png";
                    break;
                    case "Drizzle":
                    document.getElementById("weatherIcon").src = "https://res.cloudinary.com/t3unfxn28/image/upload/v1501813445/Momentum/simple_weather_icon_22.png";
                    break;
                    case "Rain":
                    document.getElementById("weatherIcon").src = "https://res.cloudinary.com/t3unfxn28/image/upload/v1501813445/Momentum/simple_weather_icon_23.png";
                    break;
                    case "Thunderstorm":
                    document.getElementById("weatherIcon").src = "https://res.cloudinary.com/t3unfxn28/image/upload/v1501813445/Momentum/simple_weather_icon_27.png";
                    break;
                    case "Snow":
                    document.getElementById("weatherIcon").src = "https://res.cloudinary.com/t3unfxn28/image/upload/v1501813445/Momentum/simple_weather_icon_24.png";
                    break;
                    case "Extreme":
                    document.getElementById("weatherIcon").src = "https://res.cloudinary.com/t3unfxn28/image/upload/v1501813445/Momentum/simple_weather_icon_24.png";
                    break;
                    case "Additional":
                    document.getElementById("weatherIcon").src = "https://res.cloudinary.com/t3unfxn28/image/upload/v1501813445/Momentum/simple_weather_icon_03.png";
                    break;
                    default:
                    document.getElementById("weatherIcon").src = "https://res.cloudinary.com/t3unfxn28/image/upload/v1501813445/Momentum/simple_weather_icon_01.png";
                } 
            
                $('#temp-checkbox').change(function() {
                    if (this.checked) {
                        document.getElementById("tempId").innerHTML = tempC;
                    } else document.getElementById("tempId").innerHTML = tempF;
                })

                $('.settings-dropup').click(function(e) {
                    e.stopPropagation();
                })     

            }) // .getJSON        
        }) // .getCurrentPosition
    } // if (navigator.geolocation)

    /* Show/Hide Weather */
    $('#weather-checkbox').change(function(){
        if(this.checked) {
            $('.col-sm-2').hide();
        } else $('.col-sm-2').show();
    })
     
} // window.onload