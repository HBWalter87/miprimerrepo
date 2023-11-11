document.addEventListener("DOMContentLoaded", function () {
  var nombre = document.getElementById("nombre");
  var apellido = document.getElementById("apellido");
  var email = document.getElementById("email");

  nombre.addEventListener("input", verificarContenido);
  apellido.addEventListener("input", verificarContenido);
  email.addEventListener("input", verificarContenido);

  function verificarContenido() {
    if (nombre.value.trim() !== '' && apellido.value.trim() !== '' && email.value.trim() !== '') {
      btnEnviar.removeAttribute("disabled");
    } else {
      btnEnviar.setAttribute("disabled", "disabled");
    }
  }


  function validarCampo() {
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var email = document.getElementById("email").value;

  if (nombre.trim() === '' || apellido.trim() === '' || email.trim() === '') {
    alert("Por favor, complete todos los campos obligatorios.");
    return false;
  }

  return true; 
}

});