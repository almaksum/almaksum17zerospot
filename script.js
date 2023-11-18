function displayTime() {
  const now = new Date();
  const options = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  const TimeString = now.toLocaleString(undefined, options);
  document.querySelector(".time").textContent = TimeString;
}

// Callback Function
displayTime();
setInterval(displayTime, 1000);

function displayDate() {
  const now = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const DateString = now.toLocaleDateString(undefined, options);
  document.querySelector(".date").textContent = DateString;
}

// Callback Function
displayDate();
setInterval(displayDate, 1000);
