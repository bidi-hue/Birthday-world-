document.addEventListener("DOMContentLoaded", function () {

    const startButton = document.getElementById("startButton");

    const screen0 = document.getElementById("screen-0");
    const screen1 = document.getElementById("screen-1");

    startButton.addEventListener("click", function () {

        screen0.classList.remove("active");
        screen1.classList.add("active");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

});
