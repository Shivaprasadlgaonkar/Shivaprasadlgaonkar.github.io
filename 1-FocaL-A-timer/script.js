// Small, real interaction: the hero timer visually ticks down when "started",
// demonstrating DOM + SVG manipulation without external libraries.
(function () {
  const ring = document.getElementById("ringEl");
  const label = document.getElementById("timeLabel");
  const hint = document.getElementById("statusHint");
  const circumference = 2 * Math.PI * 45;
  let totalSeconds = 25 * 60;
  let remaining = totalSeconds;
  let intervalId = null;

  function render() {
    const mins = Math.floor(remaining / 60)
      .toString()
      .padStart(2, "0");
    const secs = (remaining % 60).toString().padStart(2, "0");
    label.textContent = `${mins}:${secs}`;
    const progress = remaining / totalSeconds;
    ring.style.strokeDashoffset = circumference * (1 - progress);
  }

  function start() {
    if (intervalId) return; // already running, ignore double-start
    hint.textContent = "Session running — try switching tabs.";
    intervalId = setInterval(() => {
      remaining -= 1;
      if (remaining <= 0) {
        clearInterval(intervalId);
        intervalId = null;
        remaining = totalSeconds;
        hint.textContent = "Session complete. Nice work.";
      }
      render();
    }, 1000);
  }

  // The core "honesty" mechanic: leaving the tab breaks the session.
  document.addEventListener("visibilitychange", () => {
    if (document.hidden && intervalId) {
      clearInterval(intervalId);
      intervalId = null;
      remaining = totalSeconds;
      render();
      hint.textContent = "Session interrupted — you switched tabs.";
    }
  });

  document.getElementById("startBtn").addEventListener("click", start);
  document.getElementById("startBtn2").addEventListener("click", () => {
    document
      .getElementById("startBtn")
      .scrollIntoView({ behavior: "smooth", block: "center" });
    start();
  });

  ring.style.strokeDasharray = circumference;
  render();
})();
