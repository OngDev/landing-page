var body = document.getElementsByTagName('BODY')[0];
var popup = document.getElementById('popup');
var form = document.getElementById('form');

showPopup = () => {
  popup.style.display = 'block';
  form.style.display = 'flex';
};

hidePopup = () => {
  popup.style.display = 'none';
  form.style.display = 'none';
};
