// script.js
const showLogin = document.getElementById('showLogin');
const showRegister = document.getElementById('showRegister');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

showLogin.addEventListener('click', () => {
  loginForm.classList.add('active');
  registerForm.classList.remove('active');
});

showRegister.addEventListener('click', () => {
  registerForm.classList.add('active');
  loginForm.classList.remove('active');
});

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = document.getElementById('loginUser').value;
  const pass = document.getElementById('loginPass').value;
  const error = document.getElementById('loginError');

  if (user === 'danier' && pass === '1234') {
    error.textContent = '';
    alert('¡Bienvenido!');
  } else {
    error.textContent = 'Credenciales incorrectas.';
  }
});

registerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = document.getElementById('regUser').value;
  const email = document.getElementById('regEmail').value;
  const pass = document.getElementById('regPass').value;
  const error = document.getElementById('registerError');

  if (user && email && pass.length >= 4) {
    error.textContent = '';
    alert('Registro exitoso');
  } else {
    error.textContent = 'Completa todos los campos correctamente.';
  }
});