<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/x-icon" href="/assets/img/logoFinal.png">
    <link rel="stylesheet" href="clotheS.css">
    <link rel="stylesheet"  href="/assets/estilos/vender.css" >
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet">
    
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />

    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&display=swap" rel="stylesheet">
    <title>Vender</title>
</head>
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

    <div class="meGusta">
        <img src="/assets/img/Heart.png" alt="meGusta" class="imagen">
    </div>
    <a href="/pages/login.html" class="user">
        <img src="/assets/img/user.png" alt="login" class="imagen">
    </a>
    
    
</header> 

<h1><span class="azul">Publicar</span> <span class="celeste">Producto</span></h1>

<body>
    <main>
         <section class="formulario">
      <h2>Detalles del Producto</h2>
      <form id="formularioProducto" action="#" method="POST" enctype="multipart/form-data">

        <label>Subir Imagen:</label>
        <input type="file" id="imagen" name="imagen" accept="image/*" required />

        <label>Nombre del Producto:</label>
        <input type="text" id="nombre" name="producto" placeholder="Ej. Sudadera Palm Angels" required />

        <label>Precio:</label>
        <input type="number" id="precio" name="precio" placeholder="$" required min="1" />

        <label>Talla:</label>
        <input type="text" id="talla" name="talla_id" placeholder="XS, S, M ..." required />

        <label>Categoría:</label>
        <select id="categoria" name="categoria_id" required>
          <option value="">Selecciona una categoría</option>
          <option value="1">Hombre</option>
          <option value="2">Mujer</option>
          <option value="3">Niño</option>
        </select>

        <label>Descripción:</label>
        <textarea id="descripcion" name="description" placeholder="Describe el producto..." required></textarea>

        <button type="submit">Publicar</button>
      </form>
    </section>

        
        <section class="resumen">
            <h1>Vista Previa</h1>
            <div class="preview">
                <img src="/assets/img/polo.png" alt="Vista previa del producto" >
                <p><strong>Precio:</strong> <span id="precioPreview">$0.00</span></p>
                <p><strong>Talla:</strong> <span id="tallaPreview">N/A</span></p>
            </div>
        </section>
    </main>



    <script src="https://code.jquery.com/jquery-3.7.1.min.js"
        integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>

    <script>
        function insertProduct(productData) {
    // Crear FormData para enviar los datos del formulario, incluyendo archivos
    const formData = new FormData();
    
    // Agregar todos los datos del producto al FormData
    formData.append('func', 'insertProduct');
    formData.append('producto', productData.nombre);
    formData.append('precio', productData.precio);
    formData.append('talla_id', productData.talla);
    formData.append('categoria_id', productData.categoria);
    formData.append('description', productData.descripcion);
    formData.append('imagen', productData.imagen); // Archivo de imagen

    $.ajax({
        type: 'POST',
        url: '../backend/vender.php', // Ruta a tu archivo PHP
        
        data: formData,
        processData: false, // Necesario para FormData
        contentType: false, // Necesario para FormData
        success: function(response) {
    console.log("Respuesta cruda:", response);
    try {
        let json = JSON.parse(response); // En caso de que response no venga parseado
        if(json.success) {
            alert('Producto publicado exitosamente!');
            window.location.href = "/produPrueba.php";
        } else {
            alert('Error: ' + json.message);
        }
    } catch (e) {
        alert("Error al parsear respuesta del servidor");
        console.error("Error JSON:", e);
        console.error("Respuesta recibida:", response);
    }
}

    });
}

// Uso del código en tu formulario
$(document).ready(function() {
    $('#formularioProducto').submit(function(e) {
        e.preventDefault();
        
        // Obtener datos del formulario
        const productData = {
            nombre: $('#nombre').val(),
            precio: $('#precio').val(),
            talla: $('#talla').val(),
            categoria: $('#categoria').val(),
            descripcion: $('#descripcion').val(),
            imagen: $('#imagen')[0].files[0] // Obtener el archivo de imagen
        };
        
        // Validaciones básicas
        if(!productData.nombre || !productData.precio || !productData.imagen) {
            alert('Por favor complete todos los campos requeridos');
            return;
        }
        
        // Llamar a la función de inserción
        insertProduct(productData);
    });
});
    </script>

    
<script src="/assets/js/vender.js"></script>
<script src="/assets/js/scrpitInicio.js"></script>

</body>
</html>