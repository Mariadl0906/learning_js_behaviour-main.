"use strict";

const body = document.body;

function updateBackground() {
  const width = window.innerWidth; // innerWidth i browser vinduet (browserens indvendige bredde) gemmes i variablen width
  if (width < 480) {
    body.style.background = "purple";
  } else if (width < 760) {
    body.style.background = "yellow";
  } else if (width < 960) {
    body.style.background = "blue";
  } else if (width < 1024) {
    body.style.background = "red";
  } else if (width < 1200) {
    body.style.background = "green";
  } else {
    body.style.background = "lightgray";
  }
}
// Kør ved load
updateBackground();

// Kør igen når vinduet ændres
window.addEventListener("resize", updateBackground);
