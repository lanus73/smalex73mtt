
<?php
include("cabecera.php");
?>
    <body>
                Ingrese su nombre:
    <input type="text" name="Resultado" id="Resultado" size="20">
    <br>
        <button type="button" id= "Enviar">Enviar
        </button>
    </body>
        </html>
<?php
include("pie.php");
?>
<script>
$('#Enviar').click(function(){
    valor= $("#Resultado").val();   //extraigo valor de input
    $.ajax({
    // la URL para la petición
    url : 'consultar.php',
 
    // la información a enviar
    data : { id : valor },
 
    // especifica si será una petición POST o GET
    type : 'POST',
 
    // el tipo de información que se espera de respuesta
    dataType : 'json',
 
    // código a ejecutar si la petición es satisfactoria;
    success : function(respuestaJSON) {
        alert(respuestaJSON.nombre); //muestro valor en pantalla
    },
 
    // código a ejecutar si la petición falla;
    error : function(jqXHR, status, error) {
        alert('Disculpe, existió un problema');
    }
});
   
});
</script>