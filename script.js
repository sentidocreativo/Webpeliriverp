document.addEventListener('DOMContentLoaded', () => {
    const botones = document.querySelectorAll('.rubro-btn');
    const cajas = document.querySelectorAll('.rubro-content-box');

    botones.forEach(btn => {
        btn.addEventListener('click', () => {
            const rubroSeleccionado = btn.getAttribute('data-rubro');

            // Quitar activo de todos los botones y cajas
            botones.forEach(b => b.classList.remove('active'));
            cajas.forEach(c => {
                c.classList.remove('active');
                c.style.display = 'none';
            });

            // Activar el botón tocado
            btn.classList.add('active');

            // Mostrar y activar la caja correspondiente
            const cajaActiva = document.getElementById(`box-${rubroSeleccionado}`);
            if (cajaActiva) {
                cajaActiva.style.display = 'block';
                setTimeout(() => {
                    cajaActiva.classList.add('active');
                }, 10);
            }
        });
    });
});
