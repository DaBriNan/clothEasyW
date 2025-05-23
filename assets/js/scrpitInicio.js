
let duracionOferta = 48 * 60 * 60;
let intervalo;

document.addEventListener("DOMContentLoaded", () => {
    iniciarContador();
});

function iniciarContador() {
    actualizarContador(); // Llama una vez inmediatamente
    intervalo = setInterval(actualizarContador, 1000); // Y luego cada segundo
}

function actualizarContador() {
    const horas = Math.floor(duracionOferta / 3600);
    const minutos = Math.floor((duracionOferta % 3600) / 60);
    const segundos = duracionOferta % 60;

    document.getElementById("horas").innerHTML = `${horas.toString().padStart(2, '0')} <small>hrs</small>`;
    document.getElementById("minutos").innerHTML = `${minutos.toString().padStart(2, '0')} <small>min</small>`;
    document.getElementById("segundos").innerHTML = `${segundos.toString().padStart(2, '0')} <small>seg</small>`;

    if (duracionOferta <= 0) {
        clearInterval(intervalo);
        cambiarOferta();
    }

    duracionOferta--;
}

function cambiarOferta() {
    // Cambia el contenido de la oferta
    document.querySelector(".oferta-contenido h2").textContent = "¡NUEVA OFERTA!";
    document.querySelector(".oferta-contenido p").textContent = "*Descuento del 20% por 24 hrs.";

    // Reinicia el contador a 24 horas
    duracionOferta = 24 * 60 * 60;
    iniciarContador();
}

const toggleSearch = () => {
    const searchForm = document.querySelector('.search-form');
    const searchButton = document.querySelector('.search-button');
    const searchInput = document.querySelector('.search-input');
  
    searchButton.addEventListener('click', () => {
      searchForm.classList.toggle('active-search');
    });
  
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        searchInput.value = '';
        searchForm.classList.remove('active-search');
      }
    });
  };
  toggleSearch();