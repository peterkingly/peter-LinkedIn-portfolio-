const words = [
    "AI Data Annotation",
    "AI Training",
    "Virtual Assistant",
    "Data Entry",
    "Prompt Engineering",
    "Software Developer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    let currentWord = words[wordIndex];

    if (!isDeleting) {
        typing.textContent = currentWord.substring(0, charIndex++);
    } else {
        typing.textContent = currentWord.substring(0, charIndex--);
    }

    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex > currentWord.length) {
        speed = 1500;
        isDeleting = true;
    }

    if (isDeleting && charIndex < 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();
// ================= Animated Counter =================

const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            const counter = entry.target;

            const target = +counter.getAttribute("data-target");

            let count = 0;

            const speed = target / 60;

            function updateCounter(){

                if(count < target){

                    count += speed;

                    counter.innerText = Math.ceil(count);

                    requestAnimationFrame(updateCounter);

                }else{

                    counter.innerText = target + "+";

                }

            }

            updateCounter();

            observer.unobserve(counter);

        }

    });

});

counters.forEach(counter => observer.observe(counter));
const reveals = document.querySelectorAll(".reveal");

function revealSections() {

    reveals.forEach(section => {

        const windowHeight = window.innerHeight;

        const sectionTop = section.getBoundingClientRect().top;

        const revealPoint = 120;

        if(sectionTop < windowHeight - revealPoint){

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

});
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});