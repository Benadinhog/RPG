// ================================================
// MENU MOBILE
// ================================================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }
});


// ================================================
// FECHAR MENU AO CLICAR EM UM LINK
// ================================================

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";

    });

});


// ================================================
// FORMULÁRIO DE CONTATO
// ================================================

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name = document.getElementById("name").value;

    alert(
        `Obrigado, ${name}! Sua mensagem foi preparada com sucesso.`
    );

    contactForm.reset();

});


// ================================================
// EFEITO NO HEADER DURANTE O SCROLL
// ================================================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.style.background = "rgba(8, 7, 10, 0.97)";
    } else {
        header.style.background = "rgba(11, 10, 13, 0.85)";
    }

});