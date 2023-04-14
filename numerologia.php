<?php
include("cabecera.php");
?>
<body>
<?php
include("Menu.php");
?>
  <div class="content "></div>
  
  <div class= "row"> 
       <div class= "col-6"> 
       <center> 
        <form class="main-form">
          <h1 class= "titulo">Numerologia</h1>
          <input name="name" type="text" value= "mendoza alejandro jose" placeholder="Ingrese Apellido/s y nombres">
          <div class="name-error error"></div>
          <input  id="datepicker"class="" type="text"  placeholder="Ingrese Fecha de Nacimiento">
          <div class="dob-error error"></div>
          <label for="save">
            Recordar Ingreso
            <input type="checkbox" name="save-data" id="save">
          </label>
          <button type="submit">Calcular</button>
          </form>
          </center>
      </div>
      <div class= "col-6"> 
        <center>
          <ul class="numberTypes">
            <li class="sendero-vida"></li>
            <li class="alma"></li>
            <li class="destino"></li>
            <li class="personalidad"></li>
          </ul>
        </center>
      </div>
    </div>
</body>
</html>
<?php
include("pie.php");
?>
<script>
  $( function() {
    $( "#datepicker" ).datepicker(
      {
      dateFormat:  "dd-mm-yy"
    }
    );
  } );
  </script>