// Typing Animation Effect
const roles = [
  "CyberShield Developer",
  "Java & Full-Stack Developer",
  "Cyber Security Enthusiast",
  "Problem Solver"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 50;
const holdTime = 1500;

const typingElement = document.getElementById("typing");

function handleTyping() {
  if (!typingElement) return;

  const currentRole = roles[roleIndex];

  if (isDeleting) {
    typingElement.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingElement.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
  }

  let nextDelay = isDeleting ? deletingSpeed : typingSpeed;

  if (!isDeleting && charIndex === currentRole.length) {
    nextDelay = holdTime;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    nextDelay = 500;
  }

  setTimeout(handleTyping, nextDelay);
}

// Mobile Menu Toggle Logic
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });
}

// CLI Terminal Logic with Mobile Touch Support
const termInput = document.getElementById("terminal-input");
const termOutput = document.getElementById("terminal-output");
const termSubmitBtn = document.getElementById("terminal-submit-btn");
const chipBtns = document.querySelectorAll(".chip-btn");

const commands = {
  help: "Available commands: <span class='term-cmd'>cybershield</span>, <span class='term-cmd'>experience</span>, <span class='term-cmd'>skills</span>, <span class='term-cmd'>projects</span>, <span class='term-cmd'>contact</span>, <span class='term-cmd'>clear</span>",
  cybershield: "CyberShield: Intelligent threat detection system featuring DNS quarantine & ML threat scoring.",
  experience: "Gen AI Intern @ Bharat Unnati (Learners Byte) - Built LLM workflows & prompt tools.",
  skills: "Skills: Java, JavaScript, Python, React, Node.js, Network Security, Gen AI",
  projects: "Projects: CyberShield (Flagship), SecureSurf, Hunt, Quick Bill, Memory Game",
  contact: "Email: harshakumardhk2484@gmail.com | LinkedIn: linkedin.com/in/harshakumard | GitHub: github.com/hkdprojects"
};

function executeCommand(inputVal) {
  const cleanCmd = inputVal.trim().toLowerCase();
  if (!cleanCmd || !termOutput) return;

  // Echo Command
  const cmdLine = document.createElement("p");
  cmdLine.className = "term-line";
  cmdLine.innerHTML = `<span class="prompt">&gt;</span> ${cleanCmd}`;
  termOutput.appendChild(cmdLine);

  // Output Response
  const responseLine = document.createElement("p");
  responseLine.className = "term-line";

  if (cleanCmd === "clear") {
    termOutput.innerHTML = "";
  } else if (commands[cleanCmd]) {
    responseLine.innerHTML = commands[cleanCmd];
    termOutput.appendChild(responseLine);
  } else {
    responseLine.innerHTML = `Command not recognized: '${cleanCmd}'. Tap a chip above or type <span class='term-cmd'>'help'</span>.`;
    termOutput.appendChild(responseLine);
  }

  // Smooth scroll to bottom
  termOutput.scrollTop = termOutput.scrollHeight;
}

if (termInput) {
  // Keypress listener
  termInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      executeCommand(termInput.value);
      termInput.value = "";
      termInput.blur();
    }
  });

  // Auto-scroll screen to widget when keyboard opens on mobile
  termInput.addEventListener("focus", function () {
    setTimeout(() => {
      termInput.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 300);
  });
}

if (termSubmitBtn) {
  termSubmitBtn.addEventListener("click", function () {
    executeCommand(termInput.value);
    termInput.value = "";
  });
}

chipBtns.forEach(btn => {
  btn.addEventListener("click", function () {
    const cmd = this.getAttribute("data-cmd");
    executeCommand(cmd);
  });
});

document.addEventListener("DOMContentLoaded", handleTyping);