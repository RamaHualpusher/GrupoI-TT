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
        //email = document.getElementById('email').value; //obtengo variable del html
        usuario = document.getElementById('usuario').value; //obtengo variable del html
        tipoUsuario = document.getElementById('tipoUsuario').value; //obtengo variable del html

        url = `http://${host}:${puerto}/api/users`; //url de la API correspondiente al backend

        if (validarCompleto(nombre, contrasena)) {

            let user = {
                user: usuario,
                pass: contrasena,
                role: tipoUsuario,
                name: nombre
               // email: "" //falta ingresar email
              };
              
              let response = await fetch(url, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(user)
              });
              
              let result = await response.json();
              //alert(result.message);

              alert("Usuario Agregado correctamente");
                    
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






function guardarCookie(nombre,valor,fecha) {
    document.cookie = nombre+"="+valor+";expires="+fecha;
    }

