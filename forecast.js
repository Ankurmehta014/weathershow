// Function to update the time and temperature values (next 8 hours)
function updateTimeTempValues(data) {
  const hourlyData = data.list.slice(0, 8);
  const temperatures = hourlyData.map((item) => Math.round(item.main.temp));
  const weatherConditions = hourlyData.map((item) => item.weather[0].main);

  const timeTempContainer = document.getElementById("timeTempValues");
  timeTempContainer.innerHTML = predefinedTimes
    .map(
      (time, index) => `
<div class="time-temp-block">
<div class="time-label">${time}</div>
<div class="weather-icon">${getWeatherEmoji(weatherConditions[index])}</div>
<div class="temp-label">${temperatures[index]}°C</div>
</div>
`
    )
    .join("");
}

// Function to get the weather emoji based on the condition
function getWeatherEmoji(condition) {
  switch (condition.toLowerCase()) {
    case "clear":
      return "🌞"; // Sunny
    case "clouds":
      return "☁️"; // Cloudy
    case "rain":
      return "🌧️"; // Rainy
    case "thunderstorm":
      return "⛈️"; // Thunderstorm
    case "snow":
      return "❄️"; // Snow
    case "mist":
      return "🌫️"; // Foggy/Misty
    default:
      return "🌈"; // Default
  }
}
