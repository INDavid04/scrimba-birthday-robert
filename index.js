// Set your specific date and time here (YYYY-MM-DDTHH:MM:SS)
const startDate = new Date("1992-08-04T00:00:00").getTime();
const counterElement = document.getElementById("seconds");

function updateSeconds() {
  const now = new Date().getTime();
  const totalSeconds = Math.floor((now - startDate) / 1000);
  const formatted = totalSeconds.toLocaleString();

  // Animăm doar dacă numărul s-a schimbat efectiv
  if (counterElement.textContent !== formatted) {
    counterElement.textContent = formatted;
    
    // Resetăm animația CSS instant
    counterElement.classList.remove("bday-tick");
    void counterElement.offsetWidth; // Forțează browserul să reîmprospăteze elementul
    counterElement.classList.add("bday-tick");
  }
}

// Run immediately and update every 1 second
updateSeconds();
setInterval(updateSeconds, 1000);
