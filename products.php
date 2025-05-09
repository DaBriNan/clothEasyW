<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Productos - ClothEasy</title>
  <link rel="stylesheet" href="/assets/estilos/clotheS.css">
  <link rel="icon" type="image/x-icon" href="/assets/img/logoFinal.png">
  <link rel="stylesheet" href="/assets/estilos/productos.css">
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
  <style>
    .btn-megusta {
      background: none;
      border: none;
      cursor: pointer;
      font-size: 1.2rem;
      padding: 5px;
    }
    .btn-megusta.activo {
      color: red;
    }
    .productos-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 20px;
      padding: 20px;
    }
    .producto {
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 15px;
      text-align: center;
    }
    .producto img {
      max-width: 100%;
      height: auto;
      border-radius: 5px;
    }
    .producto button {
      margin: 5px;
      padding: 8px 12px;
      cursor: pointer;
    }
  </style>
</head>
<body>

  <header class="barra-menu">
    <a href="/index.html">
        <img src="/assets/img/logoFinal.png" class="imgMenu" alt="Inicio">
    </a>
    <div class="container">
      <form action="" class="search-form">
        <input type="text" placeholder="Buscar..." class="search-input" />
        <div class="search-button">
          <i class="fa-solid fa-magnifying-glass search-icon"></i>
          <i class="fa-solid fa-xmark search-close"></i>
        </div>
      </form>
    </div>
    <a href="/pages/vender.html" class="vender"><span class="texto">Vender</span></a>
    <a href="/pages/productos.html" class="comprar"><span class="textoc">Comprar</span></a>
    <a href="/pages/paraTi.html" class="paraTi"><span class="textop">Para ti</span></a>
    <a href="/pages/meGusta.html" class="meGusta">
      <img src="/assets/img/Heart.png" alt="meGusta" class="imagen">
    </a>
    <a href="/pages/login.html" class="user">
        <img src="/assets/img/user.png" alt="login" class="imagen">
    </a>
  </header>

  <nav class="categorias-menu">
    <button onclick="filtrarCategoria('todos')">Todos</button>
    <button onclick="filtrarCategoria('hombre')">Hombre</button>
    <button onclick="filtrarCategoria('mujer')">Mujer</button>
    <button onclick="filtrarCategoria('nino')">Niño</button>
  </nav>

  <div class="cart-icon" id="cartIcon">
    <span class="material-symbols-outlined">shopping_cart</span>
    <span class="cart-count" id="cartCount">0</span>
  </div>

  <div class="cart-container" id="cartContainer">
    <div class="cart-header">
        <h2>Tu Carrito</h2>
        <span class="close-cart" id="closeCart">×</span>
    </div>
    <div id="cartItems"></div>
    <div class="cart-footer">
        <div class="cart-total">
            <h3>Total: $<span id="cartTotal">0</span></h3>
        </div>
        <button class="checkout-btn" id="checkoutBtn">Finalizar Compra</button>
    </div>
  </div>

  <div class="overlay" id="overlay"></div>

 
  <div class="product-list" id="productos-container">
  </div>

    <script>
      document.addEventListener('DOMContentLoaded', function() {
   //fetch('backend/productos.php')
fetch('http://localhost/Clotheasy/backend/productos.php')

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

    </script>

  



  <!-- <div class="product-list" id="productos-container"> -->
    <!-- Los productos se cargarán aquí con JS -->
    <!-- <script src="/assets/js/productos.js"></script> -->
    
  <!-- </div> -->

  <script src="../assets/js/productos.js"></script>

  <footer class="footer">
    <div class="footer-container">
        <div class="footer-logo">
            <h2>CLOTHEASY</h2>
            <p>REDES SOCIALES</p>
            <div class="social-icons">
                <img src="/assets/img/facebook.png" alt="Facebook">
                <img src="/assets/img/instagram.png" alt="Instagram">
                <img src="/assets/img/x.png" alt="Email">
            </div>
        </div>

        <div class="footer-links">
            <h3>COMPRA</h3>
            <ul>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Precios</a></li>
                <li><a href="#">Reembolso</a></li>
            </ul>
        </div>

        <div class="footer-links">
            <h3>COMPAÑÍA</h3>
            <ul>
                <li><a href="#">Sobre Nosotros</a></li>
                <li><a href="#">Contacto</a></li>
                <li><a href="#">Noticias</a></li>
                <li><a href="#">Soporte</a></li>
            </ul>
        </div>

        <div class="footer-newsletter">
            <h3>NO TE PIERDAS LAS OFERTAS</h3>
            <form>
                <input type="email" placeholder="Ingresa tu correo">
                <button type="submit">ENVIAR</button>
            </form>
        </div>
    </div>
    <div class="footer-bottom">
        <p>Términos • Privacidad • Cookies</p>
    </div>
  </footer>

  <script>
    // Función para manejar el "Me Gusta"
    document.addEventListener("DOMContentLoaded", function() {
      const botonesMeGusta = document.querySelectorAll(".btn-megusta");
      
      // Verificar favoritos al cargar la página
      let favoritos = JSON.parse(localStorage.getItem("meGusta")) || [];
      
      botonesMeGusta.forEach(btn => {
        const productId = btn.getAttribute('data-id');
        
        // Marcar como activo si ya está en favoritos
        if (favoritos.some(p => p.id === productId)) {
          btn.classList.add("activo");
        }
        
        // Manejar clic en el botón
        btn.addEventListener("click", function() {
          const product = {
            id: btn.getAttribute('data-id'),
            name: btn.getAttribute('data-name'),
            price: btn.getAttribute('data-price'),
            image: btn.getAttribute('data-image')
          };
          
          let favoritos = JSON.parse(localStorage.getItem("meGusta")) || [];
          const existeIndex = favoritos.findIndex(p => p.id === product.id);
          
          if (existeIndex === -1) {
            // Añadir a favoritos
            favoritos.push(product);
            btn.classList.add("activo");
          } else {
            // Quitar de favoritos
            favoritos.splice(existeIndex, 1);
            btn.classList.remove("activo");
          }
          
          localStorage.setItem("meGusta", JSON.stringify(favoritos));
        });
      });
      
      // Función para añadir al carrito (simulada)
      window.addToCart = function(id, name, price, image) {
        alert(`Producto ${name} añadido al carrito`);
        // Aquí iría la lógica real para añadir al carrito
      };
    });
  </script>




</body>
</html>