function validateLogin(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (username === 'user' && password === 'pass'){
        alert('Login successfull!');
    } 
    else{
        alert('Invalid username or password. please try again.');
    }
}

