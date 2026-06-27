const themeToggle = document.getElementById("themeToggle");
// Charger thème sauvegardé
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
}
// Toggle click
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        themeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
    } else {
        localStorage.setItem("theme", "light");
        themeToggle.innerHTML = '<i class="bi bi-moon-fill"></i>';
    }
});
//boutton retour haut de page
let topBtn = document.getElementById("topBtn");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 200) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};
topBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};
//conteur java
const counters = document.querySelectorAll('.counter');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const target = parseInt(counter.dataset.target);
            let count = 0;
            const updateCounter = () => {
                const increment = Math.ceil(target / 100);
                if (count < target) {
                    count += increment;
                    if (count > target) {
                        count = target;
                    }
                    counter.textContent = count;
                    requestAnimationFrame(updateCounter);
                }
            };
            updateCounter();
            observer.unobserve(counter);
        }
    });
});
counters.forEach(counter => {
    observer.observe(counter);
});
//fade section
const fadeSections = document.querySelectorAll(".fade-section");

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            fadeObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});
fadeSections.forEach(section => {
    fadeObserver.observe(section);
});
// soumission contact
const form = document.getElementById("contactform");
form.addEventListener("submit", function(e){
    e.preventDefault();
    let valide = true;
    document.getElementById("nomerror").textContent = "";
    document.getElementById("prenomerror").textContent = "";
    document.getElementById("emailerror").textContent = "";
    document.getElementById("sujeterror").textContent = "";
    document.getElementById("messageerror").textContent = "";
    document.getElementById("successmessage").textContent = "";
    const nom = document.getElementById("nom").value.trim();
    const prenom = document.getElementById("prenom").value.trim();
    const email = document.getElementById("email").value.trim();
    const sujet = document.getElementById("sujet").value;
    const message = document.getElementById("message").value.trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\  s@]+$/;
    if(nom === ""){
        document.getElementById("nomerror").textContent = "Nom obligatoire";
        valide = false;
    }
    if(prenom === ""){
        document.getElementById("prenomerror").textContent = "Prénom obligatoire";
        valide = false;
    }
    if(email === ""){
        document.getElementById("emailerror").textContent = "Email obligatoire";
        valide = false;
    }else if(!regex.test(email)){
        document.getElementById("emailerror").textContent = "Email invalide";
        valide = false;
    }
    if(sujet === ""){
        document.getElementById("sujeterror").textContent = "Choisissez un sujet";
        valide = false;
    }
    if(message === ""){
        document.getElementById("messageerror").textContent = "Message obligatoire";
        valide = false;
    }else if(message.length < 20){
        document.getElementById("messageerror").textContent = "20 caractères minimum";
        valide = false;
    }
    if(valide){
        document.getElementById("successmessage").textContent = "Votre message a été envoyé avec succès !";
        form.reset();
    }
});
//chiffres clés
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.dataset.target);
                let count = 0;
                const increment = Math.ceil(target / 100);
                const updateCounter = () => {
                    count += increment;
                    if (count < target) {
                        counter.textContent = count;
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };
                updateCounter();
                observer.unobserve(counter);
            }
        });

    }, {
        threshold: 0.5
    });
    counters.forEach(counter => observer.observe(counter));
});
//friltrages freelances
const buttons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll("[data-category]");
buttons.forEach(button => {
  button.addEventListener("click", () => {
    let filter = button.getAttribute("data-filter");
    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    cards.forEach(card => {
      let category = card.getAttribute("data-category").trim();
      if (filter === "all" || category === filter) {
        card.style.display = ""; 
      } else {
        card.style.display = "none";
      }
    });
  });
});