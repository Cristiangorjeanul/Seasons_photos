document.addEventListener('DOMContentLoaded', function () {

    var button = document.querySelector('#button');
    var counter = 1;


    button.addEventListener('click', function () {
        document.querySelector('h6 span').innerText = counter;
        counter++;
    });

}); 
