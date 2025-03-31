document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modalLogin");
    const btnAbrir = document.getElementById("btnAbrirModal");
    const btnCerrar = document.querySelector(".cerrar");

    
    btnAbrir.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    
    btnCerrar.addEventListener("click", () => {
        modal.style.display = "none";
    });

    
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
