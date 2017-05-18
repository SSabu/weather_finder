const WEATHER_SERVICE_BASE_URL = 'http://api.openweathermap.org/data/2.5/forecast';
const WEATHER_SERVICE_API_KEY = '1874c7f69da6d4ee2d9d0493d0c03e9f';

class WeatherService {
  _sanitizeQuery(query) {
    // return a sanitized query string
    return query.replace(/\s/g, '');
  }

  _createUrl(query) {
    // return the url
    return `${WEATHER_SERVICE_BASE_URL}?q=${query}&appid=${WEATHER_SERVICE_API_KEY}`
  }

  getFiveDayForecast(query) {
    query = this._sanitizeQuery(query);
    return fetch(this._createUrl(query))
      .then(response => response.json())
      // massage data
      .then(weatherMeasurements => weatherMeasurements.list.filter((element, index) => index % 8 === 0))
  }
}

module.exports = WeatherService;
