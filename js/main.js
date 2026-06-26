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