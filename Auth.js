document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  // Simple validation (demo purpose)
  if (email === "" || password === "") {
    alert("Please fill all fields");
    return;
  }

  if (email === "ad4118324@gmail.com" && password === "123456") {
  alert("Login successful!");
  window.location.href = "Main/index.html";
  } else {
    alert("Invalid credentials");
  }
});