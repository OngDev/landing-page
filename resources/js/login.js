// const loginSubmit = document.getElementById('log-in-btn');

// function login() {
//     const userForm = {
//         email: document.getElementById('login-email').value,
//         password: document.getElementById('login-password').value
//     };
//     axios.post(loginURL, userForm)
//     .then (response => {
//         processLogin();
//     })
//     .catch(error => {
//         console.log(error);
//     });
// }

// function processLogin() {0
//     const button = document.getElementById('log-in');
//     const lock = document.getElementsByClassName('disable-scrolling');
//     const loginForm = document.getElementById('form-container');
//     button.style.display = 'none'; 
//     loginForm.style.display = 'none';
//     body.classList.toggle('disable-scrolling'); //enable scrolling
// }

// loginSubmit.addEventListener('click', login);
window.onload = function() {
    if ( !document.cookie ) {
        var uri = document.URL;
        var pos = uri.search("token");
        if (pos > 0) {
            var endTokenPos = uri.search("&isFirstLogin")
            var token = uri.substring(pos+6, endTokenPos);
            console.log(token);
        }
    }
    
}