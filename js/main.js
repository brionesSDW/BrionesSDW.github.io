document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initMenu();
    initSections();
});

function initTheme() {
    const body = document.body;
    const toggleModeBtn = document.querySelector(".hd-bn-modos");

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
}

function initMenu() {
    const toggleMenuBtn = document.querySelector(".hd-bn-hamburguesa");
    const nav = document.querySelector(".hd-nav");

    toggleMenuBtn.addEventListener("click", () => {
        nav.classList.toggle("nav-abierto");
        toggleMenuBtn.classList.toggle("activo");
    });
}

function generarSeccion(config) {
    const { id, titulo, articulos } = config;

    const articulosHTML = articulos.map(articulo => `
            <article class="m-st0-E">
                <h3 class="m-st0-Ejemplo-p-tit">
                    ${articulo.titulo}
                </h3>
                <p class="m-st0-Ejemplo-p-desc">
                    ${articulo.descripcion}
                </p>
                <a href="${articulo.link}" class="m-st0-Ejemplo-a-link">
                    ${articulo.textoLink}
                </a>
            </article>`).join('\n');

    return `        <section class="m-section-4" id="${id}">
            <h3 class="m-st4-titulo">
                ${titulo}
            </h3>
${articulosHTML}
        </section>`;
}

const secciones = [
    {
        id: 'Categor1',
        titulo: 'Restaurante',
        articulos: [
            { 
                titulo: 'Restaurante 1', 
                descripcion: 'Este estilo de página para su restaurante es simple, pero da ese toque serio y refinado que su establecimiento merece.', 
                link: 'https://Restaurante1.github.io', 
                textoLink: 'Ver más' 
            },
            { 
                titulo: 'Proximamente', 
                descripcion: 'Proximamente un nuevo estilo que de seguro le maravillará.', 
                link: '#x', 
                textoLink: 'Ver más' 
            }
        ]
    },
    {
        id: 'Categor2',
        titulo: 'Proximamente',
        articulos: [
            { 
                titulo: 'Proximamente', 
                descripcion: 'Proximamente un nuevo estilo que de seguro le maravillará.', 
                link: '#x', 
                textoLink: 'Ver más' 
            }
        ]
    },
    {
        id: 'Categor3',
        titulo: 'Proximamente',
        articulos: [
            { 
                titulo: 'Proximamente', 
                descripcion: 'Proximamente un nuevo estilo que de seguro le maravillará.', 
                link: '#x', 
                textoLink: 'Ver más' 
            }
        ]
    }
];

function initSections() {
    const contenedor = document.querySelector('#contenedor');
    
    if (contenedor) {
        const todasLasSecciones = secciones.map(s => generarSeccion(s)).join('\n\n');
        contenedor.innerHTML = todasLasSecciones;
    }
}