// Dark Mode Toggle
const toggleBtn = document.getElementById("darkModeToggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark");
    body.classList.toggle("light");
    
    // Change icon
    toggleBtn.textContent = body.classList.contains("dark") ? "☀️" : "🌙";
});

// Set initial mode
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    body.classList.add("dark");
} else {
    body.classList.add("light");
}
