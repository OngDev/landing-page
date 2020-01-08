var body = document.getElementsByTagName('BODY')[0];
var popup = document.getElementById('popup');
var form = document.getElementById('form');
var login = document.getElementById('login');
var register = document.getElementById('register');
var have = document.getElementById('have');
var need = document.getElementById('need');
var forgot = document.getElementById('forgot');
var typeForm = document.getElementsByClassName('type-form');

togglePopup = () => {
  popup.classList.toggle('d-flex');
  form.classList.toggle('d-flex');
  login.style.display = 'flex';
  register.style.display = 'none';
  have.style.display = 'none';
  need.style.display = 'flex';
  forgot.style.display = 'flex';
};

changeForm = () => {
  if (login.style.display == 'flex' || register.style.display == 'none') {
    typeForm[0].style.display = 'none';
    typeForm[1].style.display = 'flex';
    login.style.display = 'none';
    register.style.display = 'flex';
    have.style.display = 'flex';
    need.style.display = 'none';
    forgot.style.display = 'none';
  } else if (login.style.display == 'none' || register.style.display == 'flex') {
    typeForm[0].style.display = 'flex';
    typeForm[1].style.display = 'none';
    login.style.display = 'flex';
    register.style.display = 'none';
    have.style.display = 'none';
    need.style.display = 'flex';
    forgot.style.display = 'flex';
  }
};
