// Function to handle the search input and fetch new data
function getWeather() {
  city = document.getElementById("searchInput").value.trim() || city; // Get city from search box
  if (!city) {
    alert("Please enter a city name");
    return;
  }
  fetchWeatherData(city); // Fetch weather for the new city
}

// Fetch weather data on page load for the default city
document.addEventListener("DOMContentLoaded", function () {
  fetchWeatherData();
});

// Event listener for the search button
document.querySelector("button").addEventListener("click", getWeather);

// Event listener for search simulation (modify based on your implementation)
document.querySelector("button").addEventListener("click", () => {
  const searchInput = document.getElementById("searchInput").value.trim();
  simulateWeatherSearch(searchInput);
});
