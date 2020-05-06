const form = document.getElementById('form-container');
const loginForm = document.getElementById('log-in-form');
const registerForm = document.getElementById('register-form');
const successPopup = document.getElementById('success-popup');

function togglePopup(popupId) {
  const popup = document.getElementById(popupId);
  popup.classList.toggle('d-none');
}

function changeForm() {
  loginForm.classList.toggle('d-none');
  registerForm.classList.toggle('d-none');
}
