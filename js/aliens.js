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
    let table = "<table>";
    
    for (let i = 0; i < aliens.length; i++) {
        const tituloNode = aliens[i].getElementsByTagName("titulo")[0];
        const descNode = aliens[i].getElementsByTagName("descripcion")[0];
        const imgNode = aliens[i].getElementsByTagName("imagen")[0];
        const titulo = tituloNode ? tituloNode.textContent : "";
        const desc = descNode ? descNode.textContent : "";
        const imgPath = imgNode ? imgNode.textContent : "";

        table += "<tr>" +
            "<td><img src='../" + imgPath + "' alt='" + titulo + "' style='max-width: 300px; display: block; margin: 0 auto;'></td>" +
            "<td><strong>" + titulo + "</strong></td>" +
            "<td>" + desc + "</td>" +
            "</tr>";
    }
    table += "</table>";
    document.getElementById("lista-aliens").innerHTML = table;
}

cargar();