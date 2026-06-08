document.addEventListener("DOMContentLoaded", () => {
    const headerContainer = document.getElementById("global-header");
    
    if (headerContainer) {
        const currentPath = window.location.pathname;

        const inicioActivo = currentPath.includes("PaginaPrincipal.html") ? "class='activo'" : "";
        const aliensActivo = currentPath.includes("Aliens.html") ? "class='activo'" : "";
        const cryptidosActivo = currentPath.includes("Cryptidos.html") ? "class='activo'" : "";
        const fantasmasActivo = currentPath.includes("Fantasmas.html") ? "class='activo'" : "";
        const casosActivo = currentPath.includes("CasosReales.html") ? "class='activo'" : "";

        headerContainer.innerHTML = `
            <img src="../recursos/titulo.png" alt="La Dimensión Conocida" class="logo"> 
            <nav> 
                <ul> 
                    <li><a href="../index.html">Cerrar Sesión</a></li> 
                    <li><a href="PaginaPrincipal.html" ${inicioActivo}>Inicio</a></li> 
                    <li><a href="Aliens.html" ${aliensActivo}>Aliens</a></li> 
                    <li><a href="Cryptidos.html" ${cryptidosActivo}>Cryptidos</a></li> 
                    <li><a href="Fantasmas.html" ${fantasmasActivo}>Fantasmas</a></li> 
                    <li><a href="CasosReales.html" ${casosActivo}>Casos Reales</a></li> 
                </ul> 
            </nav> 
        `;
    }
});