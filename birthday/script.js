// Page transition
function goToMemories(e) {
  createSparkles(e);

  // delay so sparkle plays before page change
  setTimeout(() => {
    window.location.href = "memories.html";
  }, 400);
}

/* ✨ Sparkle burst */
function createSparkles(e) {
  for (let i = 0; i < 15; i++) {
    const sparkle = document.createElement("span");
    sparkle.classList.add("sparkle");

    sparkle.style.left = e.clientX + "px";
    sparkle.style.top = e.clientY + "px";

    document.body.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 600);
  }
}

// Floating hearts
setInterval(function () {
  const container = document.querySelector(".hearts");
  if (!container) return;

  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (15 + Math.random() * 20) + "px";

  container.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}, 500);

// Cinematic intro reveal
window.addEventListener("load", () => {
  setTimeout(() => {
    const intro = document.getElementById("intro");
    if (intro) {
      intro.classList.add("fade-out");
    }
  }, 3000); // duration before reveal
});