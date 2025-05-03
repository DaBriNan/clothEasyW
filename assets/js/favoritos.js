document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("listaFavoritos");
    
    // Obtener favoritos con verificación robusta
    let favoritos = [];
    try {
        const favoritosGuardados = localStorage.getItem("meGusta");
        if (favoritosGuardados) {
            favoritos = JSON.parse(favoritosGuardados);
            
            // Filtrar productos inválidos o null
            favoritos = favoritos.filter(producto => {
                return producto && 
                       typeof producto === 'object' && 
                       producto.id && 
                       producto.name && 
                       producto.price !== undefined && 
                       producto.image;
            });
            
            // Actualizar localStorage solo con productos válidos
            localStorage.setItem("meGusta", JSON.stringify(favoritos));
        }
    } catch (error) {
        console.error("Error al leer favoritos:", error);
        localStorage.removeItem("meGusta");
    }

    if (!contenedor) return;

    // Mostrar mensaje si no hay favoritos
    if (!favoritos || favoritos.length === 0) {
        contenedor.innerHTML = `
            <div class="empty-favorites">
                <img src="/assets/img/empty-heart.png" alt="Corazón vacío">
                <p>Aún no tienes productos favoritos</p>
                <a href="/pages/productos.html" class="btn-explorar">Explorar productos</a>
            </div>
        `;
        return;
    }

    // Mostrar favoritos válidos
    contenedor.innerHTML = favoritos.map(producto => `
        <div class="producto-favorito">
            <img src="${producto.image}" alt="${producto.name}" onerror="this.src='/assets/img/placeholder.jpg'">
            <div class="info-favorito">
                <h3>${producto.name}</h3>
                <p>$${producto.price} MXN</p>
            </div>
            <button class="btn-eliminar" data-id="${producto.id}">
                <span class="material-symbols-outlined">delete</span>
            </button>
        </div>
    `).join('');

    // Manejar eliminación
    contenedor.addEventListener("click", (e) => {
        if (e.target.closest(".btn-eliminar")) {
            const btn = e.target.closest(".btn-eliminar");
            const productId = btn.getAttribute('data-id');
            
            favoritos = favoritos.filter(item => item.id !== productId);
            localStorage.setItem("meGusta", JSON.stringify(favoritos));
            
            // Eliminar visualmente
            btn.closest(".producto-favorito").remove();
            
            // Mostrar estado vacío si no quedan favoritos
            if (favoritos.length === 0) {
                contenedor.innerHTML = `
                    <div class="empty-favorites">
                        <img src="/assets/img/empty-heart.png" alt="Corazón vacío">
                        <p>No tienes productos favoritos</p>
                        <a href="/pages/productos.html" class="btn-explorar">Explorar productos</a>
                    </div>
                `;
            }
        }
    });
});