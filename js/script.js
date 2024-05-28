
function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('show');
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let telefono = document.getElementById('telefono').value;
    let consulta = document.getElementById('consulta').value;
    let mensaje = document.getElementById('mensaje').value;
    let acepto = document.getElementById('acepto').checked;

    // Limpiar clases de error previas
    document.getElementById('nombre').classList.remove('error');
    document.getElementById('email').classList.remove('error');
    document.getElementById('telefono').classList.remove('error');
    document.getElementById('consulta').classList.remove('error');
    document.getElementById('mensaje').classList.remove('error');
    document.getElementById('acepto').classList.remove('error');

    if (nombre && email && telefono && consulta && mensaje && acepto) {
        alert('Formulario enviado correctamente.');
        // Aquí puedes agregar la lógica para enviar el formulario
    } else {
        // Validar los campos y agregar clase de error si es necesario
        if (nombre === "") {
          document.getElementById('nombre').classList.add('error');
        }

        if (email === "") {
            document.getElementById('email').classList.add('error');
        }

        if (telefono === "") {
            document.getElementById('telefono').classList.add('error');
        }

        if (consulta === "") {
            document.getElementById('consulta').classList.add('error');
        }

        if (mensaje === "") {
            document.getElementById('mensaje').classList.add('error');
        }

        if (!acepto) {
            document.getElementById('acepto').classList.add('error-checkbox');
        }
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
