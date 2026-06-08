document.addEventListener("DOMContentLoaded", () => {
    const footerContainer = document.getElementById("global-footer");

    if (!footerContainer) {
        return;
    }

    footerContainer.innerHTML = `
        <p>® La Dimensión Conocida - 08/06/2024</p>
        <a href="AcercaDe.html">Acerca de nosotros</a>
    `;
});
