const countdownElement = document.getElementById('countdown');
const targetDate = new Date('November 17, 2025 00:00:00').getTime();


function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownElement.innerHTML = `🎉 ${days}d ${hours}h ${minutes}m ${seconds}s left until your special day! 🎉`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

window.addEventListener("load", () => {
  const audio = document.getElementById("bg-music");

  // ✅ Start song from 41 seconds
  const startTime = 41;

  audio.addEventListener("loadedmetadata", () => {
    audio.currentTime = startTime;
  });

  audio.play().catch(() => {
    // Agar autoplay block ho gaya ho to ek button show karenge
    const btn = document.createElement("button");
    btn.textContent = "▶️ Play Music";
    btn.style.position = "fixed";
    btn.style.top = "20px";
    btn.style.right = "20px";
    btn.style.padding = "10px 15px";
    btn.style.fontSize = "18px";
    btn.style.borderRadius = "10px";
    btn.style.background = "#cc0066";
    btn.style.color = "#fff";
    document.body.appendChild(btn);

    btn.addEventListener("click", () => {
      audio.currentTime = startTime; // click hone par bhi 41 sec se start
      audio.play();
      btn.remove();
    });
  });
});