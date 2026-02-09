const text = ["Full Stack Developer", "Node.js & React Developer", "Cybersecurity Enthusiast"];
let index = 0;
let charIndex = 0;
const speed = 100;

function typeEffect() {
  if (charIndex < text[index].length) {
    document.getElementById("typing").innerHTML += text[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, speed);
  } else {
    setTimeout(eraseEffect, 1500);
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
