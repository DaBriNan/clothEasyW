document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("listaFavoritos");
    let favoritos = JSON.parse(localStorage.getItem("meGusta")) || [];

    if (favoritos.length === 0) {
        contenedor.innerHTML = "<p>No has marcado ningún producto como favorito.</p>";
        return;
    }

    favoritos.forEach((prod, index) => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img src="${prod.image}" alt="${prod.name}">
            <div>
                <h3>${prod.name}</h3>
                <p>$${prod.price} MXN</p>
                <button class="btn-megusta activo" data-index="${index}">❤️</button>
                <button class="btn-carrito" data-producto='${JSON.stringify(prod)}'>🛒</button>
            </div>
        `;
        contenedor.appendChild(div);
    });

    // Event delegation para eliminar favoritos
    contenedor.addEventListener("click", (e) => {
        if (e.target.classList.contains("btn-megusta")) {
            const index = e.target.dataset.index;
            favoritos.splice(index, 1);
            localStorage.setItem("meGusta", JSON.stringify(favoritos));
            location.reload(); // Recargar para actualizar la lista
        }
    });
    if (e.target.classList.contains("btn-carrito")) {
        const producto = JSON.parse(e.target.dataset.producto);
        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

        const yaExiste = carrito.some(p => p.name === producto.name);
        if (!yaExiste) {
            carrito.push(producto);
            localStorage.setItem("carrito", JSON.stringify(carrito));
            alert("Producto añadido al carrito");
        } else {
            alert("Este producto ya está en el carrito");
        }
    }
});
