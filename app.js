function moveButtonRandomly(e) {
  const noBtn = e.target;
  // Temporarily calculate and set exact position if not already absolute
  if (getComputedStyle(noBtn).position !== "absolute") {
    const rect = noBtn.getBoundingClientRect();
    noBtn.style.position = "absolute";
    noBtn.style.left = rect.left + "px";
    noBtn.style.top = rect.top + "px";
  }
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;
  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}

// Attach the function to both mouseover and click events
document
  .querySelector(".no-btn")
  .addEventListener("mouseover", moveButtonRandomly);
document.querySelector(".no-btn").addEventListener("click", moveButtonRandomly);
