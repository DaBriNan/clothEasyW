
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
    