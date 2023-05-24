window.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signup-form');
    
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const nombreInput = document.getElementById('nombre');
      const apellidoInput = document.getElementById('apellido');
      const correoInput = document.getElementById('correo');
      
      const nombreError = document.getElementById('nombre-error');
      const apellidoError = document.getElementById('apellido-error');
      const correoError = document.getElementById('correo-error');
      
      // Reinicia los mensajes de error
      nombreError.textContent = '';
      apellidoError.textContent = '';
      correoError.textContent = '';
      
      // Validación de campos
      if (nombreInput.value.trim() === 'R') {
        nombreError.textContent = 'Ingrese su nombre';
      }
      
      if (apellidoInput.value.trim() === '') {
        apellidoError.textContent = 'Ingrese su apellido';
      }
      
      if (correoInput.value.trim() === '') {
        correoError.textContent = 'Ingrese su correo electrónico';
      }
      
      // Si no hay errores, puedes enviar el formulario
      if (!nombreError.textContent && !apellidoError.textContent && !correoError.textContent) {
        form.submit();
        console.log(user)
      }
    });
  });