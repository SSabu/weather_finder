const WeatherService = require('./WeatherService');
const renderModalContent = require('./renderModalContent');

function getCityTitle(query) {
  return query.split(' ').map(w => w[0].toUpperCase() + w.substr(1).toLowerCase()).join(' ');
}

$(document).ready(function() {
  $('#subButton').click(function() {
    let query = document.querySelector('#cityField').value;
    const weatherService = new WeatherService();
    weatherService.getFiveDayForecast(query).then(fiveDayForecast => {
      $('.modal').openModal('open');
      $('.modal-title').text(`The 5-day weather snapshot for ${getCityTitle(query)}:`);
      $('#weather').empty().html(renderModalContent(fiveDayForecast));
    });
  });
});
