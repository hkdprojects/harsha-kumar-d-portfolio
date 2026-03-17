const text = ["Intermediate Java DSA skills", "Full-stack Node/React", "Aspiring cybersecurity professional","Basic Docker/Kubernetes knowledge"];
let index = 0;
let charIndex = 0;
const speed = 100;

function typeEffect() {
  if (charIndex < text[index].length) {
    document.getElementById("typing").innerHTML += text[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, speed);
  } else {
    setTimeout(eraseEffect, 850);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    document.getElementById("typing").innerHTML = text[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, speed);
  } else {
    index = (index + 1) % text.length;
    setTimeout(typeEffect, 500);
  }
}

typeEffect();
