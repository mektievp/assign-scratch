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

    console.log('xhttp =>', xhttp);
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            console.log('xhttp.response', xhttp.response);
        }
    };

}

function loginService() {

    let user = document.getElementById('username').value.trim();
    let pass = document.getElementById('password').value.trim();
    let loginMessage = document.getElementById('login-message');
    let invalidChars = /[^A-Za-z0-9]/;

    if (user.length === 0) {
        loginMessage.innerHTML = 'No username given';
        return;
    } else if (user.length > 20) {
        loginMessage.innerHTML = 'Given username is too long';
        return;
    } else if (invalidChars.test(user)) {
        loginMessage.innerHTML = 'Username contains invalid characters. Only characters from the alphabet and numbers may be used.';
        return;
    }

    if (pass.length === 0) {
        loginMessage.innerHTML = 'No password given';
        return;
    } else if (pass.length > 20) {
        loginMessage.innerHTML = 'Given password is too long';
        return;
    } else {
        loginMessage.innerHTML = '';
    }



    console.log('user =>', user);
    console.log('pass =>', pass);

    httpSend(user, pass);
}

function washLoginInput() {

}

document.getElementById('login-submit').addEventListener('click', e => e.preventDefault());
document.getElementById('login-submit').addEventListener('click', loginService);