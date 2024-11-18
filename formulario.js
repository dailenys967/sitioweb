document.getElementById("form-registro").addEventListener("submit", function (event) {
    event.preventDefault();

    const correoinicio = document.getElementById("correoinicio").value;
    const contraseñainicio = document.getElementById("contraseñainicio").value;

    const usuarioregistrado = JSON.parse(localStorage.getItem("usuarioregistrado"));

    if (
        usuarioregistrado &&
        usuarioregistrado.correo === correoinicio &&
        usuarioregistrado.contraseña === contraseñainicio
    ) {
        localStorage.setItem("nombreusuario", usuarioregistrado.nombre);
        window.location.href = "contenido.html";
    } else {
        alert("Correo o contraseña incorrectos.");
    }
});