// Hardcoded user data
const user = {
  username: "admin",
  password: "1234",
};

// Helper: Show a particular screen
function showScreen(id) {
  document
    .querySelectorAll(".container")
    .forEach((c) => (c.style.display = "none"));
  document.getElementById(id).style.display = "block";
}

// Login logic
function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  if (username === user.username && password === user.password) {
    message.style.color = "lightgreen";
    message.textContent = "Login successful!";
    setTimeout(() => showScreen("dashboard"), 700);
  } else {
    message.style.color = "red";
    message.textContent = "Invalid credentials";
  }
}

// Navigation
function logout() {
  showScreen("login-screen");
  document.getElementById("message").textContent = "";
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
}

function goToInfo() {
  showScreen("info-screen");
}

function goToDashboard() {
  showScreen("dashboard");
}
