document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const toggleModeBtn = document.querySelector(".hd-bn-modos");
    const toggleMenuBtn = document.querySelector(".hd-bn-hamburguesa");
    const nav = document.querySelector(".hd-nav");

    function applyTheme(theme) {
        if (theme === "dark") {
            body.classList.add("dark");
        } else {
            body.classList.remove("dark");
        }
    }

    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");

    applyTheme(initialTheme);

    toggleModeBtn.addEventListener("click", () => {
        const isDark = body.classList.contains("dark");
        const newTheme = isDark ? "light" : "dark";

        applyTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    });

    toggleMenuBtn.addEventListener("click", () => {
        nav.classList.toggle("nav-abierto");
        toggleMenuBtn.classList.toggle("activo");
    });
});