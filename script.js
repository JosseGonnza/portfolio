function openMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('open');
}

document.getElementById("formularioCorreo").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente
    
    // Obtener el valor del correo electrónico ingresado por el usuario
    var correo = document.getElementById("correo").value;
    
    // Enviar el correo electrónico vacío a tu dirección
    window.location.href = "mailto:accion.quevedo@gmail.com?subject=Quería comentarte que...&body=" + correo;
});