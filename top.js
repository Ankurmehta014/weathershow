// Function to update the top section
function updateTopSection(data) {
  const cityName = data.city.name;
  const sunriseTime = new Date(data.city.sunrise * 1000).toLocaleTimeString();
  const sunsetTime = new Date(data.city.sunset * 1000).toLocaleTimeString();
  const currentTemp = Math.round(data.list[0].main.temp);
  const currentWeather = data.list[0].weather[0].main.toLowerCase();

  document.getElementById("current-city").textContent = cityName;
  document.getElementById("sunrise").textContent = `Sunrise: ${sunriseTime}`;
  document.getElementById("sunset").textContent = `Sunset: ${sunsetTime}`;
  document.querySelector(".current-temp h1").textContent = `${currentTemp}°C`;
  document.getElementById("current-weather").textContent = currentWeather;

  // Start appropriate animation based on current weather
  if (currentWeather.includes("snow")) {
    startSnowfall();
  } else if (currentWeather.includes("rain")) {
    startRainfall();
  } else {
    stopSnowfall();
    stopRainfall();
  }
}
