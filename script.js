// ===============================
// MOBILE MENU
// ===============================

const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

function closeMenu() {
    if (!nav || !menuButton) {
        return;
    }

    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");

    const icon = menuButton.querySelector("i");

    if (icon) {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
}

if (menuButton && nav) {

    menuButton.addEventListener("click", function () {

        const isOpen = nav.classList.toggle("open");

        menuButton.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        const icon = menuButton.querySelector("i");

        if (icon) {
            icon.classList.toggle("fa-bars", !isOpen);
            icon.classList.toggle("fa-xmark", isOpen);
        }
    });


    // Close menu when a navigation link is clicked

    const navLinks = nav.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {
            closeMenu();
        });
    });
}


// ===============================
// CURRENT YEAR
// ===============================

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// ===============================
// ACTIVE NAVIGATION
// ===============================

const sections = document.querySelectorAll("section[id]");
const navigationLinks = document.querySelectorAll("nav a");

function updateActiveNavigation() {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 160;
        const sectionBottom =
            sectionTop + section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {
            currentSection = section.id;
        }
    });


    navigationLinks.forEach(function (link) {

        link.classList.remove("active");

        const target = link.getAttribute("href");

        if (target === "#" + currentSection) {
            link.classList.add("active");
        }
    });
}

window.addEventListener(
    "scroll",
    updateActiveNavigation,
    { passive: true }
);

window.addEventListener(
    "resize",
    updateActiveNavigation
);

updateActiveNavigation();


// ===============================
// SMOOTH SCROLL
// ===============================

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = link.getAttribute("href");

        if (!targetId || !targetId.startsWith("#")) {
            return;
        }

        const targetElement =
            document.querySelector(targetId);

        if (!targetElement) {
            return;
        }

        event.preventDefault();

        targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});


// ===============================
// IMAGE ERROR CHECK
// ===============================

const profileImage =
    document.querySelector(".photo-container img");

const projectImage =
    document.querySelector(".project-visual img");

if (profileImage) {

    profileImage.addEventListener("error", function () {

        console.error(
            "Profile image not found: assets/profile.jpg"
        );
    });
}

if (projectImage) {

    projectImage.addEventListener("error", function () {

        console.error(
            "Project image not found: assets/intrusion-detection.png"
        );
    });
}


// ===============================
// BUTTON CLICK FEEDBACK
// ===============================

const buttons = document.querySelectorAll(
    ".button, .linkedin-button, .project-link"
);

buttons.forEach(function (button) {

    button.addEventListener("click", function () {

        button.style.transform = "scale(0.97)";

        setTimeout(function () {
            button.style.transform = "";
        }, 150);
    });
});


// ===============================
// CLOSE MENU ON RESIZE
// ===============================

window.addEventListener("resize", function () {

    if (window.innerWidth > 900) {
        closeMenu();
    }

    updateActiveNavigation();
});


// ===============================
// CLOSE MENU WITH ESCAPE
// ===============================

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
        closeMenu();
    }
});