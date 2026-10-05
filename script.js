/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

if (menuButton && nav) {

    menuButton.addEventListener("click", function () {

        nav.classList.toggle("open");

        const icon = menuButton.querySelector("i");

        if (icon) {

            if (nav.classList.contains("open")) {

                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        }

    });


    /* Close menu after clicking a navigation link */

    const navLinks = nav.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            nav.classList.remove("open");

            const icon = menuButton.querySelector("i");

            if (icon) {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        });

    });

}



/* =====================================================
   CURRENT YEAR
===================================================== */

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}



/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections = document.querySelectorAll("section[id]");
const navigationLinks = document.querySelectorAll("nav a");


function updateActiveNavigation() {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 180;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navigationLinks.forEach(function (link) {

        link.classList.remove("active");

        const linkTarget = link.getAttribute("href");

        if (linkTarget === "#" + currentSection) {

            link.classList.add("active");

        }

    });

}


window.addEventListener("scroll", updateActiveNavigation);

updateActiveNavigation();



/* =====================================================
   SMOOTH SCROLL
===================================================== */

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = link.getAttribute("href");

        if (
            targetId &&
            targetId.startsWith("#")
        ) {

            const targetElement =
                document.querySelector(targetId);

            if (targetElement) {

                event.preventDefault();

                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }

    });

});



/* =====================================================
   IMAGE CHECK
===================================================== */

const profileImage =
    document.querySelector(".photo-container img");


if (profileImage) {

    profileImage.addEventListener("error", function () {

        console.error(
            "Profile image not found. Make sure your photo is here: assets/profile.jpg"
        );

    });

}


const projectImage =
    document.querySelector(".project-visual img");


if (projectImage) {

    projectImage.addEventListener("error", function () {

        console.error(
            "Project image not found. Make sure your image is here: assets/intrusion-detection.png"
        );

    });

}