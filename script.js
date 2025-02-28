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

    // Auto-change testimonials every 4 seconds
    setInterval(nextTestimonial, 4000);

    // Show the first testimonial by default
    showTestimonial();
});
