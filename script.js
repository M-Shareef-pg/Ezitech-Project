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


