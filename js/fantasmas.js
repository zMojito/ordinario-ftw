function cargar() {
    const xhttp = new XMLHttpRequest();

    xhttp.onload = function () {
        const xmlDoc = xhttp.responseXML;
        if (xmlDoc) {
            const listaFantasmas = xmlDoc.getElementsByTagName("fantasma");
            mifuncion(listaFantasmas);
        } else {
            console.error("No se pudo cargar el archivo XML.");
        }
    };
    xhttp.open("GET", "../xml/fantasmas.xml");
    xhttp.send();
}

function mifuncion(fantasmas) {
    let grid = "<div class='grid-container'>";
    
    for (let i = 0; i < fantasmas.length; i++) {
        const tituloNode = fantasmas[i].getElementsByTagName("titulo")[0];
        const descNode = fantasmas[i].getElementsByTagName("descripcion")[0];
        const imgNode = fantasmas[i].getElementsByTagName("imagen")[0];
        const titulo = tituloNode ? tituloNode.textContent : "";
        const desc = descNode ? descNode.textContent : "";
        const imgPath = imgNode ? imgNode.textContent : "";

        grid += "<div class='grid-item'>" +
        "<img src='" + imgPath + "' alt='" + titulo + "' onclick='openModalFantasma(\"" + titulo + "\", \"" + desc + "\", \"" + imgPath + "\")'>" +
        "<p class='grid-title'>" + titulo + "</p>" +
        "</div>";
    }
    grid += "</div>";
    document.getElementById("lista-fantasmas").innerHTML = grid;
}

function openModalFantasma(titulo, desc, img) {
    const modal = document.getElementById("modal-fantasma");
    document.getElementById("modal-fantasma-titulo").textContent = titulo;
    document.getElementById("modal-fantasma-desc").textContent = desc;
    document.getElementById("modal-fantasma-img").src = img;
    modal.showModal();
}

function closeModalFantasma() {
    document.getElementById("modal-fantasma").close();
}

cargar();
