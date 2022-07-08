import { host, puerto } from "./config.js";
let nombre;
let contrasena;
let usuario;
let tipoUsuario;
let url;
let email;


//Obtengo los datos del formulario y consulto login con backend
window.registrarUsuario =
    async function registrarUsuario() {

        console.log('auauyauau');

        nombre = document.getElementById('nombreCompleto').value; //obtengo variable del html
        contrasena = document.getElementById('contrasena').value; //obtengo variable del html
        usuario = document.getElementById('usuario').value; //obtengo variable del html

        url = `https://${host}/api/users`; //url de la API correspondiente al backend

        if (validarCompleto(nombre, contrasena)) {

            let user = {
                user: usuario,
                pass: contrasena,
                role: 'Delivery',
                name: nombre

            };

            let response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(user)
            });

            let result = await response.json();


            alert("Usuario Agregado correctamente");
            window.location = "index.html";

        } else {
            alert("Complete nombre y contraseña por favor");
        }

    };







function validarCompleto(nombre, contrasena) {
    console.log(nombre);
    if ((nombre == '') || (contrasena == '')) {
        return false;
    } else {
        return true;
    }
}






function guardarCookie(nombre, valor, fecha) {
    document.cookie = nombre + "=" + valor + ";expires=" + fecha;
}

