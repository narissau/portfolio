

// document.addEventListener("DOMContentLoaded", function () {
//     const toggleButton = document.getElementById("theme-toggle");
//     const body = document.body;

//     // Check if dark mode was previously enabled
//     if (localStorage.getItem("darkMode") === "enabled") {
//         body.classList.add("dark-mode");
//     }

//     toggleButton.addEventListener("click", function () {
//         body.classList.toggle("dark-mode");

//         // Save user preference in localStorage
//         if (body.classList.contains("dark-mode")) {
//             localStorage.setItem("darkMode", "enabled");
//         } else {
//             localStorage.setItem("darkMode", "disabled");
//         }
//     });
// });


document.addEventListener("DOMContentLoaded", function () {
    const greeting = document.getElementById("greeting");
    const hours = new Date().getHours();

    let message = "Welcome to my portfolio!";
    if (hours < 12) {
        message = "Good morning! Welcome to my portfolio.";
    } else if (hours < 18) {
        message = "Good afternoon! Explore my projects.";
    } else {
        message = "Good evening! Thanks for visiting.";
    }

    greeting.innerText = message;
});
