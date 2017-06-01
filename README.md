Q1 Project: Weather Finder App

Everyone needs to know the weather.  You can use it for cities you live in, cities your friends or family live in, or cities you are planning to travel to.
The problem my project solves is giving a 5-day weather snapshot forecast for cities all around the world.  My project uses the Open Weather API to retrieve 5-day forecast data based on city name (e.g. San Diego), city/country (e.g. Dublin, Ireland), or city/state in the case of the US (e.g. Richmond, Virginia).

My project provides a simple web interface that allows the user to input a city for which they are interested in the 5-day forecast.  Once the user hits the "Get Weather" button, a fetch request is submitted to the Open Weather API that retrieves 5-day weather forecast data.  This request is parsed, the data is massaged, and it is used to populate a modal that provides a weather snapshot of the most recent current weather data for temperature and weather conditions, as well as the upcoming predictions for the same time of day as forecasted by Open Weather's global weather models.

I used the jQuery, the Open Weather API, Materialize CSS Framework, and the Brunch Build Tool to organize code in modules as the final step.  

Authors:  Sandeep Sabu  
