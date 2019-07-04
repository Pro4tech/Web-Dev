var user = {
    email: ['abc@gmail.com', 'p4t@gmail.com'],
    pass: ['1234', 'abcd'],
    check: function () {
        var i, sum = 0;
        for (i = 0; i < this.email.length; i++) {
            if (document.getElementById('email').value == this.email[i] && document.getElementById('pass').value == this.pass[i]) {
                window.location.replace("Home.html");
            }

        }
    },
}

function check() {
    var i;
    for (i = 0; i < user.email.length; i++) {
        if (document.getElementById('email').value == user.email[i] && document.getElementById('pass').value == user.pass[i]) {
            console.log('Match Found');
            window.location.replace("Home.html");
        }
    }
    console.log('Match Not Found');
}