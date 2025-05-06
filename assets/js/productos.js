// const productos = [
//     { id: 1, nombre: "Bufanda Gris", precio: 399, imagen: "/assets/img/bufanda.png" },
//     { id: 2, nombre: "Jersey Real Madrid", precio: 499, imagen: "/assets/img/realm.png" },
//     { id: 3, nombre: "Polo Ralph", precio: 349, imagen: "/assets/img/polo azul.webp" },
//     { id: 4, nombre: "Playera Under Armour", precio: 279, imagen: "/assets/img/underc.png" },
//     { id: 5, nombre: "Jeans Clásicos", precio: 699, imagen: "/assets/img/jeansh.png" },
//     { id: 6, nombre: "Hoodie Nike", precio: 559, imagen: "/assets/img/nike1.webp" },
// ];

// const toggleSearch = () => {
//     const searchForm = document.querySelector('.search-form');
//     const searchButton = document.querySelector('.search-button');
//     const searchInput = document.querySelector('.search-input');
  
//     searchButton.addEventListener('click', () => {
//       searchForm.classList.toggle('active-search');
//     });
  
//     searchInput.addEventListener('keydown', (e) => {
//       if (e.key === 'Enter') {
//         e.preventDefault();
//         searchInput.value = '';
//         searchForm.classList.remove('active-search');
//       }
//     });
//   };
  
//   toggleSearch();

// fetch('../backend/productos.php')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data); // luego aquí renderizas productos
//   })
//   .catch(error => console.error('Error:', error));

document.addEventListener('DOMContentLoaded', function() {
  fetch('backend/productos.php')
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
                  </div>
              `;
          });
          container.innerHTML = html;
      })
      .catch(error => {
          console.error('Error al cargar productos:', error);
      });
});

