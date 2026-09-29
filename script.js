// Typing effect implementation
const roles = [
  "Java & Full-Stack Developer",
  "Cybersecurity Enthusiast",
  "Building Secure Web Systems",
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

document.addEventListener("DOMContentLoaded", handleTyping);

// Interactive CLI Terminal logic
const termInput = document.getElementById("terminal-input");
const termOutput = document.getElementById("terminal-output");

const commands = {
  help: "Available commands: <span class='term-cmd'>skills</span>, <span class='term-cmd'>projects</span>, <span class='term-cmd'>contact</span>, <span class='term-cmd'>clear</span>",
  cybershield: "CyberShield: Intelligent threat detection system featuring automated DNS quarantine & real-time risk scoring.",
  skills: "Skills: Java, JavaScript, C++, React, Node.js, MySQL, MongoDB, Web Security Scoring",
  internship:"Generative AI @ Bharat Unnati(Lerners Byte) - N8N & propmt engineering",
  projects: "Projects: CyberShield (Flagship), SecureSurf, Hunt, Quick Bill, Memory Game",
  contact: "Email: harshakumardhk2484@gmail.com | LinkedIn: linkedin.com/in/harshakumard | GitHub: github.com/hkdprojects"
};

termInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const inputVal = termInput.value.trim().toLowerCase();
    termInput.value = "";

    if (!inputVal) return;

    // Create command log
    const cmdLine = document.createElement("p");
    cmdLine.className = "term-line";
    cmdLine.innerHTML = `<span class="prompt">&gt;</span> ${inputVal}`;
    termOutput.appendChild(cmdLine);

    // Process output
    const responseLine = document.createElement("p");
    responseLine.className = "term-line";

    if (inputVal === "clear") {
      termOutput.innerHTML = "";
      return;
    } else if (commands[inputVal]) {
      responseLine.innerHTML = commands[inputVal];
    } else {
      responseLine.innerHTML = `Command not recognized: '${inputVal}'. Type <span class='term-cmd'>'help'</span> for options.`;
    }

    termOutput.appendChild(responseLine);
    termOutput.scrollTop = termOutput.scrollHeight;
  }
});
