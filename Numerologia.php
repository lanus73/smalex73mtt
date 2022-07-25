<?php
include("cabecera.php");
?>
<body>
<?php
include("Menu.php");
?>
      <div class="wrapper">
  <div class="signature">
    <!--small>&copy;Vikram Kumar</small-->
  </div>
  <form class="main-form">
    <h1 class= "titulo">Numerologia</h1>
    <input name="name" type="text" value= "mendoza alejandro jose" placeholder="Ingrese Apellido/s y nombres">
    <div class="name-error error"></div>
    <input class="dob" type="text" value= "1973-11-15" placeholder="Ingrese Fecha de Nacimiento">
    <div class="dob-error error"></div>

    <label for="save">
      Remember Input
      <input type="checkbox" name="save-data" id="save">
    </label>
    <button type="submit">Calcular</button>


  </form>

  <ul class="numberTypes">
    <li class="sendero-vida">


    </li>
    <li class="alma"></li>
    <li class="destino"></li>
    <li class="personalidad"></li>
  </ul>
</div>
</body>
</html>
<?php
include("pie.php");
?>