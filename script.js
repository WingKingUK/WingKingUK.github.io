document.addEventListener("DOMContentLoaded", function () {
    const testimonials = document.querySelectorAll(".testimonial");
    let index = 0;

    function showTestimonial() {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.display = i === index ? "block" : "none";
        });
    }

    function nextTestimonial() {
        index = (index + 1) % testimonials.length;
        showTestimonial();
    }

    function prevTestimonial() {
        index = (index - 1 + testimonials.length) % testimonials.length;
        showTestimonial();
    }

    // Add navigation buttons
    const controls = document.createElement("div");
    controls.style.marginTop = "20px";
    controls.innerHTML = `
        <button id="prevTestimonial">←</button>
        <button id="nextTestimonial">→</button>
    `;
    document.querySelector(".testimonials").appendChild(controls);

    document.getElementById("nextTestimonial").addEventListener("click", nextTestimonial);
    document.getElementById("prevTestimonial").addEventListener("click", prevTestimonial);

    // Auto-change testimonials every 4 seconds
    setInterval(nextTestimonial, 4000);

    // Show the first testimonial by default
    showTestimonial();
});
