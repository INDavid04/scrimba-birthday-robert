// Set your specific date and time here (YYYY-MM-DDTHH:MM:SS)
const startDate = new Date("1992-08-04T00:00:00").getTime()
const counterElement = document.getElementById("seconds")

function updateSeconds() {
  const now = new Date().getTime()
  const totalSeconds = Math.floor((now - startDate) / 1000)
  const formatted = totalSeconds.toLocaleString()

  // Animăm doar dacă numărul s-a schimbat efectiv
  if (counterElement.textContent !== formatted) {
    counterElement.textContent = formatted
    
    // Resetăm animația CSS instant
    counterElement.classList.remove("bday-tick")
    void counterElement.offsetWidth; // Forțează browserul să reîmprospăteze elementul
    counterElement.classList.add("bday-tick")
  }
}

// Run immediately and update every 1 second
updateSeconds()
setInterval(updateSeconds, 1000)

///////////////////////////////
/// Issue 1: Count the days ///
///////////////////////////////

function calculateDays(startDate, endDate) {
  const start = new Date(startDate)
  const end = new Date(endDate)
  const days = parseInt((end - start) / (1000 * 60 * 60 * 24))
  return days
}

const countTheDaysEl = document.getElementById("countTheDays")
const today = new Date()
let todayStr = ""
let birthdayStr = ""
let message = ""
let days = 0

birthdayStr = `${today.getFullYear()}-08-04`

if (today.getMonth() < 9) {
  if (today.getDate() < 10) {
    todayStr = `${today.getFullYear()}-0${today.getMonth() + 1}-0${today.getDate()}`
  } else {
    todayStr = `${today.getFullYear()}-0${today.getMonth() + 1}-${today.getDate()}`
  }
} else {
  todayStr = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`
}

if ((today.getMonth() < 7) || (today.getMonth() === 7 && today.getDate() <= 4)) {
  if (calculateDays(todayStr, birthdayStr) === 0) {
    message = "Astazi este ziua de nastere a lui"
  } else if (calculateDays(todayStr, birthdayStr) === 1) {
    message = "Maine va fi ziua de nastere a lui"
  } else {
    message = `Peste ${calculateDays(todayStr, birthdayStr)} zile va fi ziua de nastere a lui`
  }
} else {
  birthdayStr = `${today.getFullYear() + 1}-08-04`
  message = `Peste ${calculateDays(todayStr, birthdayStr)} zile va fi ziua lui`
}

countTheDaysEl.innerHTML = message
