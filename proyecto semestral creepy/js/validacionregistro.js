//jquery//

$(document).ready(function () {

    $("#registrof").submit(function (e) {

        e.preventDefault();
        let mensajesMostrar = "";
        let entrar = false;


        var nombre = $("#nombreregistro").val();
        if (nombre.trim().length < 4 || nombre.trim().length > 9) {
            mensajesMostrar += "la longitud del nombre no es correcto <br>"
            entrar = true;
        }

        //trim le quita los espacios en blanco//

        var letrainicial = nombre.charAt(0);
        if (!esMAYUSCULA(letrainicial)) {
            mensajesMostrar += "la primera letra del nombre es minuscula <br>"
            entrar = true;
        }

        if (entrar) {
            $("#mensajes").html(mensajesMostrar);
        }
        else {
            $("#mensajes").html("formulario enviado");
        }


    });


    function esMAYUSCULA(letra) {
        return letra == letra.toUpperCase()
    }

})