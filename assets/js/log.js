
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modalLogin");
    const btnAbrir = document.getElementById("btnAbrirModal");
    const btnCerrar = document.querySelector(".cerrar");
    const loginForm = document.getElementById("loginForm");
    const errorMsg = document.getElementById("errorLogin");

    btnAbrir.addEventListener("click", (e) => {
        e.preventDefault();
        modal.style.display = "flex";
        errorMsg.style.display = "none";
        document.getElementById("usuario").focus();
    });

    btnCerrar.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    // loginForm.addEventListener("submit", async (e) => {
    //     e.preventDefault();

    //     const usuario = document.getElementById("usuario").value.trim();
    //     const password = document.getElementById("password").value.trim();

    //     try {
    //         const respuesta = await fetch("../backend/login.php", {
    //             method: "POST",
    //             headers: {
    //                 //"Content-Type": "application/json"
    //                 "Content-Type": "application/x-www-form-urlencoded"
    //             },
    //             body: `correo=${encodeURIComponent(usuario)}&contra=${encodeURIComponent(password)}`
    //         });

    //         const datos = await respuesta.json();

    //         if (datos.success) {
    //             // Redirigir si el login fue exitoso
    //             window.location.href = "index.html"; // o tu página principal
    //         } else {
    //             // Mostrar mensaje de error
    //             errorMsg.style.display = "block";
    //             errorMsg.textContent = datos.message || "Login fallido.";
    //             document.getElementById("password").value = "";
    //         }

    //     } catch (error) {
    //         console.error("Error en la solicitud:", error);
    //         errorMsg.style.display = "block";
    //         errorMsg.textContent = "Error del servidor.";
    //     }
    // });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.style.display === "flex") {
            modal.style.display = "none";
        }
    });
});
