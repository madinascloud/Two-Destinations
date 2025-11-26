const plane = document.querySelector(".plane");

// When first activity video ends → move to clothing section
document.getElementById("activityVideo").addEventListener("ended", () => {
    plane.classList.add("to-clothing");
    document.getElementById("clothingSection").scrollIntoView({ behavior: "smooth" });
});

// When clothing video ends → move to tickets section
document.getElementById("clothingVideo").addEventListener("ended", () => {
    plane.classList.add("to-tickets");
    document.getElementById("ticketsSection").scrollIntoView({ behavior: "smooth" });
});

