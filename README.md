# Stupid Easy Weather.gov
A stupidly easy jQuery way to load and display the current hour's forecast using api.weather.gov

Here are some handy questions with API endpoints to answer those questions:

## What's my Weather Forecast Office (WFO) code & WFO Gridpoint coordinates?
https://api.weather.gov/points/{LATITUDE},{LONGITUDE}


## What are the closest Stations (and their stationIdentifiers)?
https://api.weather.gov/points/{LATITUDE},{LONGITUDE}/stations

Fairly certain this shows sorted results with closest Stations first but too lazy to verify via lat/longs...


## What is the latest observation/data from a given Station?
You'll need a stationIdentifier which you can get using the previous URL.
https://api.weather.gov/stations/{ID}/observations/latest

More better (and possibly more current) details can be found at the API documentation:
https://www.weather.gov/documentation/services-web-api
