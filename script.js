const $userDataInParagraph = document.querySelector('#datos-usuario');
const $welcomeMessage = document.querySelector('h1');
document.querySelector('#boton-ingreso').onclick = function inputUserData() {

    const $userAge = Number(document.querySelector('#ingreso-edad').value);
    const $userName = document.querySelector('#ingreso-nombre').value;
    const $userMiddleName = document.querySelector('#ingreso-segundo-nombre').value;
    const $userLastName = document.querySelector('#ingreso-apellido').value;

    $userDataInParagraph.innerText = `Tus datos son: ${$userName} ${$userMiddleName} ${$userLastName}, ${$userAge} años`;
    $welcomeMessage.innerText = `Bienvenido/a, ${$userName}`;

    return false;

}