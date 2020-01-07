var body = document.getElementsByTagName('BODY')[0];
var popup = document.getElementById('popup');
var form = document.getElementById('form');
var login = document.getElementById('login');
var regis = document.getElementById('register');
var typeForm = document.getElementsByClassName('type-form');

togglePopup = () => {
  popup.classList.toggle('d-flex');
  form.classList.toggle('d-flex');
  login.style.display = 'none';
  register.style.display = 'flex';
};

changeForm = () => {
  login.style.display == 'none' ? (login.style.display = 'flex') : (login.style.display = 'none');
  regis.style.display == 'flex' ? (regis.style.display = 'none') : (regis.style.display = 'flex');
  typeForm[0].style.display == 'none'
    ? (typeForm[0].style.display = 'flex')
    : (typeForm[0].style.display = 'none');
  typeForm[1].style.display == 'flex'
    ? (typeForm[1].style.display = 'none')
    : (typeForm[1].style.display = 'flex');
};
