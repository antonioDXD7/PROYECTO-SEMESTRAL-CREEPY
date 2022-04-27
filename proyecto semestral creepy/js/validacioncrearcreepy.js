//jquery//

$(document).ready(function () {

    $("#subircreepy").submit(function (e) {

        e.preventDefault();
        let mensajesMostrar = "";
        let entrar = false;



        var nombrecreepy1 = $("#nombrecreepycrear").val();
        if (nombrecreepy1.trim().length < 4 || nombrecreepy1.trim().length > 10) {
            mensajesMostrar += "el nombre debe tener minimo 4 letras max 10 <br>"
            entrar = true;
        }

        var letrainicial2 = nombrecreepy1.charAt(0);
        if (!esMAYUSCULA(letrainicial2)) {
            mensajesMostrar += "la primera letra del nombre debe de ser una  mayuscula<br>"
            entrar = true;
        }

        
    
        var confirmarnombredelcreepy = $("#confirmarnombrecreepy").val();
        if (confirmarnombredelcreepy != nombrecreepy1 ){
           mensajesMostrar += "los nombres no coinciden <br>" 
           entrar = true;
        }


        var resumencreepy = $("#resumencreepy").val();
        if (resumencreepy.trim().length < 90 || resumencreepy.trim().length > 103) {
            mensajesMostrar += "el resumen debe tener minimo 90 letras max 103 <br> sin repetir bastante una palabras tipo :aaaaaaaaa o palapalapalapala <br>"
            entrar = true;
        }

        //trim le quita los espacios en blanco//

        var letrainicial = resumencreepy.charAt(0);
        if (!esMAYUSCULA(letrainicial)) {
            mensajesMostrar += "la primera letra del resumen  es minuscula <br>"
            entrar = true;
        }
        

        var historiacreepy = $("#historiacreepy").val();
        if (historiacreepy.trim().length < 500 ) {
            mensajesMostrar += "la historia debe tener minimo 500 letras sin <br> repetir bastante una palabras tipo :aaaaaaaaa o palapalapalapala <br>"
            entrar = true;
        }

        //trim le quita los espacios en blanco//

        var letrainicial1 = historiacreepy.charAt(0);
        if (!esMAYUSCULA(letrainicial1)) {
            mensajesMostrar += "la primera letra de la historia  es minuscula <br>"
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