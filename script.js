
window.onload = function() {
    const dog = document.getElementById("dog");
    const chart = document.getElementById("chart");
    const button = document.getElementById("swapButton");

    setTimeout(() => {
        dog.style.left = "450px";

        setTimeout(() => {
            chart.style.opacity = "1";
            chart.style.transform = "scale(1.2)";
            button.style.display = "inline-block";
        }, 4000);
    }, 1000);
};
