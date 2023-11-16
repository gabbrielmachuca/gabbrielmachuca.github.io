function mostrarEnlacesPlanes() {
    // Obtenemos los enlaces de "Obtener plan"
    var enlacesPlanes = document.querySelectorAll(".general-planes .btn-plan");
  
    // Animamos los enlaces de "Obtener plan"
    enlacesPlanes.forEach((enlace) => {
      enlace.classList.add("animacion");
    });
  }
  
  // Eventos de scroll
    window.addEventListener("scroll", () => {
    // Comprobamos si estamos en la sección de planes
    if (window.scrollY >= document.querySelector(".g2-container").offsetTop) {
      // Mostramos los enlaces de "Obtener plan"
      mostrarEnlacesPlanes();
    }
  });