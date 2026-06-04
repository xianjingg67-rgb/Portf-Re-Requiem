const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach(link => {
    link.addEventListener("mouseenter", () => {
        link.style.textShadow =
        "0 0 10px rgba(255,255,255,0.8)";
    });

    link.addEventListener("mouseleave", () => {
        link.style.textShadow = "none";
    });
});
