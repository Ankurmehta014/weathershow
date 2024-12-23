// API Key and Default City
const apiKey = "6b6fa79b7de4f3b86c78607dd9d8ede2";
let city = "Delhi"; // Default city

// Predefined times for displaying forecast
const predefinedTimes = [
  "12 AM",
  "3 AM",
  "6 AM",
  "9 AM",
  "12 PM",
  "3 PM",
  "6 PM",
  "9 PM",
];

// Function to fetch weather data from OpenWeatherMap API
async function fetchWeatherData(city = "Delhi") {
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const data = await response.json();
    updateTopSection(data);
    updateWeatherCards(data);
    updateTimeTempValues(data);
  } catch (error) {
    console.error("Failed to fetch weather data:", error);
  }
}
