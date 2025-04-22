document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("listaFavoritos");
    const favoritos = JSON.parse(sessionStorage.getItem("favoritos")) || [];

    if (favoritos.length === 0) {
        contenedor.innerHTML = "<p>No has marcado ningún producto como favorito.</p>";
        return;
    }

    favoritos.forEach(prod => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img src="${prod.imagen}" alt="${prod.nombre}">
            <h3>${prod.nombre}</h3>
            <p>$${prod.precio} MXN</p>
        `;
        contenedor.appendChild(div);
    });
});
