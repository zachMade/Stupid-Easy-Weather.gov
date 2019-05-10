<!--
	Source:		https://github.com/zachMade/Stupid-Easy-Weather.gov
	License: 	https://github.com/zachMade/Stupid-Easy-Weather/blob/master/LICENSE
	API info:	https://www.weather.gov/documentation/services-web-api
-->

<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/canvasjs/1.7.0/canvasjs.min.js"></script>

<script type="text/javascript">
	$( document ).ready(function() {

    // IMPORANT:
    // YOU NEED TO CHANGE my_api_url to YOUR hourly forecast API endpoint URL
    // .properties.forecastHourly
		// You can find it in the JSON at https://api.weather.gov/points/{LATITUDE},{LONGITUDE}
		// Replace {LATITUDE} with your latitude and do same for {LONGITUDE}
		
		// For example, New York City would go to https://api.weather.gov/points/40.712776,-74.005974
		// and look for the .properties.forecastHourly URL in the JSON

		// ... I may update this to happen programmatically in the future, but for my immediate need
		// I actually want the location to be hardcoded/fixed geographically
    
    
		my_api_url = 'https://api.weather.gov/gridpoints/XXX/000,00/forecast/hourly'


	$.ajax({
		type: 'GET',
		url: my_api_url,
		async: true,
		dataType: 'json',
		crossDomain: true,
		success: function (jason) {
			$( "#noaa_icon" ).attr("src", jason.properties.periods[0].icon);
			$( "#noaa_weather" ).text(jason.properties.periods[0].shortForecast);
			$( "#noaa_temp" ).text(jason.properties.periods[0].temperature + "°" + jason.properties.periods[0].temperatureUnit);
			$( "#noaa_wind" ).text(jason.properties.periods[0].windSpeed + "  " + jason.properties.periods[0].windDirection);
			$( "#noaa_time" ).text(jason.properties.updateTime);
			$( "#noaa_source" ).attr("href", "weather.gov");
      // I recommend changing the NOAA Source link to your localized weather forecast page
			// Continuing the New York City example, you could use
			// "https://forecast.weather.gov/MapClick.php?lat=40.71455000000003&lon=-74.00713999999994#.XNYHhpPYrUI"
			// instead of "weather.gov"
		},
	});
});
</script>



<div style="">
	<img id='noaa_icon' style="width:50px; height:50px;" alt="NOAA Weather Icon"/><br>
	<span id='noaa_weather'>Service</span><br>
	<span id='noaa_temp'>Unreachable</span><br>
	<span id='noaa_wind'></span><br><br>
	<span id='noaa_time' style="font-size:8px;"></span><br>
	<div style="line-height: 1;">
		<a id='noaa_source' style="font-size:8px;">Sourced from NOAA</a>
	</div>
</div>
