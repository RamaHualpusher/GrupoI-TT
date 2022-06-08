import { host, puerto } from "./config.js";
let nombre;
let contrasena;
let url;
let idUsuario;


//Obtengo los datos del formulario y consulto login con backend
window.consultarLogin =
    async function consultarLogin() {
    
        nombre = document.getElementById('nombre').value; //obtengo variable del html
        contrasena = document.getElementById('contrasena').value; //obtengo variable del html
        url = ` http://${host}:${puerto}/api/users/${contrasena}/${nombre}`; //url de la API correspondiente al backend

        if (validarCompleto(nombre, contrasena)) {
            let respuesta = await fetch(url); //obtego respuesta de la API, en formato json
            let json;

            if (respuesta.ok) {
                // obtener cuerpo de la respuesta (método debajo)
                try {//Si obtenemos una respuesta exitosa es porque se encontro ese usuario y contraseña registrados en la base de datos
                    json = await respuesta.json(); //convertimos el json recibido en un objeto
                    nombre = json.name; //declaramos el nombre obtenido del objeto
                    idUsuario=json.id;
                    guardarCookie('cookIdUsuario',idUsuario,"31 Dec 2023 23:59:59 GMT") //guardamos en cookie el id del usuario 
                    //! SI FUERA NECESARIO SUMARLE A LA HORA DE CREACION UNA HORA DE DESTRUCCION CALCULADA POR EL TIEMPO DE SESION
                    //! PARA QUE NO SE DESTRUYA LA COOKIE AL CERRAR LA PAGINA
                    //! POR EJEMPLO SI EL USUARIO TIENE UNA SESION DE 30 MINUTOS
                    //! SE CREARA UNA COOKIE CON EL ID DEL USUARIO Y SE DESTRUIRIA EN EL MINUTO 30

                    //* AL CERRAR SESION EL USUARIO SE DESTRUYE LA COOKIE
                    //* POR EJEMPLO SI EL USUARIO TIENE UNA SESION DE 30 MINUTOS
                    
                    alert("Bienvenido " + nombre);
                    window.open("./Home.html", "_self"); //abro nuevo html
                } catch (error) {//Si no hay conexión con el backend mostramos error
                    alert("Error! contraseña y/o nombre incorrecto");
                }
            }
            else {
                alert("Error-HTTP: " + respuesta.status);
            }
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

