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
    let table = "<table>";
    
    for (let i = 0; i < cryptidos.length; i++) {
        const tituloNode = cryptidos[i].getElementsByTagName("titulo")[0];
        const descNode = cryptidos[i].getElementsByTagName("descripcion")[0];
        const imgNode = cryptidos[i].getElementsByTagName("imagen")[0];
        const titulo = tituloNode ? tituloNode.textContent : "";
        const desc = descNode ? descNode.textContent : "";
        const imgPath = imgNode ? imgNode.textContent : "";

        table += "<tr>" +
        "<td><img src='" + imgPath + "' alt='" + titulo + "'></td>" +
        "<td><strong>" + titulo + "</strong></td>" +
        "<td>" + desc + "</td>" +
        "</tr>";
    }
    table += "</table>";
    document.getElementById("lista-cryptidos").innerHTML = table;
}

cargar();
