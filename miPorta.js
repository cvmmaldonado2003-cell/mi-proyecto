const form = document.getElementById('contact-form');
const formMsg = document.getElementById('form-msg');
    
const showMessage = (msg, success = false) => {
  formMsg.textContent = msg;
  formMsg.style.color = success ? 'green' : 'red';
  formMsg.style.fontWeight = '600';
  };

form.addEventListener('submit', e => { 
e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
        
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
  if (name.length < 2) {
  showMessage("Introduce tu nombre completo (mín. 2 caracteres).");
  return;
  }

  if (!emailRegex.test(email)) {
  showMessage("Introduce un correo electrónico válido.");
  return;
  }

  if (message.length < 10) {
  showMessage("El mensaje es demasiado corto (mín. 10 caracteres).");
  return;
  }

  // Simulación de envío exitoso
  showMessage("¡Mensaje enviado con éxito! Te responderé pronto.", true);
  form.reset();
  });
    