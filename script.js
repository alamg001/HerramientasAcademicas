// Puedes añadir aquí cualquier funcionalidad JavaScript que necesites
// Por ejemplo:
document.addEventListener('DOMContentLoaded', function() {
  console.log('Página cargada correctamente');
  
  // Ejemplo: Añadir animación a los botones de instalación
  const installButtons = document.querySelectorAll('.install-btn');
  installButtons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05)';
    });
    button.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
  });
});