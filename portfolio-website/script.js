// =========================
// DARK MODE TOGGLE
// =========================

const darkModeBtn =
    document.getElementById("darkModeToggle");

darkModeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    // Save preference
    if (document.body.classList.contains("dark-mode")) {

        localStorage.setItem(
            "darkMode",
            "enabled"
        );

        darkModeBtn.innerHTML =
            "☀️ Light Mode";

    } else {

        localStorage.setItem(
            "darkMode",
            "disabled"
        );

        darkModeBtn.innerHTML =
            "🌙 Dark Mode";
    }
});

// Load Saved Theme

window.addEventListener("load", () => {

    const savedMode =
        localStorage.getItem("darkMode");

    if (savedMode === "enabled") {

        document.body.classList.add(
            "dark-mode"
        );

        darkModeBtn.innerHTML =
            "☀️ Light Mode";
    }
});

// =========================
// FORM VALIDATION
// =========================

const form =
    document.getElementById("contactForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("name")
        .value.trim();

    const email =
        document.getElementById("email")
        .value.trim();

    const message =
        document.getElementById("message")
        .value.trim();

    const formMessage =
        document.getElementById("formMessage");

    // Name Validation

    if (name === "") {

        formMessage.innerHTML =
            "Please enter your name.";

        formMessage.style.color = "red";

        return;
    }

    // Email Validation

    if (!email.includes("@")) {

        formMessage.innerHTML =
            "Please enter a valid email.";

        formMessage.style.color = "red";

        return;
    }

    // Message Validation

    if (message.length < 10) {

        formMessage.innerHTML =
            "Message must contain at least 10 characters.";

        formMessage.style.color = "red";

        return;
    }

    // Success Message

    formMessage.innerHTML =
        "Message sent successfully!";

    formMessage.style.color = "limegreen";

    // Clear Form

    form.reset();
});

// =========================
// TYPING ANIMATION
// =========================

const roles = [

    "Computer Science Engineer",

    "Web Developer",

    "Machine Learning Enthusiast",

    "Data Analyst"

];

let roleIndex = 0;

let charIndex = 0;

const roleText =
    document.getElementById("typingText");

function typeEffect() {

    if (charIndex < roles[roleIndex].length) {

        roleText.innerHTML +=
            roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect, 100);

    } else {

        setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect() {

    if (charIndex > 0) {

        roleText.innerHTML =
            roles[roleIndex].substring(
                0,
                charIndex - 1
            );

        charIndex--;

        setTimeout(eraseEffect, 50);

    } else {

        roleIndex++;

        if (roleIndex >= roles.length) {

            roleIndex = 0;
        }

        setTimeout(typeEffect, 500);
    }
}

// Start Typing

typeEffect();

// =========================
// LOADER
// =========================

window.addEventListener("load", () => {

    const loader =
        document.getElementById("loader");

    loader.style.display = "none";
});

// =========================
// SCROLL ANIMATION
// =========================

const hiddenElements =
    document.querySelectorAll(".hidden");

const observer =
    new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");
        }
    });
});

hiddenElements.forEach((el) =>
    observer.observe(el)
);

// =========================
// SCROLL TO TOP BUTTON
// =========================

const scrollBtn =
    document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        scrollBtn.style.display =
            "block";

    } else {

        scrollBtn.style.display =
            "none";
    }
});

// Scroll To Top

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"
    });
});

// =========================
// ACTIVE NAVBAR
// =========================

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop;

        if (scrollY >= sectionTop - 200) {

            current =
                section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            .includes(current)
        ) {

            link.classList.add("active");
        }
    });
});