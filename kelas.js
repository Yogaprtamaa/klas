document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});
function toggleMenu() {
    const navbar = document.getElementById("navbar");
    navbar.style.display = navbar.style.display === "flex" ? "none" : "flex";
}
