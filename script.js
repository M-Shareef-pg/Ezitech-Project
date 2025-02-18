let anchors = document.querySelectorAll(".anchor");
let items = ["one", "two", "three", "four", "five", "six"];
let textElement = document.querySelector(".word");
let track = document.querySelector(".slider-track");
let reviews = document.querySelectorAll(".review-box");
let images = document.querySelectorAll(".img-scrll-on");
let words = ["Programming", "Social Skills", "Web Design", "Marketing"];
let index = 0;

document.querySelector("#one").style.color = "black";

anchors.forEach(anchor => {
    anchor.addEventListener("mouseover", () => {
        items.forEach(item => {
            document.querySelector(`#${item}`).style.color = item === anchor.id ? "black" : "gray";
        });
    });

    anchor.addEventListener("mouseout", () => {
        items.forEach(item => {
            document.querySelector(`#${item}`).style.color = item === "one" ? "black" : "initial";
        });
    });
});

document.querySelector(".child-card-universal").addEventListener("mouseleave", function() {
    const innerContent = this.querySelector(".content-inside");
    innerContent.style.animation = "gravityFall 0.7s ease-out";
    setTimeout(() => { innerContent.style.animation = ""; }, 500);
});

document.addEventListener("DOMContentLoaded", function() {
    reviews.forEach(review => {
        track.appendChild(review.cloneNode(true));
    });
});

window.addEventListener("scroll", function() {
    let scrollY = window.scrollY;
    images.forEach((img, index) => {
        img.style.transform = `translateY(${(scrollY * 0.02) * (index + 1)}px)`;
    });
});

function typeEffect(word, i = 0) {
    if (i < word.length) {
        textElement.innerHTML = word.substring(0, i + 1);
        setTimeout(() => typeEffect(word, i + 1), 100);
    } else {
        setTimeout(eraseEffect, 1000);
    }
}

function eraseEffect(i = textElement.innerHTML.length) {
    if (i > 0) {
        textElement.innerHTML = textElement.innerHTML.substring(0, i - 1);
        setTimeout(() => eraseEffect(i - 1), 50);
    } else {
        index = (index + 1) % words.length;
        setTimeout(() => typeEffect(words[index]), 500);
    }
}

typeEffect(words[index]);

document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.sm-nav .fa-bars');
    const closeIcon = document.querySelector('.close-sidebar');
    const sidebar = document.querySelector('.mobile-sidebar');
    const overlay = document.querySelector('.sidebar-overlay');

    menuIcon.addEventListener('click', () => {
        sidebar.classList.add('active');
        overlay.style.display = 'block';
    });

    closeIcon.addEventListener('click', () => {
        sidebar.classList.remove('active');
        overlay.style.display = 'none';
    });

    overlay.addEventListener('click', () => {
        sidebar.classList.remove('active');
        overlay.style.display = 'none';
    });
});
