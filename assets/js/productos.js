

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
                  <div class="product">
                      <img src="assets/images/${p.imagen}" alt="${p.producto}">
                      <h3>${p.producto}</h3>
                      <p>$${p.precio.toFixed(2)}</p>
                      <p>Talla: ${p.talla}</p>
                      <p>Categoría: ${p.categoria || 'Sin categoría'}</p>
                  </div>
              `;
          });
          container.innerHTML = html;
      })
      .catch(error => {
          console.error('Error al cargar productos:', error);
      });
});



// function hola(){
//     alert("holaa")
// }