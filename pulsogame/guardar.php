
<?php 
$puntos = $_POST['puntos'];
$file = fopen("puntuaciones.txt", "w");
fwrite($file, $puntos. PHP_EOL);
fclose($file);
?>