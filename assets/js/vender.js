document.addEventListener("DOMContentLoaded", () => {
    const imagenInput = document.getElementById('imagenInput');
    const precioInput = document.getElementById('precio');
    const ubicacionInput = document.getElementById('ubicacion');
    const precioPreview = document.getElementById('precioPreview');
    const ubicacionPreview = document.getElementById('tallaPreview');
    const previewImg = document.querySelector('.preview img');

    imagenInput.addEventListener('change', function (e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (event) {
                previewImg.src = event.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    precioInput.addEventListener('input', function () {
        precioPreview.textContent = `$${precioInput.value}`;
    });

    tallaInput.addEventListener('input', function () {
        ubicacionPreview.textContent = tallaInput.value;
    });

    document.getElementById('formularioProducto').addEventListener('submit', function (e) {
        if (!this.checkValidity()) {
            e.preventDefault();
            alert('Por favor completa todos los campos.');
        }
    });
});
