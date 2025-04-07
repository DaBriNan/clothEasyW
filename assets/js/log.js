document.addEventListener("DOMContentLoaded", () => {
    // Elementos del DOM
    const modal = document.getElementById("modalLogin");
    const btnAbrir = document.getElementById("btnAbrirModal");
    const btnCerrar = document.querySelector(".cerrar");
    const loginForm = document.getElementById("loginForm");
    const errorMsg = document.getElementById("errorLogin");

    // Usuarios válidos (simulando una base de datos)
    const usuariosValidos = [
        { usuario: "admin", password: "1234" },
        { usuario: "user1", password: "clave123" },
        { usuario: "test", password: "test" }
    ];

    // Abrir modal
    btnAbrir.addEventListener("click", (e) => {
        e.preventDefault();
        modal.style.display = "flex";
        errorMsg.style.display = "none";
        document.getElementById("usuario").focus();
    });

    // Cerrar modal
    btnCerrar.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Cerrar al hacer clic fuera del modal
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    // Validar login
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const usuario = document.getElementById("usuario").value.trim();
        const password = document.getElementById("password").value.trim();

        // Verificar credenciales
        const usuarioValido = usuariosValidos.some(
            u => u.usuario === usuario && u.password === password
        );

        if (usuarioValido) {
            // Guardar estado de login (opcional)
            localStorage.setItem('loggedIn', 'true');
            localStorage.setItem('username', usuario);
            
            // Redirigir a index.html
            window.location.href = "/index.html";
        } else {
            // Mostrar error y limpiar campos
            errorMsg.style.display = "block";
            document.getElementById("password").value = "";
        }
    });

    // Opcional: Cerrar modal con Escape
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.style.display === "flex") {
            modal.style.display = "none";
        }
    });
});