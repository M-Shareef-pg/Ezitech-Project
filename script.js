let anchors = document.querySelectorAll(".anchor");
let items = ["one", "two", "three", "four", "five", "six"];

document.querySelector("#one").style.color = "black";

anchors.forEach(anchor => {
    anchor.addEventListener("mouseover", () => {
        items.forEach(item => {
            if (item === anchor.id) {
                document.querySelector(`#${item}`).style.color = "black";
            } else {
                document.querySelector(`#${item}`).style.color = "gray";
            }
        });
    });

    anchor.addEventListener("mouseout", () => {
        items.forEach(item => {
            if (item === "one") {
                document.querySelector(`#${item}`).style.color = "black";
            } else {
                document.querySelector(`#${item}`).style.color = "initial";
            }
        });
    });
});

document.querySelector('.child-card-universal').addEventListener('mouseleave', function(e) {
    const innerContent = this.querySelector('.content-inside');
    innerContent.style.animation = 'gravityFall 0.7s ease-out';
    
    setTimeout(() => {
        innerContent.style.animation = '';
    }, 500);
});


// reviews loop
        document.addEventListener('DOMContentLoaded', function() {
            const track = document.querySelector('.slider-track');
            const reviews = document.querySelectorAll('.review-box');
            
            reviews.forEach(review => {
                const clone = review.cloneNode(true);
                track.appendChild(clone);
            });
        });
