function cargar() {
    const xhttp = new XMLHttpRequest();

    xhttp.onload = function () {
        const xmlDoc = xhttp.responseXML;
        if (xmlDoc) {
            const listaCryptidos = xmlDoc.getElementsByTagName("cryptido");
            mifuncion(listaCryptidos);
        } else {
            console.error("No se pudo cargar el archivo XML.");
        }
    };
    xhttp.open("GET", "../xml/cryptidos.xml");
    xhttp.send();
}

function mifuncion(cryptidos) {
    let grid = "<div class='grid-container'>";
    
    for (let i = 0; i < cryptidos.length; i++) {
        const tituloNode = cryptidos[i].getElementsByTagName("titulo")[0];
        const descNode = cryptidos[i].getElementsByTagName("descripcion")[0];
        const imgNode = cryptidos[i].getElementsByTagName("imagen")[0];
        const titulo = tituloNode ? tituloNode.textContent : "";
        const desc = descNode ? descNode.textContent : "";
        const imgPath = imgNode ? imgNode.textContent : "";

        grid += "<div class='grid-item'>" +
        "<img src='" + imgPath + "' alt='" + titulo + "' onclick='openModalCryptido(\"" + titulo + "\", \"" + desc + "\", \"" + imgPath + "\")'>" +
        "<p class='grid-title'>" + titulo + "</p>" +
        "</div>";
    }
    grid += "</div>";
    document.getElementById("lista-cryptidos").innerHTML = grid;
}

function openModalCryptido(titulo, desc, img) {
    const modal = document.getElementById("modal-cryptido");
    document.getElementById("modal-cryptido-titulo").textContent = titulo;
    document.getElementById("modal-cryptido-desc").textContent = desc;
    document.getElementById("modal-cryptido-img").src = img;
    modal.showModal();
}

function closeModalCryptido() {
    document.getElementById("modal-cryptido").close();
}

cargar();
