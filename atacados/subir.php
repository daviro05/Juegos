<?php
$uploadedfileload="true";
$msg = "";
$uploadedfile_size=$_FILES['uploadedfile']['size'];
echo $_FILES['uploadedfile']['name'];
if ($_FILES['uploadedfile']['size']>6000000)
{$msg=$msg."El archivo es mayor que 6MB, debes reduzcirlo antes de subirlo<BR>";
$uploadedfileload="false";}

$trozos = explode(".", $_FILES['uploadedfile']['name']); 
$extension = end($trozos); 

$file_name="defecto.".$extension;
$add="./imagenes/avatares/$file_name";
if($uploadedfileload=="true"){

if(move_uploaded_file ($_FILES['uploadedfile']['tmp_name'], $add)){
echo "<td><button id='crear'><img id='p1' class='personajes' src='./imagenes/avatares/$file_name'></button></td>";
echo " Ha sido subido satisfactoriamente";
}else{echo "Error al subir el archivo";}

}else{echo $msg;}

header('Location: index.html');

?>
