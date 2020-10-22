document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var inputs = this.elements;
        var errorMessage = document.querySelector('.error-message');
        errorMessage.innerText = '';
        var email = inputs[0];
        var name = inputs[1];
        var surname = inputs[2];
        var password = inputs[3];
        var rpassowrd = inputs[4];
        var checkbox = inputs[5];
        if (!email.value.includes('@')) {
            errorMessage.innerText += 'Email must contain the @ sign!\n';
        }
        if (name.value.length <= 6) {
            errorMessage.innerText += "Your name is too short!\n";
        }
        if (surname.value.length <= 6) {
            errorMessage.innerText += "Your surname is too short!\n";
        }
        if (password.value === '' || rpassowrd.value === '' && password.value !== rpassowrd.value) {
            errorMessage.innerText += "Passwords do not match or are empty!\n";
        }
        if (!checkbox.checked) {
            errorMessage.innerText += "You must accept the terms!";
        }
        if (errorMessage.innerText === '') {
            this.submit();
        }
    });

});

