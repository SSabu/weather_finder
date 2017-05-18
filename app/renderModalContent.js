const WEATHER_IMAGE_DICTIONARY = {800:'sunny.jpg', 801:'few_clouds.jpg', 802:'scattered_clouds.jpg', 803:'broken_clouds.jpg', 804:'overcast.jpg', 500:'light_rain.jpg', 501:'moderate_rain.jpg', 502:'heavy_rain.jpg', 300:'light_rain.jpg', 200:'thunderstorm.jpg', 600: 'snow.jpg', 701: 'atmosphere.jpg', 900:'toronado.jpg', 602: 'heavy_snow.jpg', 601: 'heavy_snow.jpg', 611: 'sleet.jpg', 622: 'heavy_snow.jpg', 621: 'snow.jpg', 615: 'sleet.jpg', 616: 'sleet.jpg', 762: 'atmosphere.jpg', 711: 'atmosphere.jpg', 741: 'atmosphere.jpg', 731: 'atmosphere.jpg', 781: 'toronado.jpg', 902:'hurricane.jpg', 901:'tropical_storm.jpg', 957:'winds.jpg', 958:'winds.jpg', 959:'winds.jpg', 962:'hurricane.jpg', 201:'thunderstorm.jpg', 202:'thunderstorm.jpg', 232:'thunderstorm.jpg', 212:'thunderstorm.jpg', 301:'light_rain.jpg', 311:'light_rain.jpg', 321:'light_rain.jpg'};

const DAYS = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday', 'Saturday'];

function toCelsius(Forecast){
  return Math.round(Forecast.main.temp - 273.15);
}

function toFahrenheit(Forecast){
  return Math.round( (Forecast.main.temp*(9/5)) - 459.67);
}

function getDayOfWeek(Forecast){
  return DAYS[new Date(Forecast.dt_txt).getDay()];
}

function getWeatherImage(Forecast){
  return WEATHER_IMAGE_DICTIONARY[Forecast.weather[0].id];
}

function renderModalContent(fiveDayForecast) {
  let html = '';
  fiveDayForecast.forEach(singleDayForecast => {
    html += `
    <h5 class="day">${getDayOfWeek(singleDayForecast)}<h5>
    <div class="row">
      <div class="card">
        <div class="card-image">
          <img src="images/backgrounds/${getWeatherImage(singleDayForecast)}" />
          <div class="card-title">
          ${toFahrenheit(singleDayForecast)}&#8457;/ ${toCelsius(singleDayForecast)}&#8451;, ${singleDayForecast.weather[0].description}
          </div>
        </div>
      </div>
    </div>
    `;
  });
  return html;
}

module.exports = renderModalContent;
