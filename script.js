const cuentas = [
    { nombre: "Mali", contraseña: 123, saldo: 200 },
    { nombre: "Gera", contraseña: 456, saldo: 290 },
    { nombre: "Maui", contraseña: 789, saldo: 67 }
];

function pantallaCajero() {
    location.href = 'second.html';
}
function pantallaInicio() {
    location.href = 'index.html'
}
function consultarSaldo() {
    document.getElementById('pantalla').innerHTML = (`Tu saldo es ...`);
}

function validar(usuarioInput, contraseñaInput) {
    for (let index = 0; index < cuentas.length; index++) {
        if (usuarioInput == cuentas[index].nombre && contraseñaInput == cuentas[index].contraseña) {
            pantallaCajero()
        }
        else {
            document.getElementById('alerta').innerHTML = ('Usuario y/ó contraseña invalidos');
        }
    }
}

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault()
    let usuarioInput = document.getElementById('usuario').value
    let contraseñaInput = document.getElementById('contraseña').value
    validar(usuarioInput, contraseñaInput)
})


