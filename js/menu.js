document.addEventListener("DOMContentLoaded", function () {

    function marcarPaginaActiva() {
        let rutaActual = window.location.pathname;
        // Si es la raíz "/", lo tratamos como "index.html" 
        if (rutaActual === "/" || rutaActual === "") {
            rutaActual = "/index.html";
        }
        // Busca todos los enlaces del menú
        let enlaces = document.querySelectorAll(".nav-link");
        enlaces.forEach(enlace => {
            if (enlace.getAttribute("href") === rutaActual ||
                enlace.getAttribute("href") === rutaActual.split("/").pop()) {
                enlace.classList.add("active");
                enlace.setAttribute("aria-current", "page");
            } else {
                enlace.classList.remove("active");
                enlace.removeAttribute("aria-current");
            }
        });
    }
   
    function toggleMenu() {
        const navbar = document.querySelector(".navbar");

        if(window.innerWidth < 868){
            // Menú de Navegación toggle
            navbar.innerHTML = `
                <div class="container-fluid">
                    <button class="navbar-toggler bg-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-header bg-black">
                            <h5 class="offcanvas-title text-white" id="offcanvasNavbarLabel">Menú</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body bg-black">
                            <ul class="nav flex-column">
                                <li class="nav-item">
                                    <a class="nav-link text-white fs-5" href="/DynamoVibe/index.html" title="Inicio">Inicio</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-white fs-5" href="/DynamoVibe/views/portafolio.html" title="Portafolio">Portafolio</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-white fs-5" href="/DynamoVibe/views/contacto.html" title="Contacto">Contacto</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            `;
        } else {
            // Menú de Navegación reescrito
            navbar.innerHTML = `
                <ul class="nav justify-content-center">
                    <li class="nav-item">
                        <a class="nav-link text-white fs-5" href="/DynamoVibe/index.html">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white fs-5" href="/DynamoVibe/views/portafolio.html">Portafolio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white fs-5" href="/DynamoVibe/views/contacto.html">Contacto</a>
                    </li>
                </ul>
            `;
        }

        // Marca la página activa después de construir el menú
        marcarPaginaActiva();
    }

    toggleMenu();
    window.addEventListener("resize", toggleMenu);

});