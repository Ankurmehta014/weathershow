const hand = document.getElementById("clock-hand");
const realTimeDisplay = document.getElementById("real-time"); 
let currentHour = 12;

function updateRealTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  realTimeDisplay.textContent = `Current Time: ${hours
    .toString()
    .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
  const angle = (hours % 12) * 30 + minutes / 2; // 30 degrees per hour, 0.5 degrees per minute
  hand.style.transform = `rotate(${angle}deg)`;
}

setInterval(updateRealTime, 1000); // Update real-time every second

updateRealTime();
