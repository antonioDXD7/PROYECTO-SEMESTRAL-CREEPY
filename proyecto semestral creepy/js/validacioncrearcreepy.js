//jquery//

$(document).ready(function () {

    $("#subircreepy").submit(function (e) {

        e.preventDefault();
        let mensajesMostrar = "";
        let entrar = false;


        var nombre = $("#resumencreepy").val();
        if (nombre.trim().length < 90 || nombre.trim().length > 103) {
            mensajesMostrar += "la longitud del resumen no es la correcta <br>"
            entrar = true;
        }

        //trim le quita los espacios en blanco//

        var letrainicial = nombre.charAt(0);
        if (!esMAYUSCULA(letrainicial)) {
            mensajesMostrar += "la primera letra del resumen  es minuscula <br>"
            entrar = true;
        }

        if (entrar) {
            $("#mensajesc").html(mensajesMostrar);
        }
        else {
            $("#mensajesc").html("creepypasta enviado");
        }


    });


    function esMAYUSCULA(letra) {
        return letra == letra.toUpperCase()
    }

})