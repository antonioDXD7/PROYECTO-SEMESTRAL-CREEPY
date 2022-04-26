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

        var apellido = $("#apellidoregistro").val();
        if (apellido.trim().length < 4 || apellido.trim().length > 9) {
            mensajesMostrar += "la longitud del apellido no es la correcta <br>"
            entrar = true;
        }

        var letrainicial1 = apellido.charAt(0);
        if (!esMAYUSCULA(letrainicial1)) {
            mensajesMostrar += "la primera letra del apellido es minuscula <br>"
            entrar = true;
        }


        var contraseña = $("#contraseñaregistro").val();
        if (contraseña.trim().length < 8) {
            mensajesMostrar += "la contraseña debe tener minimo 8 caracteres <br>"
            entrar = true;
        }

        var letrainicial2 = contraseña.charAt(0);
        if (!esMAYUSCULA(letrainicial2)) {
            mensajesMostrar += "la primera letra debe de ser una letra mayuscula<br>"
            entrar = true;
        }

        
    
        var contraseñaconfirmar = $("#confirmarcontraseñaregistro").val();
        if (contraseñaconfirmar != contraseña ){
           mensajesMostrar += "las contraseñas no coinciden <br>" 
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