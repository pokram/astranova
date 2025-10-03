function startCountdown(durationInSeconds) {
    let timer = durationInSeconds;
    const timerElement = document.getElementById("timer");
  
    const interval = setInterval(() => {
      const days = Math.floor(timer / 86400);
      const hours = Math.floor((timer % 86400) / 3600);
      const minutes = Math.floor((timer % 3600) / 60);
      const seconds = timer % 60;
  
      const formatted =
        String(days).padStart(2, "0") + "D  " +
        String(hours).padStart(2, "0") + "H  " +
        String(minutes).padStart(2, "0") + "M  " +
        String(seconds).padStart(2, "0") + "S";
  
      timerElement.textContent = formatted;
  
      if (--timer < 0) {
        clearInterval(interval);
        timerElement.textContent = "TIME'S UP!";
      }
    }, 1000);
  }
  
  startCountdown(5 * 86400 + 2 * 3600 + 3 * 60 + 5);