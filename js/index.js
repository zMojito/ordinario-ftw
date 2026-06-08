document.addEventListener('DOMContentLoaded', () => {
    const dialog = document.getElementById('articulo');
    const openBtn = document.getElementById('boton');


    openBtn.addEventListener('click', () => {
        dialog.showModal();
    });
});
