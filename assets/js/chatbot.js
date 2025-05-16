document.addEventListener("DOMContentLoaded", () => {
  const chatContainer = document.getElementById("ai-chat-container");
  const openBtn = document.getElementById("open-chat");
  const closeBtn = document.getElementById("close-chat");
  const messagesContainer = document.getElementById("ai-chat-messages");
  const input = document.getElementById("ai-chat-input");
  const sendBtn = document.getElementById("ai-send-btn");

  const STORAGE_KEY = "chatbot_history"; // Clave para LocalStorage

  // --- Funciones para manejar LocalStorage (Persistencia) ---
  function saveChatHistory() {
    const messages = [];
    messagesContainer.querySelectorAll(".chat-message").forEach(msgElement => {
      messages.push({
        role: msgElement.classList.contains("user") ? "user" : "assistant",
        text: msgElement.textContent
      });
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  }

  function loadChatHistory() {
    const storedHistory = localStorage.getItem(STORAGE_KEY);
    if (storedHistory) {
      const messages = JSON.parse(storedHistory);
      messages.forEach(msg => addMessage(msg.role, msg.text, false)); // 'false' para no guardar de nuevo al cargar
    } else {
      // Si no hay historial, inicia con un mensaje de bienvenida
      addMessage("assistant", "¡Hola! 👋 ¿En qué puedo ayudarte hoy con ClothEasy?", false);
    }
  }
  // --- Fin de funciones para LocalStorage ---


  // --- Event Listeners para el UI del Chat ---
  openBtn.addEventListener("click", () => {
    chatContainer.style.display = "flex";
    openBtn.style.display = "none";
    messagesContainer.scrollTop = messagesContainer.scrollHeight; // Desplaza al final al abrir
  });

  closeBtn.addEventListener("click", () => {
    chatContainer.style.display = "none";
    openBtn.style.display = "flex";
    // Opcional: Si quieres que el historial se borre al cerrar, descomenta la línea de abajo.
    // localStorage.removeItem(STORAGE_KEY);
  });

  sendBtn.addEventListener("click", handleSend);
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") handleSend();
  });
  // --- Fin de Event Listeners ---


  // --- Función Principal para Enviar Mensajes (¡Con conexión al Backend!) ---
  async function handleSend() { // Usamos 'async' porque haremos una llamada 'await'
    const text = input.value.trim();
    if (!text) return; // No envía mensajes vacíos

    addMessage("user", text); // Muestra el mensaje del usuario
    input.value = ""; // Limpia el input

    // --- Lógica para comunicarse con el Backend (Modelo Gemini) ---
    try {
      // Realiza la solicitud HTTP al backend de Node.js
      // ¡IMPORTANTE! Asegúrate de que esta URL (http://localhost:3000)
      // coincida con el puerto en el que está escuchando tu 'server.js'
      const response = await fetch("http://localhost:3000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: text
        }),
      });

      if (!response.ok) { // Si la respuesta HTTP no es exitosa (ej. 404, 500)
        console.error(`Error HTTP: ${response.status} - ${response.statusText}`);
        addMessage("assistant", "Lo siento, hubo un problema con el servidor al obtener la respuesta.");
        return;
      }

      const data = await response.json(); // Parsea la respuesta JSON

      if (data.response) {
        addMessage("assistant", data.response); // Muestra la respuesta del asistente
      } else {
        // Esto se ejecuta si el backend responde con un 200 OK, pero el JSON no tiene 'response'
        addMessage("assistant", "Lo siento, hubo un problema al obtener la respuesta del asistente.");
      }

    } catch (error) {
      // Esto se ejecuta si hay un error de red o de comunicación con el backend
      console.error("Error al comunicarse con el backend:", error);
      addMessage("assistant", "Lo siento, no pude conectar con el asistente en este momento. Por favor, inténtalo más tarde.");
      // Opcional: Puedes aquí llamar a getAutoResponse(text) como fallback
      // addMessage("assistant", getAutoResponse(text), true);
    }
  }
  // --- Fin de Función Principal para Enviar Mensajes ---


  // --- Función para Añadir Mensajes a la Interfaz ---
  function addMessage(role, text, shouldSave = true) {
    const msg = document.createElement("div");
    msg.className = `chat-message ${role}`;
    msg.textContent = text;
    messagesContainer.appendChild(msg);
    messagesContainer.scrollTop = messagesContainer.scrollHeight; // Desplaza al final

    if (shouldSave) {
      saveChatHistory(); // Guarda el historial después de cada mensaje nuevo (si no es el inicial)
    }
  }

  // --- Lógica de Auto-respuesta (Opcional, como fallback) ---
  // Esta función SOLO se usaría si en el 'catch' de handleSend() decides llamarla.
  // Si tu backend con Gemini maneja TODAS las respuestas, esta función puede ser eliminada
  // o quedar solo para mensajes de bienvenida iniciales.
  function getAutoResponse(message) {
    const msg = message.toLowerCase();

    // Tu lógica de auto-respuesta actual
    if (msg.includes("hola") || msg.includes("buenas")) {
        return "¡Hola! ¿Buscas información sobre tallas o productos?";
    }
    if (msg.includes("talla") || msg.includes("medida")) {
        return "Las tallas van desde XS hasta XL. ¿Qué prenda te interesa?";
    }
    if (msg.includes("jeans") || msg.includes("pantalón")) {
        return "Nuestros jeans van del 24 al 38 y tienen ajuste stretch.";
    }
    if (msg.includes("camisa") || msg.includes("blusa") || msg.includes("playera")) {
        return "Las camisas están disponibles de la talla S a XXL.";
    }
    if (msg.includes("precio") || msg.includes("cuánto cuesta")) {
        return "¿De qué producto quieres saber el precio?";
    }
    if (msg.includes("bufanda gris")) {
        return "La Bufanda gris tiene un precio de $230 MXN y es talla Adulto.";
    }
    if (msg.includes("sombrero café")) {
        return "El Sombrero Café tiene un precio de $350 MXN y es talla 3.";
    }
    if (msg.includes("conjunto nike azul")) {
        return "El Conjunto Nike Azul cuesta $590 MXN y es talla G.";
    }
    if (msg.includes("tenis puma")) {
        return "Los Tenis Puma tienen un precio de $450 MXN y son talla 24.";
    }
    if (msg.includes("sudadera blanca")) {
        return "La Sudadera Blanca cuesta $100 MXN y es talla S.";
    }
    if (msg.includes("pantalones rotos")) {
        return "Los Pantalones Rotos cuestan $325 MXN y son talla 32.";
    }
    if (msg.includes("tines rosas")) {
        return "Los Tines Rosas tienen un precio de $50 MXN y son talla 23.";
    }
    if (msg.includes("corbata negra")) {
        return "La Corbata Negra cuesta $25 MXN y es talla Adulto.";
    }
    if (msg.includes("short guinda")) {
        return "El Short Guinda cuesta $100 MXN y es talla S.";
    }
    if (msg.includes("chamarra negra")) {
        return "La Chamarra Negra tiene un precio de $750 MXN y es talla S.";
    }
    if (msg.includes("envío") || msg.includes("envio") || msg.includes("entrega")) {
        return "El tiempo de entrega es de 3 a 5 días hábiles. El envío es GRATIS en compras superiores a $1,497 MXN por tiempo limitado (vigente por las próximas 48 horas desde tu compra).";
    }
    if (msg.includes("devolución") || msg.includes("regresar producto")) {
        return "Aceptamos devoluciones dentro de los 30 días posteriores a la compra, si el producto está sin usar y con etiquetas originales.";
    }
    if (msg.includes("métodos de pago") || msg.includes("formas de pago")) {
        return "Aceptamos tarjetas de crédito/débito (Visa, MasterCard, American Express), PayPal y pagos con OXXO Pay.";
    }
    return "Lo siento, no tengo información sobre eso. Por favor, visita nuestra sección de productos o contacta a soporte para más ayuda.";
  }
  // --- Fin de Lógica de Auto-respuesta ---


  // --- Inicialización: Carga el historial al cargar la página ---
  loadChatHistory();
});