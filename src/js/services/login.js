import { state } from '/assign-scratch/src/state/state.js';

console.log('state =>', state);

document.getElementById('login-message').innerHTML = '';

function httpSend(user, pass) {
    console.log('localStorage =>', localStorage);
    let xhttp = new XMLHttpRequest();

    let userInput = {
        username: user,
        password: pass
    };

    xhttp.addEventListener('load', function(event) {
        alert('Success!');
    });

    xhttp.addEventListener('error', function(event) {
        alert('Failure!');
    });

    xhttp.open('POST', 'http://localhost:8080/gate/');
    xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.send(JSON.stringify(userInput));
}

function loginService(e) {

    let user = document.getElementById('username').value;
    let pass = document.getElementById('password').value;

    httpSend(user, pass);
}

document.getElementById('login-submit').addEventListener('click', e => e.preventDefault());
document.getElementById('login-submit').addEventListener('click', loginService);