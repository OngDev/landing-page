const RegSubmit = document.getElementById('reg-btn');

function RegisterForm() {
    var UserData = {
        fullname: document.getElementById('reg-name').value,
        email: document.getElementById('reg-email').value,
        password: document.getElementById('reg-password').value
    };

    axios.post('http://45.77.253.146:3000/', UserData)
    .then(response => {
        SuccessfulPopup(response);
    })
    .catch(error => {
        ErrorMessage(error);
    });
}

function SuccessfulPopup(response) {
    var btn = document.getElementById('log-in');
    btn.style.display = 'none';
  
    var tmp = document.createElement('DIV');
    tmp.appendChild(document.createTextNode('Hello' + response.data));
    tmp.id = 'wc-user';
    var header = document.getElementById('header');
    header.appendChild(tmp);
    
    var popup = document.getElementById('sucess-pop-up');
    popup.style.display = 'block';
}

function ErrorMessage(error) {
    if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
    } 
    else if (error.request) {
        console.log(error.request);
    } 
    else {
        console.log('Error', error.message);
    }
}

RegSubmit.addEventListener('click', RegisterForm);