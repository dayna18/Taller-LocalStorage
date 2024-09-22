// Obtener el elemento donde se mostrará el dato
const dataSpan = document.getElementById('data');

// Recuperar el valor almacenado en localStorage
const savedData = localStorage.getItem('dato');

// Mostrar el valor en la página si existe
if (savedData) {
    dataSpan.textContent = savedData;
} else {
    dataSpan.textContent = 'No hay datos almacenados.';
}