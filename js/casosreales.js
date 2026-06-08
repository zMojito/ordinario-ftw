let todosCasos = [];
let filtroActual = "Todos";

function cargar() {
    const xhttp = new XMLHttpRequest();

    xhttp.onload = function () {
        const xmlDoc = xhttp.responseXML;
        if (xmlDoc) {
            todosCasos = Array.from(xmlDoc.getElementsByTagName("caso"));
            mostrarCasos(todosCasos);
        } else {
            console.error("No se pudo cargar el archivo XML.");
        }
    };
    xhttp.open("GET", "../xml/casosreales.xml");
    xhttp.send();
}

function mostrarCasos(casos) {
    let html = "<div class='casos-grid'>";
    
    for (let i = 0; i < casos.length; i++) {
        const tituloNode = casos[i].getElementsByTagName("titulo")[0];
        const fechaNode = casos[i].getElementsByTagName("fecha")[0];
        const ubicacionNode = casos[i].getElementsByTagName("ubicacion")[0];
        const descNode = casos[i].getElementsByTagName("descripcion")[0];
        const tipoNode = casos[i].getElementsByTagName("tipo")[0];
        const imgNode = casos[i].getElementsByTagName("imagen")[0];
        
        const titulo = tituloNode ? tituloNode.textContent : "";
        const fecha = fechaNode ? fechaNode.textContent : "";
        const ubicacion = ubicacionNode ? ubicacionNode.textContent : "";
        const desc = descNode ? descNode.textContent : "";
        const tipo = tipoNode ? tipoNode.textContent : "";
        const img = imgNode ? imgNode.textContent : "";

        html += "<div class='caso-grid-item' onclick='openCasoModal(\"" + titulo.replace(/"/g, '\\"') + "\", \"" + fecha + "\", \"" + tipo + "\", \"" + desc.replace(/"/g, '\\"') + "\", \"" + img + "\")'>" +
        "<img src='" + img + "' alt='" + titulo + "'>" +
        "<h4>" + titulo + "</h4>" +
        "<span class='tipo-badge tipo-" + tipo.toLowerCase() + "'>" + tipo + "</span>" +
        "</div>";
    }
    html += "</div>";
    document.getElementById("lista-casos").innerHTML = html;
}

function buscar(valor) {
    const busqueda = valor.toLowerCase();
    let casosFiltrados = todosCasos.filter(caso => {
        const titulo = caso.getElementsByTagName("titulo")[0].textContent.toLowerCase();
        return titulo.includes(busqueda);
    });

    if (filtroActual !== "Todos") {
        casosFiltrados = casosFiltrados.filter(caso => {
            const tipo = caso.getElementsByTagName("tipo")[0].textContent;
            return tipo === filtroActual;
        });
    }

    mostrarCasos(casosFiltrados);
}

function filtrarPorTipo(tipo) {
    filtroActual = tipo;
    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.classList.remove("active");
    });
    if (tipo === "Todos") {
        document.getElementById("btn-todos").classList.add("active");
    } else {
        document.getElementById("btn-" + tipo.toLowerCase()).classList.add("active");
    }

    let casosFiltrados = todosCasos;
    
    if (tipo !== "Todos") {
        casosFiltrados = todosCasos.filter(caso => {
            const tipoXML = caso.getElementsByTagName("tipo")[0].textContent;
            return tipoXML === tipo;
        });
    }

    const busquedaValor = document.getElementById("search-input").value;
    if (busquedaValor.length > 0) {
        const busqueda = busquedaValor.toLowerCase();
        casosFiltrados = casosFiltrados.filter(caso => {
            const titulo = caso.getElementsByTagName("titulo")[0].textContent.toLowerCase();
            return titulo.includes(busqueda);
        });
    }

    mostrarCasos(casosFiltrados);
}

function openCasoModal(titulo, fecha, tipo, desc, img) {
    const modal = document.getElementById("modal-caso");
    document.getElementById("modal-caso-img").src = img;
    document.getElementById("modal-caso-titulo").textContent = titulo;
    document.getElementById("modal-caso-fecha").textContent = fecha;
    document.getElementById("modal-caso-tipo").textContent = tipo;
    document.getElementById("modal-caso-tipo").className = "tipo-badge tipo-" + tipo.toLowerCase();
    document.getElementById("modal-caso-desc").textContent = desc;
    modal.showModal();
}

function closeModalCaso() {
    document.getElementById("modal-caso").close();
}

cargar();
