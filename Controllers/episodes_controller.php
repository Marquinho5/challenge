<?php

if(isset($_GET['id'])){
    
    $id=$_GET['id'];
    $html=file_get_contents('Views/capitulos.html');
    $html=str_replace('//ID//', $id, $html);
    echo $html;
    
}
?>