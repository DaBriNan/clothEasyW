<!-- <!DOCTYPE html>
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
    Los productos se cargarán aquí con JS
    <script src="/assets/js/productos.js"></script>
    
   </div> 

  <script src="/assets/js/productos.js"></script>
  <script src="/assets/js/buy.js"></script>
  

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
     // window.addToCart = function(id, name, price, image) {
       // alert(`Producto ${name} añadido al carrito`);
        // Aquí iría la lógica real para añadir al carrito
      //};
    });
  </script>




</body>
</html> -->
<?php

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- <link rel="stylesheet" href="capitulos.css"> -->
    <link rel="stylesheet" >
    <title>Capitulos</title>
    <link rel="icon" href="img/IEEE-FAVICON.png" type="image/png">
    <style>
        .home-down {
            margin-top: 30vw;
        }
    </style>
</head>

<body>
    <section id="chapters-list"></section>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"
        integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
    <!-- <script src="script.js"></script> -->

    <!-- <div id="chapterModal" class="modalChapter">
        <div class="chapter-content">
            <span class="close-chapter" >&times;</span>
            <img id="modalImage" alt="">
            <div class="modal-details">
                <h2 id="modalSigl" class="modal-siglas"></h2>
                <h2 id="modalTitle" class="modal-titulo"></h2>
                <h2 id="modalDate" class="modal-date">Fecha: </h2>
                <p id="modalDescription" class="modal-descripcion"></p>
            </div>
        </div>
    </div> -->


    <!-- <div class="producto mujer">
      <div class="imagen-contenedor">
        <img src="/assets/img/tenisPuma.png" alt="Tenis Puma">
      </div>
      <h3>Tenis Puma</h3>
      <p>$450 MXN</p>
      <p>Talla 24</p>
      <button class="btn-megusta" data-id="4" data-name="Tenis Puma" data-price="450" data-image="/assets/img/tenisPuma.png">❤️</button>
      <button onclick="addToCart(4,'Tenis Puma', 450, '/assets/img/tenisPuma.png')">Comprar</button>
    </div> -->

    <script>
        $(document).ready(function () {
            //getChapters();
            
          $.ajax({
              type: 'GET',
              url: '../backend/prueba.php?myInfo=getChapters',
              success: function (data) {
                 //alert(data)
                  const apiResult = JSON.parse(data)
                  const container = document.getElementById('chapters-list');

                  apiResult.forEach((result, idx) => {
                    //adaptar a tu codigo
                      const content = `
                      <div class="productos mujer" data-id=${result.categoriaP}>
                          <h2 class="titulo">${result.nombreProducto}</h2>
                          <img class ="img-Chapter" src=../assets/img/${result.rutaImagen} alt="chapter">
                          <p class="descripcion">${result.descripcionDeProducto}</p>
                          <button class="btn-more" onclick="">Ver más</button>
                      </div>
                      `;

                      container.innerHTML += content;
                  })
              }
          });
           
        });
    </script>

</body>

</html>