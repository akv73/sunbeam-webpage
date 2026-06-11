console.log("Sunbeam International Academy Website Loaded");

/* ================= HAMBURGER MENU ================= */

const menuToggle = document.querySelector('.menu-toggle');

const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {

    navLinks.classList.toggle('active');

});

/* ================= DARK MODE ================= */

const darkModeBtn = document.querySelector('.dark-mode-btn');

darkModeBtn.addEventListener('click', () => {

    document.body.classList.toggle('dark-mode');

});

/* ================= COUNTER ANIMATION ================= */

const counters = document.querySelectorAll('.counter');

let counterStarted = false;

function startCounters(){

    counters.forEach(counter => {

        counter.innerText = '0';

        const target = +counter.getAttribute('data-target');

        const increment = target / 100;

        const updateCounter = () => {

            const current = +counter.innerText;

            if(current < target){

                counter.innerText = `${Math.ceil(current + increment)}`;

                setTimeout(updateCounter, 30);

            }
            else{

                counter.innerText = target;
            }
        };

        updateCounter();

    });

}

/* ================= BACK TO TOP BUTTON ================= */

const topBtn = document.getElementById('topBtn');

/* ================= ACTIVE NAVBAR ================= */

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");

/* ================= SCROLL ANIMATION ================= */

const hiddenElements = document.querySelectorAll('.hidden');

/* ================= SCROLL EVENTS ================= */

window.addEventListener('scroll', () => {

    /* TOP BUTTON */

    if(window.scrollY > 300){

        topBtn.style.display = 'block';
    }
    else{

        topBtn.style.display = 'none';
    }

    /* ACTIVE NAVBAR */

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if(pageYOffset >= sectionTop - 200){

            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === `#${current}`){

            link.classList.add("active");
        }

    });

    /* SCROLL REVEAL */

    hiddenElements.forEach((el) => {

        const elementTop = el.getBoundingClientRect().top;

        if(elementTop < window.innerHeight - 100){

            el.classList.add('show');

        }

    });

    /* COUNTER START */

    const counterSection = document.querySelector('.counter-section');

    const counterTop = counterSection.getBoundingClientRect().top;

    if(counterTop < window.innerHeight - 100 && !counterStarted){

        startCounters();

        counterStarted = true;
    }

});

/* ================= BACK TO TOP CLICK ================= */

topBtn.addEventListener('click', () => {

    window.scrollTo({

        top: 0,

        behavior: 'smooth'

    });

});

/* ================= LOADER ================= */

window.addEventListener('load', () => {

    const loader = document.getElementById('loader');

    loader.style.opacity = '0';

    setTimeout(() => {

        loader.style.display = 'none';

    }, 500);

});