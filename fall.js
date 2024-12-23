// Function to create snowflakes
function createSnowflakes() {
  for (let i = 0; i < 10; i++) {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDelay = `${Math.random() * 3}s`;
    snowflake.style.animationDuration = `${Math.random() * 5 + 2}s`;
    document.body.appendChild(snowflake);

    // Remove snowflakes after animation ends
    snowflake.addEventListener("animationend", () => {
      snowflake.remove();
    });
  }
}

// Function to create raindrops
function createRaindrops() {
  for (let i = 0; i < 20; i++) {
    const raindrop = document.createElement("div");
    raindrop.classList.add("raindrop");
    raindrop.style.left = `${Math.random() * 100}vw`;
    raindrop.style.animationDelay = `${Math.random() * 0.5}s`;
    raindrop.style.animationDuration = `${Math.random() * 2 + 1}s`;
    document.body.appendChild(raindrop);

    // Remove raindrops after animation ends
    raindrop.addEventListener("animationend", () => {
      raindrop.remove();
    });
  }
}

// Function to start snowfall effect
function startSnowfall() {
  console.log("Starting snowfall effect...");
  const snowInterval = setInterval(createSnowflakes, 200); // Create snowflakes every 200ms

  // Stop the snowfall after 30 seconds
  setTimeout(() => {
    clearInterval(snowInterval);
    stopSnowfall();
  }, 12000); // 30 seconds
}

// Function to start rainfall effect
function startRainfall() {
  console.log("Starting rainfall effect...");
  const rainInterval = setInterval(createRaindrops, 200); // Create raindrops every 200ms

  // Play rain sound
  const rainSound = new Audio("RAIN.mp3");
  rainSound.loop = true;
  rainSound.play();

  // Stop the rainfall after 30 seconds
  setTimeout(() => {
    clearInterval(rainInterval);
    rainSound.pause();
    stopRainfall();
  }, 12000); // 30 seconds
}

// Function to stop snowfall effect
function stopSnowfall() {
  console.log("Stopping snowfall effect...");
  document
    .querySelectorAll(".snowflake")
    .forEach((element) => element.remove());
}

// Function to stop rainfall effect
function stopRainfall() {
  console.log("Stopping rainfall effect...");
  document.querySelectorAll(".raindrop").forEach((element) => element.remove());
}
