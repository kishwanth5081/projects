function updateClock() {
  const clockElement = document.getElementById("clock");
  const now = new Date();
  const formattedTime = now.toLocaleTimeString(); // e.g., 10:42:08 AM
  clockElement.textContent = formattedTime;
}

setInterval(updateClock, 1000); // Refresh every second
updateClock(); // Display time immediately on load