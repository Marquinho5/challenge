<?php
if($_SERVER['REQUEST_METHOD']== "GET"){
    if(isset($_GET['view'])){
            switch($_GET['view']){
                case "Home":
                    include 'Views/index.html';
                break;
                case "Director":
                    include 'Views/director.html';
                break;
                case "Actores":
                    include 'Views/actores.html';
                break;
                default:
                    echo "Error";
                break;
            }
            
    }else{
        echo "Error";
    } 
}else{
    echo "Error";
}
?>