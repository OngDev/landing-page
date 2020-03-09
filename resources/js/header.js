var body = document.getElementsByTagName('BODY')[0];
var popup = document.getElementById('pop-up');
var form = document.getElementById('form');
var Login = document.getElementById('log-in-form');
var Register = document.getElementById('register-form');

togglePopup = () => {
  popup.classList.toggle('d-flex');
  form.classList.toggle('d-flex');
  Login.style.display = 'block';
  Register.style.display = 'none';
};

changeForm = () => {
  if (Login.style.display === 'block') {
    Login.style.display = 'none';
    Register.style.display = 'block';
  }
  else {
    Login.style.display = 'block';
    Register.style.display = 'none';
  }
}
