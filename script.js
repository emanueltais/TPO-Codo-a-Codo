document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var telefono = document.getElementById('telefono').value;
    var consulta = document.getElementById('consulta').value;
    var mensaje = document.getElementById('mensaje').value;
    var acepto = document.getElementById('acepto').checked;

    if (nombre && email && telefono && consulta && mensaje && acepto) {
        alert('Formulario enviado correctamente.');
        // Aquí puedes agregar la lógica para enviar el formulario
    } else {
        alert('Por favor, complete todos los campos.');
    }
});

          //Logica para boton volver inicio
document.addEventListener("DOMContentLoaded", function() {
    const backToTopButton = document.getElementById("backToTop");
    
    window.addEventListener("scroll", function() {
      if (window.scrollY > 300) {
        backToTopButton.style.display = "flex";
      } else {
        backToTopButton.style.display = "none";
      }
    });
    
    backToTopButton.addEventListener("click", function() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  });
