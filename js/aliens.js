function cargar() {
    const xhttp = new XMLHttpRequest();

    xhttp.onload = function () {
        const xmlDoc = xhttp.responseXML;
        if (xmlDoc) {
            const listaAliens = xmlDoc.getElementsByTagName("alien");
            mifuncion(listaAliens);
        } else {
            console.error("No se pudo cargar el archivo XML.");
        }
    };
    xhttp.open("GET", "../xml/aliens.xml");
    xhttp.send();
}

function mifuncion(aliens) {
    let grid = "<div class='grid-container'>";
    
    for (let i = 0; i < aliens.length; i++) {
        const tituloNode = aliens[i].getElementsByTagName("titulo")[0];
        const descNode = aliens[i].getElementsByTagName("descripcion")[0];
        const imgNode = aliens[i].getElementsByTagName("imagen")[0];
        const titulo = tituloNode ? tituloNode.textContent : "";
        const desc = descNode ? descNode.textContent : "";
        const imgPath = imgNode ? imgNode.textContent : "";

        grid += "<div class='grid-item'>" +
        "<img src='" + imgPath + "' alt='" + titulo + "' onclick='openModal(\"" + titulo + "\", \"" + desc + "\", \"" + imgPath + "\")'>" +
        "<p class='grid-title'>" + titulo + "</p>" +
        "</div>";
    }
    grid += "</div>";
    document.getElementById("lista-aliens").innerHTML = grid;
}

function openModal(titulo, desc, img) {
    const modal = document.getElementById("modal-alien");
    document.getElementById("modal-titulo").textContent = titulo;
    document.getElementById("modal-desc").textContent = desc;
    document.getElementById("modal-img").src = img;
    modal.showModal();
}

function closeModal() {
    document.getElementById("modal-alien").close();
}

cargar();