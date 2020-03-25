const regSubmit = document.getElementById('reg-btn');

function register() {
    var userData = {
        fullname: document.getElementById('reg-name').value,
        email: document.getElementById('reg-email').value,
        password: document.getElementById('reg-password').value
    };

    axios.post('http://45.77.253.146:3000/api/auth/register', userData)
    .then(response => {
        popupResponse(response);
    })
    .catch(error => {
        console.log(error);
    });
}

function popupResponse(response) {
    var btn = document.getElementById('log-in');
    btn.style.display = 'none';
  
    var tmp = document.createElement('DIV');
    tmp.appendChild(document.createTextNode('Hello'));
    tmp.id = 'wc-user';
    var header = document.getElementById('header');
    header.appendChild(tmp);
    
    var popup = document.getElementById('sucess-pop-up');
    popup.style.display = 'block';
}

regSubmit.addEventListener('click', register);