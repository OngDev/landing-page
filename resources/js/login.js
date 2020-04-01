const loginSubmit = document.getElementById('log-in-btn');

let login = () => {
    var userForm = {
        userName = document.getElementById('login-email').value,
        password =document.getElementById('login-password').value
    }
    axios.get ('http://45.77.253.146:3000/', UserForm)
    .then (respond => {
        processLogin(respond);
    })
    .catch( error => {
        console.log(error);
    });
}

let processLogin = (respond) => {
    var btn = document.getElementById('log-in');
    btn.style.display = 'none'; 
}

loginSubmit.addEventListener('click', login());

