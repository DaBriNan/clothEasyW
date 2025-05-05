document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".btn-megusta");
    
    // Función para guardar favoritos con validación
    const guardarFavoritos = (favoritos) => {
        const favoritosValidos = favoritos.filter(producto => 
            producto && producto.id && producto.name && producto.price !== undefined
        );
        localStorage.setItem("meGusta", JSON.stringify(favoritosValidos));
    };

    // Obtener favoritos actuales
    let favoritos = [];
    try {
        const favoritosGuardados = localStorage.getItem("meGusta");
        if (favoritosGuardados) {
            favoritos = JSON.parse(favoritosGuardados);
        }
    } catch (error) {
        console.error("Error al leer favoritos:", error);
        localStorage.removeItem("meGusta");
    }

    buttons.forEach(btn => {
        const slide = btn.closest(".swiper-slide");
        if (!slide) return;
        
        const productName = slide.querySelector("h4")?.textContent;
        const productPriceText = slide.querySelector("p")?.textContent;
        
        if (!productName || !productPriceText) return;
        
        const productPrice = parseFloat(productPriceText.replace("$", "").replace(" MXN", ""));
        const productImage = slide.querySelector("img")?.src;
        
        if (!productImage) return;
        
        // Crear ID único consistente
        const productId = `prod-${productName.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}`;
        
        // Verificar si ya es favorito
        const isFavorito = favoritos.some(item => item.id === productId);
        btn.classList.toggle("activo", isFavorito);
        
        btn.addEventListener("click", () => {
            const product = {
                id: productId,
                name: productName,
                price: productPrice,
                image: productImage
            };
            
            const index = favoritos.findIndex(item => item.id === productId);
            
            if (index === -1) {
                favoritos.push(product);
                btn.classList.add("activo");
            } else {
                favoritos.splice(index, 1);
                btn.classList.remove("activo");
            }
            
            guardarFavoritos(favoritos);
        });
    });
});