const loginSubmit = document.getElementById('log-in-btn');

function login() {
    var userForm = {
        userName: document.getElementById('login-email').value,
        password: document.getElementById('login-password').value
    };
    axios.get ('http://45.77.253.146:3000/api/auth/login', userForm)
    .then (respond => {
        processLogin(respond);
    })
    .catch(error => {
        console.log(error);
    });
}

function processLogin(respond) {
    var btn = document.getElementById('log-in');
    btn.style.display = 'none'; 
}

loginSubmit.addEventListener('click', login);

