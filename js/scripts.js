// capturar evento de submit do formulario
const form = document.querySelector('#formulario');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('evento previnido.');
    setResultado('ola mundo');
});

// função setresultado
function setResultado (msg) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = `<p>${msg}</p>`;
}