// declare variables
const videoButton = document.getElementById("help-video-button");
const video = document.getElementById("help-video");
const background = document.getElementById("workout-calculator-section");
const header = document.getElementById("header");

// if mouse leaves button remove video and background effects
videoButton.addEventListener("mouseleave", e => {
    video.style.display = "none";
    background.style.filter = "opacity(1)";
    background.style.filter = "blur(px)";
    header.style.filter = "opacity(1)";
    header.style.filter = "blur(0)";
})


// if mouse hovers over help button, display video and background effects
videoButton.addEventListener("mouseover", e => {
    video.style.display = "block";
    background.style.filter = "opacity(0.8)";
    background.style.filter = "blur(2px)";
    header.style.filter = "opacity(0.8)";
    header.style.filter = "blur(2px)";
})