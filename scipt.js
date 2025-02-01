document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("darkModeToggle");
    const body = document.body;

    // Check if dark mode was previously enabled
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
    }

    toggleButton.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        // Save preference in localStorage
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
        } else {
            localStorage.setItem("dark-mode", "disabled");
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const backToTop = document.getElementById("back-to-top");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    backToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

document.addEventListener("mousemove", function (e) {
    const trail = document.createElement("div");
    trail.classList.add("trail");
    document.body.appendChild(trail);
    trail.style.left = `${e.pageX}px`;
    trail.style.top = `${e.pageY}px`;
    setTimeout(() => trail.remove(), 500);
});
