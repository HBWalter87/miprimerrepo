document.addEventListener("DOMContentLoaded", function () {
  var nombre = document.getElementById("nombre");
  var apellido = document.getElementById("apellido");
  var email = document.getElementById("email");

  nombre.addEventListener("blur", verificarNombre);
  apellido.addEventListener("blur", verificarApellido);
  email.addEventListener("blur", verificarEmail);

  function verificarNombre() {
    if (nombre.value.trim() !== '') {
      nombre.style.backgroundColor = 'white'
    } else {
      nombre.style.backgroundColor = '#f15e5e7d'
    }
  }
  function verificarApellido() {
    if (apellido.value.trim() !== '') {
      apellido.style.backgroundColor = 'white'
    } else {
      apellido.style.backgroundColor = '#f15e5e7d'
    }
  }
  function verificarEmail() {
    if (email.value.trim() !== '') {
      email.style.backgroundColor = 'white'
    } else {
      email.style.backgroundColor = '#f15e5e7d'
    }
  }
    
  


  function validarCampo() {
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var email = document.getElementById("email").value;

  if (nombre.trim() === '' && apellido.trim() === '' && email.trim() === '') {
    alert("Por favor, complete el nombre, el apellido y el email.");
    return false;
  }
  else if (nombre.trim() === '' && apellido.trim()=== '') {
    alert("Por favor, complete el nombre y el apellido.")
    return false;
  }
  else if (nombre.trim() === '' && email.trim() === '') {
    alert("Por favor, complete el nombre y el email.")
    return false;
  }
  else if (apellido.trim() === '' && email.trim() === '') {
    alert("Por favor, complete el apellido y el email.")
    return false;
  }
  else if (nombre.trim() === '') {
    alert("Por favor, complete su nombre.")
    return false;
  }
  else if (apellido.trim() === '') {
    alert("Por favor, complete su apellido.")
    return false;
  }
  else if (email.trim() === '') {
    alert("Por favor, complete su email.")
    return false;
  }

  return true; 
}

  window.validarCampo = validarCampo;

});