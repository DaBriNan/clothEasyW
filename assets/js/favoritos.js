document.addEventListener("DOMContentLoaded", () => {
    const botones = document.querySelectorAll(".btn-megusta");

    botones.forEach((btn) => {
        const slide = btn.closest(".swiper-slide");
        const producto = {
            name: slide.querySelector("h4").textContent,
            price: parseFloat(slide.querySelector("p").textContent.replace("$", "").replace(" MXN", "")),
            image: new URL(slide.querySelector("img").getAttribute("src"), window.location.origin).href
        };

        // Verifica si ya está en favoritos para marcar el botón
        let favoritos = JSON.parse(localStorage.getItem("meGusta") || "[]");
        const estaEnFavs = favoritos.some(p => p.name === producto.name);
        if (estaEnFavs) btn.classList.add("activo");

        // Evento click: agrega o quita de favoritos
        btn.addEventListener("click", () => {
            favoritos = JSON.parse(localStorage.getItem("meGusta") || "[]");
            const existe = favoritos.some(p => p.name === producto.name);

            if (!existe) {
                favoritos.push(producto);
                btn.classList.add("activo");
            } else {
                favoritos = favoritos.filter(p => p.name !== producto.name);
                btn.classList.remove("activo");
            }

            localStorage.setItem("meGusta", JSON.stringify(favoritos));
        });
    });

    // Código para la página de "me gusta" (si existe el contenedor)
    const contenedor = document.getElementById("listaFavoritos");
    if (contenedor) {
        const favoritos = JSON.parse(localStorage.getItem("meGusta") || "[]");

        if (favoritos.length === 0) {
            contenedor.innerHTML = "<p>No has marcado ningún producto como favorito.</p>";
            return;
        }

        favoritos.forEach(prod => {
            const div = document.createElement("div");
            div.classList.add("producto");
            div.innerHTML = `
                <img src="${prod.image}" alt="${prod.name}">
                <h3>${prod.name}</h3>
                <p>$${prod.price} MXN</p>
            `;
            contenedor.appendChild(div);
        });
    }
});
