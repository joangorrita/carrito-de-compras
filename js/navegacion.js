document.addEventListener('DOMContentLoaded', function() {
    const main = document.querySelector('.main'); 
    const buttonToggle = document.getElementById('toggle-button');

    buttonToggle.classList.add('button_grey'); 

    buttonToggle.addEventListener('click', function() {
        main.classList.toggle('dark-mode'); 
        updateButtonText();
    });

    function updateButtonText() {
        if (main.classList.contains('dark-mode')) {
            buttonToggle.textContent = 'Cambiar a modo claro';
        } else {
            buttonToggle.textContent = 'Cambiar a modo oscuro';
        }
    }

    updateButtonText();
});
