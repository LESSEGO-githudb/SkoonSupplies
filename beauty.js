document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("show-menu");
    });
});



const toggleSectionBtn = document.getElementById("toggle-section");
const mySection = document.getElementById("my-section");
if (toggleSectionBtn && mySection) {
    toggleSectionBtn.addEventListener("click", function () {
        mySection.classList.toggle("hidden");
    });
}


const header = document.querySelector(".main-header");
window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});


const form = document.getElementById("contact-form");
const emailInput = document.getElementById("email");
if (form && emailInput) {
    form.addEventListener("submit", function (e) {
        if (emailInput.value.trim() === "") {
            e.preventDefault();
            emailInput.classList.add("error");
        } else {
            emailInput.classList.remove("error");
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const closeBtn = document.querySelector(".close");
    const images = document.querySelectorAll(".gallery img");

    images.forEach(img => {
        img.addEventListener("click", () => {
            modal.style.display = "block";
            modalImg.src = img.src;
            modalImg.alt = img.alt;
        });
    });

    closeBtn.onclick = function () {
        modal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});

document.getElementById("year").textContent = new Date().getFullYear();


