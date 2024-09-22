// Obtener el elemento input y el botón
const inputText = document.getElementById('inputText');
const buttonText = document.getElementById('buttonText');

// Agregar un evento al botón para guardar el texto en localStorage
buttonText.addEventListener('click', function() {
    const text = inputText.value;  // Obtener el valor del input
    if (text) {
        localStorage.setItem('dato', text);  // Guardar el valor en localStorage
        alert('¡Dato guardado!');  // Alerta opcional para confirmar
    } else {
        alert('Por favor, ingresa algún texto.');
    }
});