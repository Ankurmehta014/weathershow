// Function to update the weather cards based on fetched data
function updateWeatherCards(data) {
  // Extracting data for various cards
  const aqi = data.list[0].main.aqi || 178;
  const uvIndex = 0;
  const feelsLike = data.list[0].main.feels_like;
  const visibility = data.list[0].visibility / 1000;
  const pressure = data.list[0].main.pressure;
  const rain = data.list[0].rain ? data.list[0].rain["12h"] || 0 : 2;
  const humidity = data.list[0].main.humidity;
  const windSpeed = data.list[0].wind.speed;

  updateCard("aqi-card", aqi, 500, [50, 100, 150]);
  updateCard("uv-card", uvIndex, 10, [2, 5, 7]);
  updateCard("feels-like-card", feelsLike, 50, [10, 30, 50]);
  updateCard("visibility-card", visibility, 10, [2, 5, 10]);
  updateCard("pressure-card", pressure, 1050, [1000, 1020, 1040]);
  updateCard("rain-card", rain, 100, [30, 60, 90]);
  updateCard("humidity-card", humidity, 100, [30, 60, 90]);
  updateCard("wind-speed-card", windSpeed, 100, [20, 40, 60]);
}

// Function to update individual weather cards dynamically
function updateCard(cardId, value, max, thresholds) {
  const card = document.getElementById(cardId);
  const bars = card.querySelectorAll(".bar");
  const valueDisplay = card.querySelector(".value");

  // Update value on card
  valueDisplay.textContent = `${value}${
    cardId === "visibility-card"
      ? " km"
      : cardId === "pressure-card"
      ? " hPa"
      : cardId === "rain-card"
      ? " %"
      : cardId === "humidity-card"
      ? "%"
      : ""
  }`;

  // Reset bars
  bars.forEach((bar) =>
    bar.classList.remove("active", "low", "medium", "high")
  );

  // Determine the color range based on value
  let rangeClass = "low";
  if (value > thresholds[1]) rangeClass = "high";
  else if (value > thresholds[0]) rangeClass = "medium";

  // Activate bars based on the range
  const activeBars = Math.min(
    Math.ceil((value / max) * bars.length),
    bars.length
  );
  for (let i = 0; i < activeBars; i++) {
    bars[i].classList.add("active", rangeClass);
  }
}
