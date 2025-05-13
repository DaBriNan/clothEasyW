

document.addEventListener('DOMContentLoaded', function() {
  fetch('backend/productos.php')
//fetch('http://localhost/Clotheasy/backend/productos.php')

      .then(response => response.json())
      .then(productos => {
          const container = document.getElementById('productos-container');
          if (!container) {
              console.error('Error: No existe el contenedor con ID "productos-container"');
              return;
          }

          if (productos.error) {
              container.innerHTML = `<p class="error">${productos.error}</p>`;
              return;
          }

          let html = '';
          productos.forEach(p => {
              html += `
                <div class="producto ${p.categoria.toLowerCase()}">
                <img src="assets/images/${p.imagen}" alt="${p.producto}">
                <h3>${p.producto}</h3>
                <p>$${p.precio.toFixed(2)}</p>
                <p>Talla: ${p.talla}</p>
                <p>Categoría: ${p.categoria || 'Sin categoría'}</p>
                <button onclick="addToCart(${p.id}, '${p.producto}', ${p.precio}, 'assets/images/${p.imagen}', 'Talla: ${p.talla}')">
                    Comprar
                </button>
                    </div>
                `;


          });
          container.innerHTML = html;
      })
      .catch(error => {
          console.error('Error al cargar productos:', error);
      });
});



function filtrarCategoria(categoria) {
    const productos = document.querySelectorAll('.producto');
    const botones = document.querySelectorAll('.categorias-menu button');
  
    // Mostrar/ocultar productos según categoría
    productos.forEach(producto => {
      if (categoria === 'todos' || producto.classList.contains(categoria)) {
        producto.style.display = 'block';
      } else {
        producto.style.display = 'none';
      }
    });
  
    // Quitar clase activa de todos los botones
    botones.forEach(boton => boton.classList.remove('activo'));
  
    // Agregar clase activa al botón seleccionado
    const botonActivo = document.querySelector(`.categorias-menu button[onclick*="${categoria}"]`);
    if (botonActivo) {
      botonActivo.classList.add('activo');
    }
  }

  //nos marca por defecto la opcion de todos remarcada
  window.addEventListener('DOMContentLoaded', () => {
    filtrarCategoria('todos');
  });
    