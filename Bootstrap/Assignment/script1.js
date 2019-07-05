var user = {
    email: ['abc@gmail.com', 'p4t@gmail.com'],
    pass: ['1234', 'abcd'],
}

function check() {
    var i, find = 0;
    for (i = 0; i < user.email.length; i++) {
        if (document.getElementById('email').value == user.email[i] && document.getElementById('pass').value == user.pass[i]) {
            console.log('Match Found');
            top.location = "Home.html";
            find = 1;
        }
    }
    if (find == 0) {
        alert("Incorrect Account Credentials.Try Again");
    }
}