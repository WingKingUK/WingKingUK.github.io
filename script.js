document.addEventListener("DOMContentLoaded", () => {
    const modeToggle = document.getElementById("mode-toggle");

    // Load saved mode
    if (localStorage.getItem("dark-mode") === "enabled") {
        document.body.classList.add("dark-mode");
        modeToggle.textContent = "☀️";
    }

    // Toggle Light/Dark Mode
    modeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        
        if (document.body.classList.contains("dark
