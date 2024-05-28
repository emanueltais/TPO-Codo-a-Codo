document.addEventListener("DOMContentLoaded", function() {
  // Cargar el encabezado
  fetch("inc/header.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("header-container").innerHTML = data;
    });

  // Cargar el pie de página
  fetch("inc/footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer-container").innerHTML = data;
    });
});