var logOutBtn = document.getElementById('log-out');
var logInBtn = document.getElementById('log-in');

window.addEventListener('DOMContentLoaded', (event) =>{
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    var token = urlParams.get("token");
    var isFirstLogin = urlParams.get("isFirstLogin");

    if(token) {
        document.cookie = "userToken=" + token;
    }
    
    if(!document.cookie) {
        logOutBtn.style.display = 'none';
    } else{
        logInBtn.style.display = 'none';
    }
    
});

function logOut() {
    document.cookie = `userToken=; expires=${new Date().toUTCString()}; path=/;`;
    location.href = location.origin;
}

logOutBtn.addEventListener("click", logOut);