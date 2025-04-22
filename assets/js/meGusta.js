document.addEventListener("DOMContentLoaded", () => {
    const botonesMeGusta = document.querySelectorAll(".btn-megusta");

    botonesMeGusta.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            const producto = productos[index];
            let favoritos = JSON.parse(sessionStorage.getItem("favoritos")) || [];

            const existe = favoritos.find(p => p.id === producto.id);
            if (!existe) {
                favoritos.push(producto);
                sessionStorage.setItem("favoritos", JSON.stringify(favoritos));
                btn.classList.add("activo");
            }
        });
    });
});
