$(document).ready(function () {

    $("#enviarmensajeadmi").submit(function (e) {

        e.preventDefault();
        let mensajesMostrar = "";
        let entrar = false;



        var contraseñalogin = $("#mensajeadmi").val();
        if (contraseñalogin.trim().length < 50 || contraseñalogin.trim().length > 200) {
            mensajesMostrar += "el mensaje  debe tener entre 50 y 200  caracteres <br> sin repetir bastante una palabras tipo :aaaaaaaaa o palapalapalapala  <br>"
            entrar = true;
        }

        var letrainicial = contraseñalogin.charAt(0);
        if (!esMAYUSCULA(letrainicial)) {
            mensajesMostrar += "la primera letra debe de ser  mayuscula<br>"
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