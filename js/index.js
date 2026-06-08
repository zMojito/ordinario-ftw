document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const nombre = document.getElementById('nombre');
    const password = document.getElementById('password');

    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const usuario = nombre.value.trim();
            const clave = password.value.trim();

            if (!usuario || !clave) {
                alert('Por favor completa ambos campos antes de continuar.');
                return;
            }

            const xhttp = new XMLHttpRequest();
            xhttp.onload = function () {
                let xmlDoc = xhttp.responseXML;
                if (!xmlDoc) {
                    try {
                        xmlDoc = new DOMParser().parseFromString(xhttp.responseText, 'application/xml');
                    } catch (e) {
                        console.error('Error parsing XML:', e);
                    }
                }

                if (!xmlDoc) {
                    alert('No se pudo leer la lista de usuarios.');
                    return;
                }

                const usuarios = xmlDoc.getElementsByTagName('usuario');
                let encontrado = false;

                for (let i = 0; i < usuarios.length; i++) {
                    const nombreNode = usuarios[i].getElementsByTagName('nombre')[0];
                    const passwordNode = usuarios[i].getElementsByTagName('password')[0];
                    const nombreXml = nombreNode ? nombreNode.textContent.trim() : '';
                    const passwordXml = passwordNode ? passwordNode.textContent.trim() : '';

                    if (usuario === nombreXml && clave === passwordXml) {
                        encontrado = true;
                        break;
                    }
                }

                if (encontrado) {
                    window.location.href = 'html/PaginaPrincipal.html';
                } else {
                    alert('Usuario o contraseña incorrectos.');
                }
            };

            xhttp.onerror = function () {
                alert('Error cargando los datos de usuarios.');
            };

            xhttp.open('GET', 'xml/usuarios.xml', true);
            xhttp.send();
        });
    }
});