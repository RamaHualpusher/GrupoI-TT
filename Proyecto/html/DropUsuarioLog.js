const btns = document.querySelectorAll('.dp');
const dropMenus = document.querySelectorAll('.drop-menu');

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        removeActive();
        btn.classList.add('active');
        document.querySelector(btn.dataset.target).classList.add('active');
    })
})

const removeActive = () => {
   //  si no esta en uso el boton desactiva la iluminacion del marco
    btns.forEach(btn => btn.classList.remove('active'));
   //Desactiva la barrra del perfil al hacer un click afuera
    dropMenus.forEach(dropmenu => dropmenu.classList.remove('active'));
}

window.onclick = (e) => {

   // si el puntero del usuario no cordina con el boton perfil hace lo siguiente
    if (!e.target.matches('.dp')) {
        removeActive()
    }
}