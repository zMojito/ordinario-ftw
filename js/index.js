document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const nombre = document.getElementById('nombre');
    const password = document.getElementById('password');

    if (form) {
        form.addEventListener('submit', (event) => {
            if (!nombre.value.trim() || !password.value.trim()) {
                event.preventDefault();
                alert('Por favor completa ambos campos antes de continuar.');
                return;
            }

            event.preventDefault();
            window.location.href = 'html/PaginaPrincipal.html';
        });
    }
});