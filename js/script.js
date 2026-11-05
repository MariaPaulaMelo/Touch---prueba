const touchArea = document.getElementById("touch-area");
const counter = document.getElementById("counter");

function updateCounter(event) {
  counter.textContent = event.touches.length;
  
  if(event.touches.length == 0) {
    touchArea.style.backgroundColor = "rgb(255, 0, 0)";
  }

  if(event.touches.length == 1) {
    touchArea.style.backgroundColor = "rgb(39, 209, 68)";
  }

  if(event.touches.length == 2) {
    touchArea.style.backgroundColor = "rgb(90, 130, 216)";
  }

  if(event.touches.length == 3) {
    touchArea.style.backgroundColor = "rgb(218, 231, 32)";
  }

  if(event.touches.length == 4) {
    touchArea.style.backgroundColor = "rgb(91, 95, 49)";
  }

  if(event.touches.length == 5) {
    touchArea.style.backgroundColor = "rgb(183, 173, 216)";
  }
}

touchArea.addEventListener("touchstart", updateCounter, { passive: false });
touchArea.addEventListener("touchmove", updateCounter, { passive: false });
touchArea.addEventListener("touchend", updateCounter);
touchArea.addEventListener("touchcancel", updateCounter);
